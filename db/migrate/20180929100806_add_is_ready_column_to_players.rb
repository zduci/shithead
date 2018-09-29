class AddIsReadyColumnToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :is_ready, :boolean, default: false
  end
end
