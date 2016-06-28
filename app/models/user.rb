class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :hotels
  has_many :articles
  has_many :favorites

  before_validation -> do
    self.uid = SecureRandom.uuid
    skip_confirmation!
  end
  validates :email, uniqueness: true, presence: true
  #validates :email, presence: true, uniqueness: true
  #validates :password, presence: true
end
