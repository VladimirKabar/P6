class Project < ApplicationRecord
  has_many :resources

  validates :title, :presence => true
  validates :category, :presence => true

  scope :filter, -> (category) {
    case category
      when 'all'
        all
      when 'indoor_all'
        where(category: %w(indoor_commercial indoor_private))
      when 'indoor_commercial'
        where(category: 'indoor_commercial')
      when 'indoor_private'
        where(category: 'indoor_private')
      when 'building'
        where(category: 'building')
      when 'green_area'
        where(category: 'green_area')
    end
  }

  def category_enum
    [
      ['wewnątrz komercyjnie', 'indoor_commercial'],
      ['wewnątrz prywatne', 'indoor_private'],
      ['teren zielony', 'green_area'],
      ['budynek', 'building']
    ]
  end

end
