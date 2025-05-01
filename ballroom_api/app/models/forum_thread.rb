class ForumThread < ApplicationRecord
    has_many :comments,
           class_name: "Comment",
           foreign_key: "thread_id",
           dependent: :destroy
end
