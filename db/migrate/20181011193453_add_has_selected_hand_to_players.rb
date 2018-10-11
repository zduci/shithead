class AddHasSelectedHandToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :has_selected_hand, :boolean, default: false
  end
end
