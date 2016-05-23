class AddProviderAndUidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid, :integer

    add_column :users, :tokens, :text
    add_column :users, :confirmed_at, :datetime
    
    add_index :users, [:provider, :uid]
  end
end
