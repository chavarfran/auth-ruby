class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :password_expirable, :secure_validatable, :password_archivable, :session_limitable, :expirable
  devise :database_authenticatable, :registerable,
         :recoverable, :confirmable, :rememberable, :validatable,
         :lockable, :password_expirable, :secure_validatable,
         :password_archivable, :session_limitable, :expirable
end
