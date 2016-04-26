class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :encrypted_password
      t.string :salt
      t.string :auth_token
      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
