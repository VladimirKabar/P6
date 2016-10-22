class Resource < ApplicationRecord
  belongs_to :project
  has_attached_file :image, :styles => {:small => '370x280>'},
                    :region => 'us-east-1'

  validates_attachment_presence :image
  validates_attachment_size :image, :less_than => 5.megabytes
  validates_attachment_content_type :image,
                                    :content_type => /^image\/(png|gif|jpeg)/
end
