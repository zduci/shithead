class AddPileToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :pile, :text
  end
end
