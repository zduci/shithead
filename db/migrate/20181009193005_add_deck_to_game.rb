class AddDeckToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :deck, :text
  end
end
