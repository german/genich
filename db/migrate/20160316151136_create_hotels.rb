class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :name
      t.text :description
      t.string :photo
      t.string :email
      t.string :phones
      t.integer :total_rooms
      t.integer :total_luxes
      t.text :rules
      t.integer :people_in_room
      t.integer :price_min
      t.integer :price_mean
      t.integer :price_max
      t.string :longitude
      t.string :latitude
      t.string :city_name
      t.string :type
      t.integer :dist_from_the_sea

      t.boolean :has_private_house
      t.boolean :has_private_kitchen
      t.boolean :has_private_shower
      t.boolean :has_fridge
      t.boolean :has_tv
      t.boolean :has_conditioning
      t.boolean :has_wifi
      t.boolean :has_parking
      t.boolean :has_transfer

      t.timestamps null: false
    end

    add_index :hotels, :price_min
    add_index :hotels, :price_max
    add_index :hotels, :price_mean

    add_index :hotels, :city_name
    add_index :hotels, :type
    add_index :hotels, :dist_from_the_sea
    add_index :hotels, :has_transfer
    add_index :hotels, :has_parking
    add_index :hotels, :has_wifi
    add_index :hotels, :has_private_shower
    add_index :hotels, :has_private_kitchen
    add_index :hotels, :has_conditioning
    add_index :hotels, :has_tv
    add_index :hotels, :has_fridge
    add_index :hotels, :has_private_house
  end
end
