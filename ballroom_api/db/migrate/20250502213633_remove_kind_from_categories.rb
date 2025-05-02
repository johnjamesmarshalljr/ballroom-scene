class RemoveKindFromCategories < ActiveRecord::Migration[8.0]
  def change
    remove_column :categories, :kind, :string
  end
end