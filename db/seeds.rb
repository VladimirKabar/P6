User.create!(email: 'wizzart@gmail.com', password: 'haslo123')

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

categories = %w(outdoor_commercial outdoor_private indoor_commercial indoor_private)

8.times do |index|
  Project.create(title: "project_title_#{index}", description: lorem, category: categories.sample)
end

Project.all.each do |project|
  3.times { Resource.create(image: 'https://placehold.it/2500x1500', project: project) }
end
