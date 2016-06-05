class AddPoolToHotels < ActiveRecord::Migration
  def change
  	add_column :hotels, :has_pool, :boolean
  end
end
