class Project < ApplicationRecord
  has_many :resources

  validates :title, :presence => true
  validates :category, :presence => true

  def category_enum
    [
      ['zewnątrz komercyjnie', 'outdoor_commercial'],
      ['zewnątrz prywatnie', 'outdoor_private'],
      ['wewnątrz komercyjnie', 'indoor_commercial'],
      ['wewnątrz prywatnie', 'indoor_private']
    ]
  end

end
