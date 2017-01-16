User.create!(email: 'wizzart@gmail.com', password: '06be3fe1b5')

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

Project.create(title: 'Dom w Libertowie', description: 'Minimalizm, natura i funkcjonalność to myśl przewodnia podkreślająca przestrzenne wnętrza domu. Realizacja 2015-2016', category: 'indoor_private')
Project.create(title: 'Mieszkanie w Apartamentach Novum, Kraków', description: 'Ciepłe i bardzo funkcjonalne 44m2. Nowoczesna baza uzupełniona klasycznymi dodatkami Pani domu. Realizacja 2015', category: 'indoor_private')
Project.create(title: 'Mieszkanie na Wilanowie, Warszawa', description: 'Proste, męskie i minimalistyczne mieszkanie z tarasem 40m2. Realizacja 2013', category: 'indoor_private')
Project.create(title: 'Dom w Tenczynku', description: 'Aranżacja wnętrz domu dla 6 osobowej rodziny z przestrzenną częścia dzienną oraz domowym placem zabaw dla dzieci. Realizacja 2016', category: 'indoor_private')
Project.create(title: 'Mieszkanie w Krakowie, przy ul. Aleksandry', description: 'Mieszkanie w Krakowie, przy ul. Aleksandry', category: 'indoor_private')
Project.create(title: 'Małe mieszkanka w Krakowie – po 40m2 ', description: 'Małe mieszkanka w Krakowie – po 40m2 ', category: 'indoor_private')
Project.create(title: 'Mieszkanie w Krakowie', description: 'roste w formie, ale ciepłe 78m2 dla singla. Realizacja 2012', category: 'indoor_private')
Project.create(title: 'Restauracja Pięciolinia Smaku – Hotel Mikołaj, Kraków', description: 'Nowa aranżacja wnętrz istniejącej restauracji. Świeżość i funkcjonalność w małym lokalu pasująca zarówno do hotelowych śniadań jak i kolacji przy winie. Realizacja 2016', category: 'indoor_commercial')
Project.create(title: 'Hotel Elektor', description: 'Nowa aranżacja wnętrz istniejącej restauracji. Świeżość i funkcjonalność w małym lokalu pasująca zarówno do hotelowych śniadań jak i kolacji przy winie. Realizacja 2016', category: 'indoor_commercial')
Project.create(title: 'Sieć sklepów Tom&Paul’s', description: 'Aranżacja sklepów outletowej sieci Tom&Paul’s. Nowoczesne i minimalistyczne wnętrza dostosowane do młodego odbiorcy marki. Realizacja 2014', category: 'indoor_commercial')
Project.create(title: 'Cudne butki – sklep w Krakowie', description: 'Aranżacja sklepu z artykułami dziecięcymi. Praktyczna prosta przestrzeń w stylowych pastelach.', category: 'indoor_commercial')
Project.create(title: 'AlpinDoor – sklep w Krakowie', description: 'Aranżacja wnętrza klepu z artykułami wspinaczkowymi i turystycznymi. Realizacja 2016-2017', category: 'indoor_commercial')
Project.create(title: 'Salon piękności Ambasada Urody', description: 'Funkcjonalne nowoczesne wnętrze salonu fryzjersko-kosmetycznego inspirowane stylem Art Deco. Realizacja 2017', category: 'indoor_commercial')
Project.create(title: 'Biuro w Kijowie', description: 'Projekt wnętrz biurowych firmy z branży chemicznej. Realizacja 2013', category: 'indoor_commercial')
Project.create(title: 'Ogród domu pod Wiedniem', description: 'Aranżacja ogrodu domu jednorodzinnego. Kompleksowy projekt z doborem zieleni i projektem elementów kamiennych, wykonawstwo z współpracującymi firmami. Realizacja 2015', category: 'green_area')
Project.create(title: 'Lorem ipsum dolor sit amet', description: lorem, category: 'building')


Project.all.each do |project|
  4.times { Resource.create(image: 'https://placehold.it/2500x1500', project: project) }
end
