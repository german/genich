class AddHotelsAlbumsCover < ActiveRecord::Migration
  def change
  	add_column :hotels, :cover_photo_id, :integer
  end
end
