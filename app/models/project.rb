class Project < ApplicationRecord
  has_many :resources

  def category_enum
    ['wizualizacje', 'projekt']
  end
  
end
