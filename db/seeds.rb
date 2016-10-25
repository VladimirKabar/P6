# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create!(email: 'wizzart@gmail.com', password: 'haslo123')

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

p1 = Project.create!(title: "project_title_1", category: "projekt", description: lorem)
p2 = Project.create!(title: "project_title_2", category: "projekt", description: lorem)
p3 = Project.create!(title: "project_title_3", category: "projekt", description: lorem)
p4 = Project.create!(title: "project_title_4", category: "projekt", description: lorem)
p5 = Project.create!(title: "project_title_5", category: "wizualizacje", description: lorem)
p6 = Project.create!(title: "project_title_6", category: "wizualizacje", description: lorem)
p7 = Project.create!(title: "project_title_7", category: "wizualizacje", description: lorem)
p8 = Project.create!(title: "project_title_8", category: "wizualizacje", description: lorem)

x=0
[p1, p2, p3, p4,p5,p6,p7,p8].each do |project|
  4.times do |y|
    title = "resource title #{y+1}"
    description = "resource description #{y+1}"
    Resource.create!(title: title,
                     image: File.new(File.join(Rails.root, "/app/assets/test/#{x+y+1}.jpg")),
                     description: description,
                     project: project)

  end
  x += 1
end
