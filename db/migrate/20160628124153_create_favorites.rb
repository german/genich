class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
    	t.integer :hotel_id
    	t.integer :user_id
    	t.integer :position
      t.timestamps null: false
    end

    add_index :favorites, :user_id
  end
end
