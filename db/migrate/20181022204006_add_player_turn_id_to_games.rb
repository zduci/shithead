class AddPlayerTurnIdToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :player_turn_id, :integer
  end
end
