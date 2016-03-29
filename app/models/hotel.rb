class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true

  has_many :albums
end
