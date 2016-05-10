class UpHoteltype < ActiveRecord::Migration
  def change
  	add_column :hotels, :hotel_type, :string
  end
end
