class AddNewHotelsTd < ActiveRecord::Migration
  def change
  	add_column :hotels, :has_food, :boolean
  	add_column :hotels, :has_kettle, :boolean
  	add_column :hotels, :has_sunbeds, :boolean
  	add_column :hotels, :has_playground, :boolean
  end
end
