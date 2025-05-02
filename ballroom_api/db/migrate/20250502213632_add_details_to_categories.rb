class AddDetailsToCategories < ActiveRecord::Migration[8.0]
  def change
    add_reference :categories, :ball, foreign_key: true unless column_exists?(:categories, :ball_id)
  end
end