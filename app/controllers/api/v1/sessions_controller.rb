class Api::V1::SessionsController < ApplicationController
  include Api::V1::SessionsHelper
  skip_before_action :authenticate_user_from_token!, only: [:create]

  def create
    authorized_user = User.authenticate(params[:username_or_email], params[:password])
    if authorized_user
      log_in authorized_user
      render json: {:user => @current_user}
    else
      render json: {:error => 'Invalid login attempt!'}
    end
  end
end
