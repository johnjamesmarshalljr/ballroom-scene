class RemoveThreadForeignKeyFromComments < ActiveRecord::Migration[8.0]
  def change
    remove_foreign_key :comments, column: :thread_id

    if index_exists?(:comments, :thread_id)
      remove_index :comments, :thread_id
    end
  end
end
