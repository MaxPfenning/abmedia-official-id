export interface NotificationData {
  name: string;
  city: string;
  action: string;
  timestamp: number;
  id: string;
}

const nameDatabase = {
  german: [
    'Lars Müller', 'Sophie Wagner', 'Maximilian Becker', 'Anna Schmidt', 'Felix Weber',
    'Emma Fischer', 'Jonas Meyer', 'Mia Schneider', 'Leon Hoffmann', 'Hannah Koch',
    'Lukas Richter', 'Lena Schröder', 'Tim Zimmermann', 'Sarah Braun', 'Niklas Wolf'
  ],
  turkish: [
    'Mehmet Yılmaz', 'Elif Demir', 'Ahmet Kaya', 'Zeynep Şahin', 'Mustafa Öztürk',
    'Ayşe Yıldız', 'Emre Arslan', 'Fatma Çelik', 'Can Aydın', 'Selin Polat'
  ],
  arabic: [
    'Fatima Al-Hassan', 'Mohammed Ibrahim', 'Amina Khalil', 'Omar Al-Rashid',
    'Layla Ahmed', 'Yusuf Mahmoud', 'Noor Saleh', 'Hassan Ali', 'Mariam Saeed'
  ],
  polish: [
    'Piotr Kowalski', 'Anna Nowak', 'Jakub Wójcik', 'Katarzyna Kamińska',
    'Michał Lewandowski', 'Magdalena Zielińska', 'Tomasz Szymański', 'Agnieszka Woźniak'
  ],
  russian: [
    'Dmitri Ivanov', 'Anastasia Petrova', 'Alexei Sokolov', 'Elena Volkov',
    'Ivan Popov', 'Natalia Kuznetsova', 'Sergei Fedorov', 'Olga Mikhailova'
  ],
  italian: [
    'Marco Rossi', 'Giulia Ferrari', 'Luca Bianchi', 'Francesca Romano',
    'Alessandro Colombo', 'Chiara Ricci', 'Matteo Marino', 'Sofia Greco'
  ],
  spanish: [
    'Carlos García', 'María López', 'Diego Martínez', 'Isabella Rodríguez',
    'Javier Hernández', 'Carmen González', 'Pablo Pérez', 'Lucía Sánchez'
  ],
  dutch: [
    'Jan de Vries', 'Emma Bakker', 'Lukas Jansen', 'Sophie van der Berg',
    'Thomas Visser', 'Lisa de Jong', 'Daan Smit', 'Eva Mulder'
  ],
  french: [
    'Pierre Dubois', 'Camille Martin', 'Louis Bernard', 'Léa Petit',
    'Hugo Durand', 'Chloé Moreau', 'Antoine Laurent', 'Manon Simon'
  ],
  british: [
    'Oliver Smith', 'Amelia Johnson', 'Harry Williams', 'Emily Brown',
    'Jack Jones', 'Olivia Taylor', 'Charlie Davies', 'Isla Wilson'
  ]
};

const cities = {
  germany: ['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bonn', 'Bielefeld', 'Mannheim'],
  europe: ['Amsterdam', 'Vienna', 'Zürich', 'Paris', 'Milan', 'Barcelona', 'Brussels', 'Copenhagen', 'Prague', 'Warsaw', 'Budapest', 'Stockholm', 'Oslo', 'Helsinki', 'Dublin', 'Lisbon', 'Athens', 'Rome', 'Madrid', 'London'],
  turkey: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya'],
  middleEast: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha', 'Kuwait City']
};

const actions = [
  'just booked a consultation',
  'requested a free SEO audit',
  'signed up for Google My Business optimization',
  'downloaded the Local SEO guide',
  'scheduled a strategy call',
  'joined the review management program',
  'requested a reputation management quote',
  'booked a Google Ads consultation',
  'signed up for the monthly SEO package',
  'requested a website optimization review'
];

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getAllNames = (): string[] => {
  return Object.values(nameDatabase).flat();
};

const getAllCities = (): string[] => {
  return Object.values(cities).flat();
};

export const generateNotification = (): NotificationData => {
  const name = getRandomElement(getAllNames());
  const city = getRandomElement(getAllCities());
  const action = getRandomElement(actions);
  const timestamp = Date.now();
  const id = `notification-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;

  return { name, city, action, timestamp, id };
};

export const getTimeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 120) return '1 minute ago';
  if (seconds < 180) return '2 minutes ago';
  return 'Just now';
};
