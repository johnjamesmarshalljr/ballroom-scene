class SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: :omniauth

  def omniauth
    auth = request.env['omniauth.auth']
    user = User.find_by(email: auth.info.email)
    if user
      # Existing user: redirect to profile
      redirect_to "http://localhost:3000/profile?user_id=#{user.id}"
    else
      # New user: redirect to profile creation with Google info
      name = URI.encode_www_form_component(auth.info.name)
      email = URI.encode_www_form_component(auth.info.email)
      redirect_to "http://localhost:3000/profile/create?name=#{name}&email=#{email}"
    end
  end
end
