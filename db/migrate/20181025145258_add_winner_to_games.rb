class AddWinnerToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :winner_id, :integer
  end
end
