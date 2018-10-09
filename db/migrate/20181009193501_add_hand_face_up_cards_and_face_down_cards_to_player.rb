class AddHandFaceUpCardsAndFaceDownCardsToPlayer < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :hand, :text
    add_column :players, :face_down_cards, :text
    add_column :players, :face_up_cards, :text
  end
end
