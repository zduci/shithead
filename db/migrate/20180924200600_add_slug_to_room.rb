class AddSlugToRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :slug, :string
  end
end
