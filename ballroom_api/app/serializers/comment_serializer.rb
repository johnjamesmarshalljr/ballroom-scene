class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :content, :created_at
  belongs_to :forum_thread
end