class BallSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :theme, :created_at, :updated_at, :flyer_url
  has_many :categories

  def flyer_url
    object.flyer.attached? ? Rails.application.routes.url_helpers.rails_blob_url(object.flyer, only_path: true) : nil
  end
end