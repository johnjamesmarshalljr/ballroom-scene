class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :leader, :city, :established
end
