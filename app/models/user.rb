class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :password, presence: true, length: { minimum: 8, maximum: 128 }, format: {
          with: /\A(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*\z/,
          message: "Debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial."
        }, password: true
end
