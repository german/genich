class AddUsersFav < ActiveRecord::Migration
  def change
  	add_column :users, :userfav, :array
  end
end
