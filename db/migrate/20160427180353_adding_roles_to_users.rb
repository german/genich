class AddingRolesToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :role, :string, enum: ['admin', 'owner', 'user']
  end
end
