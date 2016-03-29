class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :photo
      t.string :name
      t.string :description
      t.integer :album_id
      
      t.timestamps null: false
    end
  end
end
