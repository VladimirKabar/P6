class Project < ApplicationRecord
  has_many :resources

  validates :title, :presence => true
  validates :category, :presence => true

  def category_enum
    ['indor_commercial', 'indor_private','outdor_commercial','outdor_private']
  end
  
end
