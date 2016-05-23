class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true
  validates :city_name,  presence: true

  belongs_to :user
  
  has_many :albums
end
