class CreateResources < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.attachment :image
      t.references :project

      t.timestamps
    end
  end
end
