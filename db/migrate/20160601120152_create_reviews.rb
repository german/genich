class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :name, null: false
      t.text :description
      t.integer :hotel_id, null: false
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
