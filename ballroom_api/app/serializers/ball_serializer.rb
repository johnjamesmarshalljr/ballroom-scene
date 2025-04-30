class BallSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :theme, :created_at, :updated_at
  has_many :categories
end