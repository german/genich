class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true
  validates :city_name,  presence: true

  belongs_to :user

  has_many :albums
  has_many :reviews
  has_many :favorites

  def cover_url
  	if self.cover_photo_id
  	  Photo.find_by(id:self.cover_photo_id).try(:photo).try(:url)
  	end
  end
end
