require 'securerandom'
class User < ActiveRecord::Base
  devise :database_authenticatable, :validatable
  after_create :update_access_token!
  before_save :encrypt_password
  after_save :clear_password

  attr_accessor :password
  validates :username, :presence => true, :uniqueness => true, :length => { :in => 3..20 }
  validates :email, :presence => true, :uniqueness => true, :format => { :with => /@/ }
  validates :password, :presence => true
  validates_length_of :password, :in => 6..20, :on => :create

  def encrypt_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
    end
  end

  def clear_password
    self.password = nil
  end

  def self.authenticate(username_or_email = '', password = '')
    if  username_or_email.include? '@'
      user = User.find_by(email: username_or_email)
    else
      user = User.find_by(username: username_or_email)
    end
    if user && user.match_password(password)
      return user
    else
      return false
    end
  end

  def match_password(password='')
    encrypted_password == BCrypt::Engine.hash_secret(password, salt)
  end

  private
  def update_access_token!
    self.auth_token = generate_access_token
    save
  end

  def generate_access_token
    loop do
      token = "#{self.id}:#{Devise.friendly_token}"
      break token unless User.where(auth_token: token).first
    end
  end
end
