class PasswordController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [ :check ] # Deshabilita CSRF solo para la acción check
    skip_before_action :authenticate_user!, only: [ :check ] # Deshabilita autenticación para la acción check

    def check
      password = params[:password]

      strength = Zxcvbn.test(password)

      render json: { score: strength.score }
    rescue => e
      puts "Error: #{e.message}" # Para depuración
      render json: { error: e.message }, status: 500
    end
end
