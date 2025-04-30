class CategorySerializer < ActiveModel::Serializer
  attributes :id, :kind, :title, :description
  belongs_to :ball
end