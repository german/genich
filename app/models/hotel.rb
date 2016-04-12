class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true

  has_many :albums
end
