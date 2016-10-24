class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
<<<<<<< HEAD
      t.string :title,              null: false
      t.string :category,              null: false
=======
      t.string :title, null:false
      t.string :category, null:false
      t.string :description
>>>>>>> master

      t.timestamps
    end
  end
end