class ChangeGameStatusToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :games, :status, :integer, default: 0
  end
end
