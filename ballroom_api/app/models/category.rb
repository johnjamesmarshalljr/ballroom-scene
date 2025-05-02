class Category < ApplicationRecord
  self.inheritance_column = :_type_disabled # Disable STI by ignoring the `type` column
  belongs_to :ball, optional: true

  validates :category_type, :title, :description, presence: true
end
