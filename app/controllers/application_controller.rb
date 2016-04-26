class ApplicationController < ActionController::Base
  include Api::V1::SessionsHelper
  before_action :authenticate_user_from_token!
  respond_to :json

  def index
    render file: 'public/index.html'
  end

  def authenticate_user_from_token!
    auth_token = request.headers['Authorization']

    if auth_token
      authenticate_with_auth_token auth_token
    else
      authentication_error
    end
  end

  private

  def authenticate_with_auth_token(auth_token)
    unless auth_token.include?(':')
      authentication_error
      return
    end

    user_id = auth_token.split(':').first
    user = User.where(id: user_id).first

    if user && Devise.secure_compare(user.auth_token, auth_token)
      log_in user
    else
      authentication_error
    end
  end

  def authentication_error
    index
  end
end

