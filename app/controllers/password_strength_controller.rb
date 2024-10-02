class PasswordController < ApplicationController
  def check
    password = params[:password]
    strength = Zxcvbn.test(password)

    # Retorna la puntuación y sugerencias de fortaleza en formato JSON
    render json: { score: strength.score, feedback: strength.feedback }
  end
end
