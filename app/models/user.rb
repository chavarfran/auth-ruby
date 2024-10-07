class User < ApplicationRecord
  devise :two_factor_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :password_expirable, :secure_validatable, :password_archivable, :session_limitable, :expirable
  devise :registerable,
         :recoverable, :confirmable, :rememberable, :validatable,
         :lockable, :password_expirable, :secure_validatable,
         :password_archivable, :session_limitable, :expirable
end
