# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create!(email: 'wizzart@gmail.com', password: 'haslo123')

p1 = Project.create!(title: "Balkon", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p2 = Project.create!(title: "kuchnia", category: "projekt", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p3 = Project.create!(title: "lazienka", category: "projekt", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p4 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p5 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p6 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p7 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
p8 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")

x=0
[p1, p2, p3, p4,p5,p6,p7,p8].each do |project|
  4.times do |y|
    title = "jakis tam tytul #{y+1}"
    description = "jakis tam opis #{y+1}"
    Resource.create!(title: title,
                     image: File.new(File.join(Rails.root, "/app/assets/test/#{x+y+1}.jpg")),
                     description: description,
                     project: project)

  end
  x += 1
end