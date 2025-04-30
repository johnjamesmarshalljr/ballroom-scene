class CreateForumThreads < ActiveRecord::Migration[8.0]
  def change
    create_table :forum_threads do |t|
      t.string :title
      t.string :author
      t.integer :upvotes

      t.timestamps
    end
  end
end
