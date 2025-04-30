class CreateComments < ActiveRecord::Migration[8.0]
  def change
    create_table :comments do |t|
      t.references :thread, null: false, foreign_key: true
      t.string :user
      t.text :content

      t.timestamps
    end
  end
end
