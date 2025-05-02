class Ball < ApplicationRecord
  has_many :categories, dependent: :destroy

  def associate_categories(category_ids)
    Category.where(id: category_ids).update_all(ball_id: self.id)
  end
end
