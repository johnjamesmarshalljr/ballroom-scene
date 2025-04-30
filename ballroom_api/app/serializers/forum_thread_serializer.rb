class ForumThreadSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :upvotes, :created_at, :updated_at
  has_many :comments
end