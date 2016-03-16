class Hotel < ActiveRecord::Base
  validates :name, uniqueness: true
end
