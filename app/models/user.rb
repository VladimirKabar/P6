class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable ,:trackable, :rememberable
  # Czemu wywalenie tych 2 opcji pozwala działać tego kurwa nie wiem :D
end
