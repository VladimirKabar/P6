class Project < ApplicationRecord
  has_many :resources

  validates :title, :presence => true
  validates :category, :presence => true

  def category_enum
    ['wizualizacje', 'projekt']
  end
  
end
