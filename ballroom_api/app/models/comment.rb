class Comment < ApplicationRecord
  belongs_to :forum_thread,
             class_name:  "ForumThread",
             foreign_key: "thread_id"
end
