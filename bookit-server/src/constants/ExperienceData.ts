import { IExperience } from '../models/experience.modal';
import { CategoryType } from '../constants/categories';

// Helper to generate random numbers
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomRating = () => parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));

export const sampleExperiences = [
  // --- Adventure Category (8 experiences) ---
  {
    title: "Himalayan Trek to Roopkund Lake",
    description: "Embark on a challenging yet rewarding trek to the mysterious Roopkund Lake, nestled high in the Himalayas. Witness stunning panoramic views, diverse flora and fauna, and ancient legends.",
    shortDescription: "Challenging trek to the mysterious Roopkund Lake in the Himalayas.",
    price: 18000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Uttarakhand", country: "India" },
    duration: "7 days",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["High-altitude trekking", "Scenic campsites", "Roopkund Lake mystery", "Expert guides"],
    included: ["Accommodation in tents", "All meals during trek", "Trekking equipment", "Permits"],
    notIncluded: ["Personal porter", "Travel insurance", "Alcoholic beverages"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "White Water Rafting on Ganges",
    description: "Experience the thrill of white water rafting on the mighty Ganges River near Rishikesh. Navigate exciting rapids with professional guides and enjoy the stunning riverside scenery.",
    shortDescription: "Thrilling white water rafting adventure on the Ganges River.",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Rishikesh", country: "India" },
    duration: "4 hours",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Grade III-IV rapids", "Professional instructors", "Safety equipment", "Scenic views"],
    included: ["Rafting gear", "Safety briefing", "Expert guide", "Transfers to starting point"],
    notIncluded: ["Photography", "Personal expenses", "Snacks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Paragliding in Bir Billing",
    description: "Soar high above the Dhauladhar mountains with a tandem paragliding flight in Bir Billing, known as the 'Paragliding Capital of India'. Enjoy breathtaking aerial views.",
    shortDescription: "Tandem paragliding flight over the Dhauladhar mountains.",
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19"
    ],
    location: { city: "Bir Billing", country: "India" },
    duration: "1 hour",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Tandem flight with pilot", "Stunning mountain views", "Safety certified equipment", "Video recording option"],
    included: ["Paragliding flight", "Certified pilot", "Safety gear", "Briefing"],
    notIncluded: ["Video/photo package", "Transportation to site", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Scuba Diving in Andaman Islands",
    description: "Explore the vibrant underwater world of the Andaman Islands with a guided scuba diving experience. Discover colorful coral reefs and diverse marine life.",
    shortDescription: "Discover vibrant marine life with a guided scuba dive.",
    price: 6000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Havelock Island", country: "India" },
    duration: "Half day",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Certified instructors", "Beginner-friendly", "Rich coral reefs", "Tropical fish"],
    included: ["Diving equipment", "Boat transfer", "Instructor fees", "Water & snacks"],
    notIncluded: ["Underwater photography", "Hotel transfers", "Lunch"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Bungee Jumping in Rishikesh",
    description: "Take the leap of faith from India's highest bungee jumping platform in Rishikesh. An ultimate adrenaline rush with stunning views of the Ganges valley.",
    shortDescription: "India's highest bungee jump for an ultimate thrill.",
    price: 4000,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Rishikesh", country: "India" },
    duration: "2 hours",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["India's highest bungee", "Safety certified", "Ganges valley views", "Certificate of completion"],
    included: ["Bungee jump", "Safety equipment", "Instructor briefing", "First aid"],
    notIncluded: ["Video/photo package", "Transportation", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Desert Quad Biking in Dubai",
    description: "Unleash your inner adventurer with an exhilarating quad biking experience across the golden dunes of the Arabian Desert. Feel the rush as you conquer the sandy terrain.",
    shortDescription: "Adrenaline-pumping quad biking across Dubai's desert dunes.",
    price: 7500,
    images: [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020"
    ],
    location: { city: "Dubai", country: "UAE" },
    duration: "2 hours",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Powerful quad bikes", "Guided desert tour", "Dune bashing", "Safety gear provided"],
    included: ["Quad bike rental", "Safety helmet", "Experienced guide", "Water"],
    notIncluded: ["Hotel transfers", "Meals", "Personal insurance"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Canyoning in Interlaken, Switzerland",
    description: "Descend through stunning gorges, rappel down waterfalls, slide through natural rock chutes, and jump into crystal-clear pools in the breathtaking canyons of Interlaken.",
    shortDescription: "Thrilling canyoning adventure with rappelling and cliff jumping.",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Interlaken", country: "Switzerland" },
    duration: "Half day",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Rappelling down waterfalls", "Natural water slides", "Cliff jumps", "Stunning natural scenery"],
    included: ["Professional guides", "All technical equipment", "Wetsuit", "Transfers from base"],
    notIncluded: ["Photos/videos", "Meals", "Personal items"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Zip-lining through Costa Rican Rainforest",
    description: "Fly high above the canopy of the Costa Rican rainforest on an exhilarating zip-lining tour. Experience incredible views and spot wildlife from a unique perspective.",
    shortDescription: "Soar over the rainforest canopy on an exciting zip-line tour.",
    price: 6500,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Monteverde", country: "Costa Rica" },
    duration: "3 hours",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Multiple zip-line cables", "Longest cables in region", "Rainforest views", "Safety certified"],
    included: ["Zip-line tour", "Safety equipment", "Professional guides", "Briefing"],
    notIncluded: ["Transportation", "Meals", "Photos"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Culture Category (7 experiences) ---
  {
    title: "Traditional Japanese Tea Ceremony in Kyoto",
    description: "Immerse yourself in the serene art of the Japanese tea ceremony. Learn about its history, etiquette, and enjoy a freshly prepared matcha tea in a traditional setting.",
    shortDescription: "Experience an authentic Japanese tea ceremony in Kyoto.",
    price: 4000,
    images: [
      "https://images.unsplash.com/photo-1532635241-17a35b361310",
      "https://images.unsplash.com/photo-1528164344705-478506901368"
    ],
    location: { city: "Kyoto", country: "Japan" },
    duration: "1.5 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Authentic tea house", "Expert tea master", "Matcha preparation", "Traditional sweets"],
    included: ["Tea ceremony participation", "Matcha tea", "Japanese sweets", "English explanation"],
    notIncluded: ["Kimono rental", "Transportation", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ancient Rome & Colosseum Tour",
    description: "Step back in time with a guided tour of Ancient Rome, including skip-the-line access to the Colosseum and Roman Forum. Learn about gladiators, emperors, and daily life.",
    shortDescription: "Explore the Colosseum and Roman Forum with an expert guide.",
    price: 5500,
    images: [
      "https://images.unsplash.com/photo-1506784881432-cfd49e54d566",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Rome", country: "Italy" },
    duration: "3 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Skip-the-line Colosseum access", "Roman Forum exploration", "Palatine Hill views", "Expert historian guide"],
    included: ["Entrance tickets", "Guided tour", "Headsets for clear audio"],
    notIncluded: ["Hotel pickup", "Food and drinks", "Gratuities"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Flamenco Show with Dinner in Seville",
    description: "Experience the passion and intensity of a live Flamenco show in Seville, the birthplace of this art form. Enjoy a traditional Spanish dinner alongside the captivating performance.",
    shortDescription: "Passionate Flamenco show paired with a traditional Spanish dinner.",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Seville", country: "Spain" },
    duration: "2.5 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Authentic Flamenco performance", "Live music and dance", "Traditional Spanish cuisine", "Intimate venue"],
    included: ["Show ticket", "3-course dinner", "Drinks (wine/beer/soft drinks)"],
    notIncluded: ["Hotel transfers", "Additional drinks", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Hanoi Old Quarter Street Food & Culture Walk",
    description: "Delve into the bustling streets of Hanoi's Old Quarter on a guided walking tour. Sample delicious local street food and discover hidden cultural gems.",
    shortDescription: "Guided walk through Hanoi's Old Quarter, tasting local street food.",
    price: 2000,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Hanoi", country: "Vietnam" },
    duration: "3 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Authentic Vietnamese dishes", "Hidden alleys exploration", "Local market visit", "Insightful guide"],
    included: ["Food tastings at multiple stops", "Local guide", "Bottled water"],
    notIncluded: ["Alcoholic drinks", "Souvenirs", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Maasai Village Cultural Visit, Tanzania",
    description: "Spend an enriching afternoon with the Maasai people, learning about their traditions, daily life, and unique culture. Witness traditional dances and crafts.",
    shortDescription: "Immersive cultural visit to an authentic Maasai village.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Arusha", country: "Tanzania" },
    duration: "4 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Maasai traditional dances", "Learn about local customs", "Visit a boma (homestead)", "Support local community"],
    included: ["Village entrance fee", "Local guide/translator", "Cultural demonstration"],
    notIncluded: ["Transportation to village", "Souvenirs", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ganga Aarti Ceremony & Old City Walk, Varanasi",
    description: "Witness the spiritual grandeur of the Ganga Aarti ceremony from a prime ghat location, followed by a walk through the ancient alleys of Varanasi.",
    shortDescription: "Experience the sacred Ganga Aarti and explore Varanasi's old city.",
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
      "https://images.unsplash.com/photo-1548013146-72479768bada"
    ],
    location: { city: "Varanasi", country: "India" },
    duration: "3 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Ganga Aarti spectacle", "Boat ride on Ganges (optional)", "Ancient temples", "Local markets"],
    included: ["Guided walk", "Aarti viewing spot", "Bottled water"],
    notIncluded: ["Boat ride", "Donations", "Food"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Cooking Class: Authentic Thai Cuisine, Bangkok",
    description: "Learn the secrets of authentic Thai cooking from a local chef. Visit a market, prepare classic dishes, and enjoy your delicious creations.",
    shortDescription: "Hands-on Thai cooking class with market visit.",
    price: 3000,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Bangkok", country: "Thailand" },
    duration: "4 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Market tour for ingredients", "Learn 3-4 Thai dishes", "Hands-on cooking", "Recipe booklet"],
    included: ["Ingredients", "Cooking station", "Chef instruction", "Meal of your creations"],
    notIncluded: ["Drinks", "Transportation", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Nature Category (8 experiences) ---
  {
    title: "Amazon Rainforest Expedition, Peru",
    description: "Embark on an unforgettable journey into the heart of the Peruvian Amazon. Explore diverse ecosystems, spot exotic wildlife, and learn about the rainforest from local guides.",
    shortDescription: "Multi-day expedition into the Peruvian Amazon rainforest.",
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1470071459604-3b5ecda7ab33"
    ],
    location: { city: "Iquitos", country: "Peru" },
    duration: "4 days",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Jungle treks", "River boat safaris", "Wildlife spotting", "Local community visit"],
    included: ["Lodge accommodation", "All meals", "Guided excursions", "Transfers from Iquitos"],
    notIncluded: ["International flights", "Travel insurance", "Alcoholic drinks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Fiordland National Park Cruise, New Zealand",
    description: "Cruise through the majestic fjords of Fiordland National Park, a UNESCO World Heritage site. Witness towering cliffs, cascading waterfalls, and pristine wilderness.",
    shortDescription: "Scenic cruise through the stunning fjords of New Zealand.",
    price: 9000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-462a42ee6ee4",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Queenstown", country: "New Zealand" },
    duration: "Full day",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Milford Sound/Doubtful Sound", "Waterfalls", "Wildlife (seals, dolphins)", "Scenic boat ride"],
    included: ["Cruise ticket", "Commentary by naturalist", "Lunch on board"],
    notIncluded: ["Transportation to departure point", "Snacks", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Sahara Desert Overnight Camp, Morocco",
    description: "Experience the magic of the Sahara Desert with an overnight stay in a traditional Berber camp. Enjoy a camel trek, sunset over the dunes, and stargazing.",
    shortDescription: "Overnight camel trek and camp stay in the Sahara Desert.",
    price: 8000,
    images: [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020"
    ],
    location: { city: "Merzouga", country: "Morocco" },
    duration: "2 days",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Camel trekking", "Sunset and sunrise over dunes", "Traditional dinner", "Stargazing"],
    included: ["Camel ride", "Dinner & breakfast", "Tent accommodation", "Local guide"],
    notIncluded: ["Drinks", "Tips", "Transportation to Merzouga"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Plitvice Lakes National Park Tour, Croatia",
    description: "Discover the breathtaking beauty of Plitvice Lakes National Park, a UNESCO site famous for its cascading lakes, waterfalls, and lush forests. Walk along wooden boardwalks.",
    shortDescription: "Explore the stunning waterfalls and lakes of Plitvice National Park.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ecda7ab33",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Plitvice Lakes", country: "Croatia" },
    duration: "Full day",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Upper and Lower Lakes", "Wooden boardwalks", "Electric boat ride", "Stunning waterfalls"],
    included: ["Park entrance ticket", "Guided tour", "Boat/train rides within park"],
    notIncluded: ["Transportation to park", "Meals", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Kerala Backwaters Houseboat Stay",
    description: "Cruise through the serene backwaters of Kerala in a traditional houseboat. Enjoy freshly prepared local cuisine, watch village life unfold, and experience the tranquility of these waterways.",
    shortDescription: "Overnight houseboat journey through Kerala's backwaters",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1602216056026-91c3f31c4ea7",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    ],
    location: { city: "Alleppey", country: "India" },
    duration: "24 hours",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: [
      "Traditional Kerala houseboat",
      "Freshly prepared meals",
      "Village sightseeing",
      "Sunset and sunrise views"
    ],
    included: [
      "Houseboat accommodation",
      "All meals (lunch, dinner, breakfast)",
      "Boat crew",
      "Sightseeing"
    ],
    notIncluded: [
      "Alcoholic beverages",
      "Personal expenses",
      "Transportation to/from houseboat"
    ],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Iceland Golden Circle & Secret Lagoon Tour",
    description: "Discover Iceland's iconic Golden Circle route, featuring geysers, waterfalls, and national parks. Conclude your day with a relaxing soak in the Secret Lagoon.",
    shortDescription: "Explore Iceland's Golden Circle and relax in a natural hot spring.",
    price: 10000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-462a42ee6ee4",
      "https://images.unsplash.com/photo-1470071459604-3b5ecda7ab33"
    ],
    location: { city: "Reykjavik", country: "Iceland" },
    duration: "8 hours",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Gullfoss waterfall", "Geysir geothermal area", "Thingvellir National Park", "Secret Lagoon bath"],
    included: ["Guided bus tour", "Secret Lagoon entrance", "WiFi on bus"],
    notIncluded: ["Meals", "Towels at lagoon", "Swimwear rental"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Canadian Rockies Hiking Adventure",
    description: "Embark on a multi-day hiking adventure through the stunning Canadian Rockies. Explore glacial lakes, towering peaks, and pristine wilderness with experienced guides.",
    shortDescription: "Guided hiking tour through the majestic Canadian Rockies.",
    price: 22000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Banff", country: "Canada" },
    duration: "5 days",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Iconic trails", "Wildlife viewing opportunities", "Stunning mountain scenery", "Lakes and glaciers"],
    included: ["Accommodation (lodges/tents)", "All meals", "Certified hiking guides", "Park permits"],
    notIncluded: ["Personal gear", "Flights", "Alcoholic beverages"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Mount Fuji Day Trip & Lake Ashi Cruise, Japan",
    description: "Witness the iconic Mount Fuji on a scenic day trip from Tokyo. Enjoy panoramic views, a cruise on Lake Ashi, and a ride on the Hakone Ropeway.",
    shortDescription: "Full-day tour to Mount Fuji, Lake Ashi, and Hakone.",
    price: 9500,
    images: [
      "https://images.unsplash.com/photo-1506744038136-462a42ee6ee4",
      "https://images.unsplash.com/photo-1470071459604-3b5ecda7ab33"
    ],
    location: { city: "Tokyo", country: "Japan" },
    duration: "10 hours",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Mount Fuji 5th Station", "Lake Ashi pirate cruise", "Hakone Ropeway", "Owakudani volcanic valley"],
    included: ["Round-trip transport from Tokyo", "All entrance fees", "English-speaking guide"],
    notIncluded: ["Lunch", "Personal expenses", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Food Category (7 experiences) ---
  {
    title: "Rome Street Food Tour with Local Guide",
    description: "Savor the authentic flavors of Rome on a guided street food tour. Taste traditional Roman delicacies, visit local markets, and discover hidden culinary gems.",
    shortDescription: "Taste Rome's best street food on a guided walking tour.",
    price: 3800,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Rome", country: "Italy" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Pizza al taglio", "Supplí", "Artisanal gelato", "Local market experience"],
    included: ["All food tastings", "Local expert guide", "Bottled water"],
    notIncluded: ["Alcoholic beverages", "Souvenirs", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Paris Macaron Baking Class",
    description: "Learn the art of making delicate French macarons from a Parisian pastry chef. Master the techniques and take home your delicious creations.",
    shortDescription: "Hands-on class to bake authentic French macarons.",
    price: 6000,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Paris", country: "France" },
    duration: "2.5 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Professional pastry chef", "All ingredients provided", "Recipe booklet", "Take home macarons"],
    included: ["Ingredients", "Equipment", "Chef instruction", "Coffee/tea"],
    notIncluded: ["Apron rental", "Transportation", "Additional snacks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Barcelona Tapas & Wine Evening Tour",
    description: "Indulge in a delightful evening of tapas and wine in Barcelona. Visit authentic local bars, sample traditional dishes, and enjoy regional wines with a local guide.",
    shortDescription: "Guided evening tour of Barcelona's best tapas bars.",
    price: 5000,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Barcelona", country: "Spain" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Authentic tapas bars", "Variety of tapas", "Local wines", "Insightful guide"],
    included: ["All food and drink tastings", "Local guide"],
    notIncluded: ["Hotel transfers", "Additional purchases", "Gratuities"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Florence Pasta Making Class",
    description: "Learn to make fresh pasta from scratch in a traditional Florentine kitchen. Enjoy your handmade meal with local wine.",
    shortDescription: "Hands-on pasta making class in Florence.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Florence", country: "Italy" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Traditional recipes", "Fresh ingredients", "Enjoy your meal", "Local wine pairing"],
    included: ["Ingredients", "Cooking instruction", "Lunch/dinner with wine", "Recipe booklet"],
    notIncluded: ["Transportation", "Apron", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "New Orleans French Quarter Food Tour",
    description: "Explore the culinary delights of New Orleans' historic French Quarter. Sample iconic dishes like Gumbo, Beignets, and Po'boys on a guided walking tour.",
    shortDescription: "Taste the iconic flavors of New Orleans on a guided food tour.",
    price: 4200,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "New Orleans", country: "USA" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Cajun & Creole cuisine", "Historic French Quarter", "Multiple food stops", "Local guide stories"],
    included: ["All food tastings", "Local guide"],
    notIncluded: ["Drinks", "Gratuities", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Tokyo Tsukiji Outer Market & Sushi Making",
    description: "Visit the bustling Tsukiji Outer Market, then learn to make authentic sushi from a professional chef. Enjoy your handmade sushi for lunch.",
    shortDescription: "Market visit and hands-on sushi making class in Tokyo.",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Tokyo", country: "Japan" },
    duration: "4 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Fresh seafood market", "Expert sushi chef", "Learn various sushi types", "Enjoy your creations"],
    included: ["Market tour", "Sushi ingredients", "Cooking instruction", "Lunch"],
    notIncluded: ["Drinks", "Transportation", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Mexican Cooking Class & Market Tour, Oaxaca",
    description: "Immerse yourself in Oaxacan cuisine with a market tour to select ingredients, followed by a hands-on cooking class to prepare traditional Mexican dishes.",
    shortDescription: "Market-to-table Mexican cooking experience in Oaxaca.",
    price: 5500,
    images: [
      "https://images.unsplash.com/photo-1504754524776-abf3858f2bd5",
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c"
    ],
    location: { city: "Oaxaca", country: "Mexico" },
    duration: "5 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Local market exploration", "Authentic Oaxacan recipes", "Hands-on preparation", "Enjoy your meal"],
    included: ["Market tour", "Ingredients", "Cooking instruction", "Lunch/dinner"],
    notIncluded: ["Alcoholic beverages", "Transportation", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Wellness Category (7 experiences) ---
  {
    title: "Bali Yoga & Meditation Retreat",
    description: "Rejuvenate your mind, body, and soul with a multi-day yoga and meditation retreat in the serene landscapes of Bali. Includes daily yoga, meditation, and healthy meals.",
    shortDescription: "Multi-day wellness retreat with yoga and meditation in Bali.",
    price: 30000,
    images: [
      "https://images.unsplash.com/photo-1544367524-d41935573030",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Ubud", country: "Indonesia" },
    duration: "5 days",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Daily yoga classes", "Guided meditation sessions", "Healthy organic meals", "Balinese massage"],
    included: ["Accommodation", "All meals", "Yoga & meditation classes", "One massage"],
    notIncluded: ["Flights", "Personal expenses", "Additional treatments"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Hot Springs & Spa Day in Budapest",
    description: "Relax and unwind at one of Budapest's famous thermal baths. Enjoy the healing waters, various pools, and optional spa treatments for a day of ultimate relaxation.",
    shortDescription: "Relaxing day at Budapest's historic thermal hot springs.",
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Budapest", country: "Hungary" },
    duration: "Full day",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Historic thermal baths", "Multiple pools (indoor/outdoor)", "Saunas & steam rooms", "Optional massages"],
    included: ["Entrance ticket to baths", "Locker access"],
    notIncluded: ["Towel/swimwear rental", "Massages", "Food and drinks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Sound Bath & Healing Session, Sedona",
    description: "Experience deep relaxation and energetic healing with a guided sound bath session in the spiritual vortexes of Sedona. Crystal bowls and gongs create a meditative atmosphere.",
    shortDescription: "Meditative sound bath experience in Sedona's spiritual landscape.",
    price: 2800,
    images: [
      "https://images.unsplash.com/photo-1544367524-d41935573030",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Sedona", country: "USA" },
    duration: "1.5 hours",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Crystal singing bowls", "Gongs and chimes", "Deep relaxation", "Energetic cleansing"],
    included: ["Sound bath session", "Comfortable mats/blankets"],
    notIncluded: ["Transportation", "Personal healing sessions", "Food"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ayurvedic Consultation & Massage, Kerala",
    description: "Discover the ancient healing science of Ayurveda with a personalized consultation and rejuvenating full-body massage in its birthplace, Kerala.",
    shortDescription: "Personalized Ayurvedic consultation and traditional massage.",
    price: 4000,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Kochi", country: "India" },
    duration: "2 hours",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Expert Ayurvedic doctor", "Dosha analysis", "Traditional oil massage", "Herbal remedies"],
    included: ["Consultation", "Full-body massage", "Herbal tea"],
    notIncluded: ["Additional treatments", "Transportation", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Forest Bathing (Shinrin-Yoku) in Kyoto",
    description: "Reconnect with nature through a guided Shinrin-Yoku (forest bathing) experience in the tranquil forests surrounding Kyoto. Enhance well-being and reduce stress.",
    shortDescription: "Guided forest bathing session for relaxation and mindfulness.",
    price: 3000,
    images: [
      "https://images.unsplash.com/photo-1544367524-d41935573030",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Kyoto", country: "Japan" },
    duration: "3 hours",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Mindful walking", "Sensory exercises", "Nature connection", "Stress reduction"],
    included: ["Certified guide", "Light refreshments", "Mindfulness exercises"],
    notIncluded: ["Transportation", "Meals", "Specialized gear"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Desert Yoga & Stargazing, Jordan",
    description: "Find inner peace with a sunset yoga session amidst the stunning Wadi Rum desert, followed by a traditional Bedouin dinner and incredible stargazing.",
    shortDescription: "Sunset yoga, Bedouin dinner, and stargazing in Wadi Rum.",
    price: 6500,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    ],
    location: { city: "Wadi Rum", country: "Jordan" },
    duration: "Evening",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Yoga with desert views", "Authentic Bedouin dinner", "Clear night sky", "Stargazing guidance"],
    included: ["Yoga instructor", "Dinner", "Stargazing equipment", "Bedouin tea"],
    notIncluded: ["Transportation to camp", "Alcoholic drinks", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Meditation & Mindfulness Workshop, Thailand",
    description: "Participate in a half-day workshop focused on meditation and mindfulness techniques. Learn practical skills to reduce stress and improve focus in a peaceful setting.",
    shortDescription: "Half-day workshop on meditation and mindfulness techniques.",
    price: 2000,
    images: [
      "https://images.unsplash.com/photo-1544367524-d41935573030",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Chiang Mai", country: "Thailand" },
    duration: "4 hours",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Guided meditation", "Breathing exercises", "Mindfulness practices", "Peaceful environment"],
    included: ["Instructor-led session", "Tea/water", "Cushions/mats"],
    notIncluded: ["Transportation", "Meals", "Personal items"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Wildlife Category (7 experiences) ---
  {
    title: "Serengeti National Park Safari, Tanzania",
    description: "Embark on an epic safari adventure in Serengeti National Park, home to the Great Migration and abundant wildlife. Witness lions, elephants, giraffes, and more in their natural habitat.",
    shortDescription: "Classic wildlife safari in Tanzania's iconic Serengeti National Park.",
    price: 45000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Arusha", country: "Tanzania" },
    duration: "3 days",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Big Five spotting", "Great Migration (seasonal)", "Expert safari guide", "Game drives"],
    included: ["Safari vehicle with pop-up roof", "Accommodation", "All meals", "Park fees"],
    notIncluded: ["International flights", "Tips", "Alcoholic drinks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Gorilla Trekking in Bwindi Impenetrable Forest, Uganda",
    description: "Experience an unforgettable encounter with endangered mountain gorillas in their natural habitat. Trek through dense forest with expert trackers for a truly unique wildlife experience.",
    shortDescription: "Once-in-a-lifetime mountain gorilla trekking experience.",
    price: 80000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Bwindi", country: "Uganda" },
    duration: "1 day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Close encounter with gorillas", "Guided forest trek", "Conservation efforts", "Photography opportunities"],
    included: ["Gorilla permit", "Park fees", "Ranger guide", "Briefing"],
    notIncluded: ["Porters", "Tips", "Accommodation", "Transportation"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Whale Watching Tour, Vancouver Island",
    description: "Set sail from Vancouver Island on a thrilling whale watching tour. Spot orcas, humpback whales, grey whales, and other marine wildlife in their natural environment.",
    shortDescription: "Exciting boat tour to spot whales and marine wildlife.",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Victoria", country: "Canada" },
    duration: "3 hours",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Orcas, humpbacks, grey whales", "Marine naturalist on board", "High-speed zodiac or covered vessel", "Stunning coastal scenery"],
    included: ["Boat tour", "Life jackets", "Expert commentary"],
    notIncluded: ["Transportation to dock", "Food and drinks", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ranthambore Tiger Safari, India",
    description: "Embark on an exhilarating jeep safari in Ranthambore National Park, one of the best places in India to spot wild Bengal tigers. Also see leopards, deer, and various bird species.",
    shortDescription: "Jeep safari for tiger spotting in Ranthambore National Park.",
    price: 5000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Sawai Madhopur", country: "India" },
    duration: "Half day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Bengal tiger sightings", "Diverse wildlife", "Experienced naturalist guide", "Open jeep safari"],
    included: ["Jeep safari", "Park entrance fees", "Guide fees", "Water"],
    notIncluded: ["Camera fees", "Tips", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Galapagos Islands Wildlife Cruise, Ecuador",
    description: "Discover the unique and fearless wildlife of the Galapagos Islands on a multi-day cruise. Encounter giant tortoises, blue-footed boobies, marine iguanas, and more.",
    shortDescription: "Multi-day cruise exploring the unique wildlife of the Galapagos.",
    price: 60000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Puerto Ayora", country: "Ecuador" },
    duration: "5 days",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Endemic species", "Snorkeling with sea lions", "Expert naturalist guides", "Daily island excursions"],
    included: ["Cruise accommodation", "All meals", "Guided excursions", "Snorkeling gear"],
    notIncluded: ["Flights to Galapagos", "Park entrance fee", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Kangaroo Island Wildlife Tour, Australia",
    description: "Explore the pristine wilderness of Kangaroo Island, a haven for Australian wildlife. See kangaroos, koalas, sea lions, and diverse birdlife in their natural habitats.",
    shortDescription: "Full-day tour to see Australian wildlife on Kangaroo Island.",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Adelaide", country: "Australia" },
    duration: "Full day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Flinders Chase National Park", "Seal Bay Conservation Park", "Koala spotting", "Remarkable Rocks"],
    included: ["Round-trip ferry", "Guided island tour", "Park entrance fees", "Lunch"],
    notIncluded: ["Flights to Adelaide", "Drinks", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Panda Volunteer Program, Chengdu, China",
    description: "Spend a day as a panda volunteer at a conservation center near Chengdu. Learn about panda care, prepare food, and contribute to their well-being.",
    shortDescription: "Unique opportunity to volunteer with giant pandas.",
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Chengdu", country: "China" },
    duration: "Full day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Direct interaction with pandas", "Learn about conservation", "Feeding pandas", "Certificate of participation"],
    included: ["Volunteer program fee", "Lunch", "English-speaking guide", "Transportation from Chengdu"],
    notIncluded: ["Flights", "Personal expenses", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Beach Category (8 experiences) ---
  {
    title: "Snorkeling & Island Hopping in Phi Phi Islands, Thailand",
    description: "Explore the stunning Phi Phi Islands on a speedboat tour. Snorkel in crystal-clear waters, relax on pristine beaches, and visit iconic spots like Maya Bay.",
    shortDescription: "Speedboat tour for snorkeling and island hopping in Phi Phi Islands.",
    price: 6000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Phuket", country: "Thailand" },
    duration: "Full day",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Maya Bay visit", "Snorkeling with colorful fish", "Pristine beaches", "Speedboat thrill"],
    included: ["Round-trip transfers", "Snorkeling gear", "Lunch & refreshments", "National park fees"],
    notIncluded: ["Alcoholic drinks", "Tips", "Personal shopping"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Surfing Lesson at Bondi Beach, Sydney",
    description: "Learn to surf at Australia's iconic Bondi Beach with a professional instructor. Perfect for beginners, this lesson will get you riding the waves in no time.",
    shortDescription: "Beginner surfing lesson at world-famous Bondi Beach.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Sydney", country: "Australia" },
    duration: "2 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Iconic beach location", "Experienced instructors", "All equipment provided", "Small group size"],
    included: ["Surfboard", "Wetsuit", "Instructor", "Safety briefing"],
    notIncluded: ["Transportation", "Food and drinks", "Photos"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Sunset Catamaran Cruise, Santorini",
    description: "Sail the breathtaking caldera of Santorini on a luxury catamaran. Enjoy swimming, snorkeling, a delicious BBQ dinner, and witness a magical sunset over Oia.",
    shortDescription: "Luxury catamaran cruise with swimming, BBQ, and sunset views.",
    price: 10000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Santorini", country: "Greece" },
    duration: "5 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Caldera views", "Volcanic hot springs swim", "Fresh BBQ dinner", "Oia sunset"],
    included: ["Catamaran cruise", "Snorkeling gear", "BBQ dinner", "Drinks (wine, beer, soft drinks)"],
    notIncluded: ["Hotel transfers", "Tips", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Goa Water Sports Adventure Package",
    description: "Get your adrenaline pumping with exciting water sports at Goa's pristine beaches. Try parasailing, jet skiing, banana boat rides, and more. Perfect for adventure seekers and groups.",
    shortDescription: "Multiple water sports activities at Goa beaches",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19"
    ],
    location: { city: "Goa", country: "India" },
    duration: "4 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: [
      "Parasailing",
      "Jet skiing",
      "Banana boat ride",
      "Bumper ride",
      "Safety equipment included"
    ],
    included: [
      "All water sports activities",
      "Safety gear and life jackets",
      "Professional instructors",
      "Beach access"
    ],
    notIncluded: [
      "Transportation",
      "Food and beverages",
      "Photos and videos"
    ],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Private Beach Cabana & Spa, Maldives",
    description: "Indulge in a day of luxury with a private beach cabana, personalized butler service, and a rejuvenating spa treatment at a five-star resort in the Maldives.",
    shortDescription: "Exclusive beach cabana and spa experience in the Maldives.",
    price: 20000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Malé", country: "Maldives" },
    duration: "Full day",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Private beach access", "Personal butler", "Luxury spa treatment", "Gourmet lunch"],
    included: ["Cabana rental", "Spa treatment", "Lunch", "Non-alcoholic drinks"],
    notIncluded: ["Seaplane transfer", "Alcoholic beverages", "Additional services"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Kayaking & Snorkeling in Halong Bay, Vietnam",
    description: "Explore the emerald waters and limestone karsts of Halong Bay by kayak. Discover hidden caves and lagoons, and snorkel in secluded spots on this scenic cruise.",
    shortDescription: "Kayaking and snorkeling adventure amidst Halong Bay's karsts.",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Halong Bay", country: "Vietnam" },
    duration: "Full day",
category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Kayaking through caves", "Snorkeling in clear waters", "Stunning limestone scenery", "Fresh seafood lunch"],
    included: ["Cruise", "Kayaking equipment", "Snorkeling gear", "Lunch", "English-speaking guide"],
    notIncluded: ["Drinks", "Tips", "Transportation to Halong Bay"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Dolphin Watching & Snorkeling, Mauritius",
    description: "Swim with wild dolphins in their natural habitat off the coast of Mauritius. Followed by snorkeling in a beautiful lagoon and a BBQ lunch on a private island.",
    shortDescription: "Swim with dolphins and snorkel in Mauritius' clear waters.",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Flic en Flac", country: "Mauritius" },
    duration: "6 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Swimming with wild dolphins", "Snorkeling in lagoon", "BBQ lunch on island", "Scenic boat ride"],
    included: ["Boat trip", "Snorkeling equipment", "BBQ lunch", "Drinks"],
    notIncluded: ["Hotel transfers", "Towels", "Sunscreen"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Private Beach Horseback Riding, Punta Cana",
    description: "Enjoy a romantic and scenic horseback ride along the pristine beaches and lush trails of Punta Cana. Suitable for all experience levels.",
    shortDescription: "Horseback riding on the beach and trails of Punta Cana.",
    price: 5000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Punta Cana", country: "Dominican Republic" },
    duration: "2 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Beachfront ride", "Scenic trails", "Experienced guides", "All skill levels"],
    included: ["Horse rental", "Helmet", "Guide", "Water"],
    notIncluded: ["Hotel transfers", "Tips", "Photos"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Heritage Category (8 experiences) ---
  {
    title: "Machu Picchu Day Trip from Cusco, Peru",
    description: "Journey to the lost city of the Incas, Machu Picchu, a UNESCO World Heritage site. Explore the ancient citadel with a knowledgeable guide and marvel at its history and beauty.",
    shortDescription: "Full-day guided tour to the iconic Machu Picchu.",
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Cusco", country: "Peru" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["UNESCO World Heritage site", "Expert local guide", "Stunning mountain views", "Inca history"],
    included: ["Train tickets", "Bus to Machu Picchu", "Entrance fee", "Guided tour"],
    notIncluded: ["Flights to Cusco", "Meals", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Angkor Wat Sunrise & Temple Tour, Cambodia",
    description: "Witness a magical sunrise over Angkor Wat, then explore the magnificent temples of the Angkor complex, including Angkor Thom and Ta Prohm, with an expert guide.",
    shortDescription: "Sunrise tour of Angkor Wat and surrounding ancient temples.",
    price: 7000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Siem Reap", country: "Cambodia" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Angkor Wat sunrise", "Bayon Temple faces", "Ta Prohm (Tomb Raider temple)", "Expert history guide"],
    included: ["Temple pass", "Air-conditioned transport", "English-speaking guide", "Water"],
    notIncluded: ["Meals", "Tips", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Pyramids of Giza & Sphinx Tour, Egypt",
    description: "Explore the ancient wonders of the Pyramids of Giza and the Sphinx with a private Egyptologist guide. Learn about the pharaohs and the mysteries of these monumental structures.",
    shortDescription: "Private guided tour of the iconic Pyramids of Giza and Sphinx.",
    price: 6000,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Cairo", country: "Egypt" },
    duration: "Half day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Great Pyramid of Giza", "Sphinx monument", "Camel ride option", "Expert Egyptologist"],
    included: ["Private transport", "Entrance fees", "Egyptologist guide", "Bottled water"],
    notIncluded: ["Camel ride", "Lunch", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Acropolis & Parthenon Guided Tour, Athens",
    description: "Discover the architectural marvels of the Acropolis, including the Parthenon, with a licensed guide. Delve into ancient Greek history and mythology.",
    shortDescription: "Guided tour of Athens' iconic Acropolis and Parthenon.",
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Athens", country: "Greece" },
    duration: "3 hours",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Parthenon temple", "Erechtheion", "Propylaea", "Panoramic city views"],
    included: ["Skip-the-line entrance", "Licensed guide", "Headsets"],
    notIncluded: ["Hotel transfers", "Food and drinks", "Acropolis Museum"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Jaipur City Palace & Amber Fort Tour",
    description: "Explore the royal heritage of Jaipur with visits to the magnificent City Palace, the astronomical observatory Jantar Mantar, and the majestic Amber Fort.",
    shortDescription: "Full-day tour of Jaipur's royal palaces and forts.",
    price: 4000,
    images: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e",
      "https://images.unsplash.com/photo-1480497490787-505ec076689f"
    ],
    location: { city: "Jaipur", country: "India" },
    duration: "8 hours",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Amber Fort elephant ride (optional)", "City Palace museum", "Hawa Mahal (Palace of Winds)", "Jantar Mantar observatory"],
    included: ["Private AC car", "English-speaking guide", "Bottled water"],
    notIncluded: ["Entrance fees", "Elephant ride", "Meals"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Great Wall of China Hiking Tour, Mutianyu",
    description: "Hike a well-preserved section of the Great Wall of China at Mutianyu. Enjoy stunning views, fewer crowds, and the option of a cable car or toboggan ride.",
    shortDescription: "Guided hiking tour on the Mutianyu section of the Great Wall.",
    price: 5500,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Beijing", country: "China" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Well-preserved section", "Stunning panoramic views", "Cable car/toboggan option", "Fewer crowds"],
    included: ["Round-trip transport", "Entrance ticket", "English-speaking guide"],
    notIncluded: ["Cable car/toboggan", "Lunch", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Petra & Wadi Rum Day Tour, Jordan",
    description: "Discover the ancient Nabataean city of Petra, a UNESCO World Heritage site, and then experience the dramatic desert landscapes of Wadi Rum on a jeep safari.",
    shortDescription: "Full-day tour to the ancient city of Petra and Wadi Rum desert.",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1506197603052-3cc9efd87f2f"
    ],
    location: { city: "Amman", country: "Jordan" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["The Treasury at Petra", "Siq canyon walk", "Wadi Rum jeep safari", "Bedouin hospitality"],
    included: ["Transport", "Petra entrance", "Wadi Rum jeep tour", "English-speaking guide"],
    notIncluded: ["Meals", "Drinks", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Colonial Cartagena Walking Tour, Colombia",
    description: "Stroll through the colorful streets of Cartagena's walled city, a UNESCO World Heritage site. Learn about its rich history, architecture, and vibrant culture from a local guide.",
    shortDescription: "Guided walking tour of Cartagena's historic colonial city.",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ba647857c",
      "https://images.unsplash.com/photo-1500530855697-b586d89ce72f"
    ],
    location: { city: "Cartagena", country: "Colombia" },
    duration: "3 hours",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Walled city architecture", "Plazas and churches", "Local stories and legends", "Vibrant street art"],
    included: ["Local guide", "Bottled water"],
    notIncluded: ["Entrance fees to attractions", "Food and drinks", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
];