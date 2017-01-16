class AddShowOnHomeToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :show_on_home, :boolean, default: false
  end
end
