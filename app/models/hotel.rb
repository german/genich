class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true
  validates :city_name,  presence: true

  belongs_to :user

  has_many :albums
  has_many :reviews

  def cover_url
  	if self.cover_photo_id
  	  Photo.find(self.cover_photo_id).try(:photo).try(:url, :medium)
  	end
  end
end
