class Album < ActiveRecord::Base
  belongs_to :hotel
  has_many :photos

  validates :name, presence: true

  def cover
    if self.photos.any?
      self.photos.first.photo
    end
  end
end
