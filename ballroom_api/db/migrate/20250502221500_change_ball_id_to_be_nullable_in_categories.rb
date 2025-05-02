class ChangeBallIdToBeNullableInCategories < ActiveRecord::Migration[8.0]
  def change
    change_column_null :categories, :ball_id, true
  end
end