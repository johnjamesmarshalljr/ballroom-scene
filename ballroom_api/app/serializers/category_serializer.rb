class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category_type, :title, :description, :ball_id
end