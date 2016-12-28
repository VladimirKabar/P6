class RemoveTitleDescriptionFromResources < ActiveRecord::Migration[5.0]
  def change
    remove_column :resources, :title, :string
    remove_column :resources, :description, :string
  end
end
