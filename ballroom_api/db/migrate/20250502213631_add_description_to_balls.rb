class AddDescriptionToBalls < ActiveRecord::Migration[8.0]
  def change
    add_column :balls, :description, :text
  end
end
