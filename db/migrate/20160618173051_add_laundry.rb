class AddLaundry < ActiveRecord::Migration
  def change
  	add_column :hotels, :has_laundry, :boolean
  end
end
