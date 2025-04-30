class CreateBalls < ActiveRecord::Migration[8.0]
  def change
    create_table :balls do |t|
      t.string :name
      t.date :date
      t.string :location
      t.string :theme

      t.timestamps
    end
  end
end
