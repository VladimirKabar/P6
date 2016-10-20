# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create!(email: 'wizzart@gmail.com', password: 'haslo123')

projekt1 = Project.create!(title: "Balkon", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
projekt2 = Project.create!(title: "kuchnia", category: "projekt", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
projekt3 = Project.create!(title: "lazienka", category: "projekt", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")
projekt4 = Project.create!(title: "dom", category: "wizualizacje", description: " I tak powstał bardzo długiiii i interesujucy opis tego wielkiego i wyjatkowego projektu albo w sumie czokapik")

4.times do |x|
  4.times do |y|
    title = "jakis tam tytul #{y+1}"
    description = "jakis tam opis #{y+1}"
    if (x==0)
      @project = projekt1
    else
      if (x==1)
        @project = projekt2
      else
        if (x==2)
          @project = projekt3
        else
          if (x==3)
            @project = projekt4
          end
        end
      end
    end
    Resource.create!(title: title,
                     image: File.new(File.join(Rails.root, "/app/assets/test/#{x+y+1}.jpg")),
                     description: description,
                     project: @project)
  end
end