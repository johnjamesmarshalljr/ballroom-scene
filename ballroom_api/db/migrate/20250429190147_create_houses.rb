class CreateHouses < ActiveRecord::Migration[8.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :leader
      t.string :city
      t.integer :established

      t.timestamps
    end
  end
end
