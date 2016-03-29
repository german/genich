class Album < ActiveRecord::Base
  belongs_to :hotel
  has_many :photos

  validates :name, presence: true
end
