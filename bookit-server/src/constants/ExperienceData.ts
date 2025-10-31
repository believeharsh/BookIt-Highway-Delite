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
      "https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWxheWElMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
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
      "https://images.unsplash.com/photo-1598610882061-bb806386c5fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpc2hpa2VzaCUyMHJhZnRpbmd8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
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
      "https://images.unsplash.com/photo-1669474643381-9c99377886ed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
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
      "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGl2aW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
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
      "https://images.unsplash.com/photo-1731662333563-ec92fbf087b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuZ2VlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
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
    title: "Ganga Aarti Ceremony & Old City Walk, Varanasi",
    description: "Witness the spiritual grandeur of the Ganga Aarti ceremony from a prime ghat location, followed by a walk through the ancient alleys of Varanasi.",
    shortDescription: "Experience the sacred Ganga Aarti and explore Varanasi's old city.",
    price: 1800,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCn103RC5vLqmvKZI_FFWh7dcqKgEyKXapg&s"
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
    title: "Desert Safari in Jaisalmer",
    description: "Experience the magic of the Thar Desert with a thrilling jeep safari across the golden dunes of Jaisalmer, followed by a cultural evening and dinner.",
    shortDescription: "Thrilling jeep safari and cultural evening in the Thar Desert.",
    price: 3500,
    images: [
      "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpc2FsbWVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Jaisalmer", country: "India" },
    duration: "6 hours",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Dune bashing", "Sunset views", "Camel ride", "Cultural program"],
    included: ["Jeep safari", "Camel ride", "Dinner", "Water"],
    notIncluded: ["Hotel transfers", "Alcoholic drinks", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Spiti Valley Motorcycle Tour",
    description: "Embark on a rugged motorcycle journey through the high-altitude desert of Spiti Valley. Navigate challenging roads, visit ancient monasteries, and witness breathtaking landscapes.",
    shortDescription: "High-altitude motorcycle adventure through Spiti Valley.",
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1579010461011-47920f63d8d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
    ],
    location: { city: "Manali", country: "India" },
    duration: "8 days",
    category: "Adventure" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["High-altitude passes", "Ancient monasteries", "Stunning landscapes", "Challenging roads"],
    included: ["Motorcycle rental", "Accommodation", "Mechanic support", "Permits"],
    notIncluded: ["Fuel", "Meals", "Riding gear"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Culture Category (7 experiences) ---
  {
    title: "Kathakali Performance & Dinner in Kochi",
    description: "Witness the dramatic and colorful classical Indian dance-drama of Kathakali. See the elaborate makeup process followed by a captivating performance and a traditional Kerala dinner.",
    shortDescription: "Experience a traditional Kathakali performance in Kerala.",
    price: 2500,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhnRwk0gFvWZDo7ZW8Abht-Fc_zoql4saWA&s"
    ],
    location: { city: "Kochi", country: "India" },
    duration: "3 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Live Kathakali show", "Makeup demonstration", "Traditional Kerala dinner", "Cultural insight"],
    included: ["Show ticket", "Dinner", "Explanatory session"],
    notIncluded: ["Transportation", "Souvenirs", "Drinks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Old Delhi Heritage and Food Walk",
    description: "Explore the chaotic and charming lanes of Old Delhi. Visit historical sites like Jama Masjid and Chandni Chowk, and savor iconic street food delicacies.",
    shortDescription: "A guided walk through Old Delhi's history and street food scene.",
    price: 2200,
    images: [
      "https://images.unsplash.com/photo-1595931848923-43c037a114d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2xkJTIwZGVsaGl8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Delhi", country: "India" },
    duration: "4 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Chandni Chowk market", "Jama Masjid", "Rickshaw ride", "Street food tasting"],
    included: ["Guided tour", "Food tastings", "Rickshaw ride", "Bottled water"],
    notIncluded: ["Hotel pickup", "Additional food", "Gratuities"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Mumbai Bollywood Tour with Dance Show",
    description: "Get a behind-the-scenes look at the heart of India's film industry. Visit a film studio, see live shooting (subject to availability), and enjoy a vibrant Bollywood dance show.",
    shortDescription: "Behind-the-scenes tour of Bollywood with a live dance show.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1547106500-9b566874481b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9sbHl3b29kJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Mumbai", country: "India" },
    duration: "5 hours",
    category: "Culture" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Visit a film studio", "Live shooting insight", "Bollywood dance performance", "Film history"],
    included: ["Studio tour", "Dance show", "Air-conditioned transport", "Guide"],
    notIncluded: ["Meals", "Souvenirs", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Nature Category (8 experiences) ---
  {
    title: "Kerala Backwaters Houseboat Stay",
    description: "Cruise through the serene backwaters of Kerala in a traditional houseboat. Enjoy freshly prepared local cuisine, watch village life unfold, and experience the tranquility of these waterways.",
    shortDescription: "Overnight houseboat journey through Kerala's backwaters",
    price: 12000,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFWWAqgALTSQhRrHjUuNjsbsISPFzBQ7DIA&s"
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
    title: "Living Root Bridges Trek, Meghalaya",
    description: "Witness the engineering marvel of the Khasi tribes by trekking to the living root bridges of Meghalaya. Cross these unique bridges grown from the roots of rubber trees.",
    shortDescription: "Trek to see the unique living root bridges of Meghalaya.",
    price: 8000,
    images: [
      "https://res.cloudinary.com/roundglass/image/upload/f_auto/v1649765953/rg/collective/media/meghalaya-nongriat-double-decker-living-root-bridge-greenery-people-ashwin-ezhumalai_mmdvms.jpg"
    ],
    location: { city: "Cherrapunji", country: "India" },
    duration: "Full day",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Double-decker root bridge", "Natural swimming pools", "Lush rainforest", "Khasi culture"],
    included: ["Local guide", "Village entry fees", "Bottled water"],
    notIncluded: ["Transportation", "Meals", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Tea Plantation Tour in Munnar",
    description: "Walk through the rolling hills of Munnar, covered in lush green tea plantations. Learn about the tea-making process from leaf to cup and enjoy fresh tea tasting.",
    shortDescription: "Explore the scenic tea gardens of Munnar.",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhJTIwZ2FyZGVuc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Munnar", country: "India" },
    duration: "4 hours",
    category: "Nature" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Lush tea estates", "Tea factory visit", "Tea tasting session", "Panoramic viewpoints"],
    included: ["Guided walk", "Factory tour", "Tea tasting"],
    notIncluded: ["Transportation", "Meals", "Personal purchases"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Food Category (7 experiences) ---
  {
    title: "Amritsar Food Walk",
    description: "Embark on a culinary journey through the streets of Amritsar, the food capital of Punjab. Taste iconic dishes like Amritsari Kulcha, Lassi, and Jalebi from legendary local eateries.",
    shortDescription: "Taste the best of Punjabi cuisine on a guided food tour.",
    price: 1800,
    images: [
      "https://www.alphonsostories.com/AlphonSoStoriesImages/SubServiceImage/Local-street-vendor-food-walk-lucknow.jpg"
    ],
    location: { city: "Amritsar", country: "India" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Amritsari Kulcha", "Makki di Roti & Sarson da Saag", "Sweet Lassi", "Golden Temple Langar"],
    included: ["All food tastings", "Local expert guide", "Bottled water"],
    notIncluded: ["Alcoholic beverages", "Souvenirs", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Jaipur Cooking Class with a Local Family",
    description: "Learn the secrets of authentic Rajasthani cuisine in a hands-on cooking class hosted in a local family's home. Prepare dishes like Dal Baati Churma and enjoy a meal together.",
    shortDescription: "Authentic Rajasthani cooking class in a local home.",
    price: 2500,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/43/a0/f0/caption.jpg?w=500&h=400&s=1"
    ],
    location: { city: "Jaipur", country: "India" },
    duration: "4 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Learn traditional recipes", "Hands-on cooking experience", "Dine with a local family", "Cultural exchange"],
    included: ["Ingredients", "Cooking instruction", "Full meal", "Recipe notes"],
    notIncluded: ["Transportation", "Alcoholic drinks", "Souvenirs"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Lucknow Street Food Crawl",
    description: "Explore the culinary heritage of the 'City of Nawabs'. This guided tour takes you to the best spots for tasting iconic Awadhi dishes like Tunday Kebab, Biryani, and Malai Makhan.",
    shortDescription: "Taste the legendary Awadhi cuisine of Lucknow.",
    price: 2000,
    images: [
      "https://images.unsplash.com/photo-1760263215713-a866691b58b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1Y2tub3clMjBmb29kfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Lucknow", country: "India" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Tunday Kebab", "Galouti Kebab", "Lucknawi Biryani", "Sheermal"],
    included: ["All food tastings", "Local guide", "Bottled water"],
    notIncluded: ["Hotel transfers", "Additional purchases", "Gratuities"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Kolkata Street Food Tour",
    description: "Dive into the vibrant street food culture of Kolkata. From Puchkas and Kathi Rolls to Sandesh and Mishti Doi, this tour is a feast for the senses.",
    shortDescription: "A guided tour of Kolkata's legendary street food.",
    price: 1500,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxG3tgS87WfNuTsaUL9Cb5_hXXQB-PbOytg&s"
    ],
    location: { city: "Kolkata", country: "India" },
    duration: "3 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Puchka (Pani Puri)", "Kathi Rolls", "Jhalmuri", "Bengali sweets"],
    included: ["All food tastings", "Local guide"],
    notIncluded: ["Drinks", "Gratuities", "Hotel transfers"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Hyderabad Biryani & Haleem Trail",
    description: "Discover why Hyderabadi Biryani is world-famous on this food trail. Also, savor other local delicacies like Haleem (seasonal) and Irani Chai at iconic city eateries.",
    shortDescription: "Taste the authentic flavors of Hyderabadi cuisine.",
    price: 2200,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbVwz2NVKbIBYwW-A5J67jTR2v79hRomkYw&s"
    ],
    location: { city: "Hyderabad", country: "India" },
    duration: "4 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Authentic Hyderabadi Biryani", "Haleem tasting", "Irani Chai & Osmania biscuits", "Historic eateries"],
    included: ["Food tastings", "Local guide", "Transport between spots"],
    notIncluded: ["Hotel transfers", "Additional orders", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Mumbai Dabbawala & Street Food Tour",
    description: "Witness the incredible efficiency of Mumbai's Dabbawalas, a century-old food delivery network. Followed by a tour of Mumbai's most famous street food like Vada Pav and Pav Bhaji.",
    shortDescription: "See the famous Dabbawalas and taste Mumbai's street food.",
    price: 2800,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K2vYL4SsdzJwZ0x2kJNwF_Gu3B6cmNYIMw&s"
    ],
    location: { city: "Mumbai", country: "India" },
    duration: "4 hours",
    category: "Food" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Dabbawala system explained", "Vada Pav", "Pav Bhaji", "Bhel Puri"],
    included: ["Guided tour", "Food tastings", "Local train travel"],
    notIncluded: ["Hotel transfers", "Additional food", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Wellness Category (7 experiences) ---
  {
    title: "Rishikesh Yoga & Meditation Retreat",
    description: "Rejuvenate your mind, body, and soul with a multi-day yoga and meditation retreat in the serene landscapes of Rishikesh, the 'Yoga Capital of the World'.",
    shortDescription: "Multi-day wellness retreat with yoga and meditation in Rishikesh.",
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1701709488066-8d32fe5871b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNoJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Rishikesh", country: "India" },
    duration: "5 days",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Daily yoga classes", "Guided meditation sessions", "Healthy sattvic meals", "Ganga Aarti"],
    included: ["Accommodation", "All meals", "Yoga & meditation classes", "One Ayurvedic massage"],
    notIncluded: ["Flights", "Personal expenses", "Additional treatments"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Himalayan Hot Springs at Manikaran",
    description: "Relax and unwind in the natural geothermal hot springs at Manikaran Sahib, a pilgrimage site in the Parvati Valley. The healing waters are a perfect antidote to mountain fatigue.",
    shortDescription: "Relaxing day at the natural hot springs of Manikaran.",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1652379379347-5ab81f8d03fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWthcmFufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Manikaran", country: "India" },
    duration: "Half day",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Natural hot water pools", "Sulphur healing properties", "Pilgrimage site", "Parvati Valley views"],
    included: ["Access to public baths", "Locker facility"],
    notIncluded: ["Transportation", "Private baths", "Food and drinks"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Sound Bath & Healing Session, Auroville",
    description: "Experience deep relaxation and energetic healing with a guided sound bath session in the spiritual community of Auroville. Tibetan bowls and gongs create a meditative atmosphere.",
    shortDescription: "Meditative sound bath experience in Auroville's serene setting.",
    price: 2000,
    images: [
      "https://images.unsplash.com/photo-1593810451410-8fbb422cc15e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291bmQlMjBiYXRofGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Auroville", country: "India" },
    duration: "1.5 hours",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Tibetan singing bowls", "Gongs and chimes", "Deep relaxation", "Energetic cleansing"],
    included: ["Sound bath session", "Comfortable mats/blankets"],
    notIncluded: ["Transportation", "Personal healing sessions", "Food"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ranthambore Tiger Safari, India",
    description: "Embark on an exhilarating jeep safari in Ranthambore National Park, one of the best places in India to spot wild Bengal tigers. Also see leopards, deer, and various bird species.",
    shortDescription: "Jeep safari for tiger spotting in Ranthambore National Park.",
    price: 5000,
    images: [
      "https://plus.unsplash.com/premium_photo-1707554248739-0476b49c9055?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFudGhhbWJvcmUlMjB0aWdlciUyMHJlc2VydmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
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
    title: "Vipassana Meditation Course, Igatpuri",
    description: "Participate in a 10-day residential Vipassana meditation course as taught by S.N. Goenka. A serious, silent retreat to learn the technique of self-observation and purification of mind.",
    shortDescription: "10-day silent Vipassana meditation course.",
    price: 0,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBm7PeKPm7h4MEmec_pQIoe05XKyUeEJYfQ&s"
    ],
    location: { city: "Igatpuri", country: "India" },
    duration: "10 days",
    category: "Wellness" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Learn Vipassana technique", "Noble silence", "Mental purification", "Dhamma teachings"],
    included: ["Accommodation", "All vegetarian meals", "Meditation instruction"],
    notIncluded: ["Transportation", "Donations are voluntary"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Wildlife Category (7 experiences) ---
  {
    title: "Kaziranga National Park Rhino Safari",
    description: "Explore Kaziranga National Park, a UNESCO World Heritage Site, famous for its population of the one-horned rhinoceros. Enjoy jeep and elephant safaris to spot diverse wildlife.",
    shortDescription: "Safari to see the one-horned rhino in Kaziranga.",
    price: 6000,
    images: [
      "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    ],
    location: { city: "Kaziranga", country: "India" },
    duration: "Full day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["One-horned rhinoceros", "Jeep safari", "Elephant safari", "Tigers and wild elephants"],
    included: ["Jeep safari", "Park entrance fees", "Guide"],
    notIncluded: ["Elephant safari (optional)", "Meals", "Camera fees"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Gir National Park Lion Safari",
    description: "Visit Gir National Park in Gujarat, the only natural habitat of the Asiatic Lion. Embark on a jeep safari to witness these majestic creatures in the wild.",
    shortDescription: "The only place to see wild Asiatic Lions.",
    price: 5500,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-IisTRxIPgRI09VBTNvem21to4X7BOoEaw&s"
    ],
    location: { city: "Sasan Gir", country: "India" },
    duration: "Half day",
    category: "Wildlife" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Asiatic lion sightings", "Jeep safari", "Leopards and deer", "Rich birdlife"],
    included: ["Jeep safari permit", "Guide", "Vehicle charges"],
    notIncluded: ["Camera fees", "Meals", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },

  // --- Beach Category (8 experiences) ---
  {
    title: "Surfing Lesson in Varkala, Kerala",
    description: "Learn to surf on the beautiful cliff-side beaches of Varkala with a professional instructor. Perfect for beginners, this lesson will get you riding the waves in no time.",
    shortDescription: "Beginner surfing lesson at the scenic Varkala Beach.",
    price: 2000,
    images: [
      "https://www.adventurush.com/wp-content/uploads/2024/03/surfing-varkala-4.jpg"
    ],
    location: { city: "Varkala", country: "India" },
    duration: "2 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Scenic cliff beach", "Experienced instructors", "All equipment provided", "Small group size"],
    included: ["Surfboard", "Wetsuit", "Instructor", "Safety briefing"],
    notIncluded: ["Transportation", "Food and drinks", "Photos"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Sunset Cruise in Goa",
    description: "Sail along the Mandovi River on a relaxing evening cruise. Enjoy live music, cultural performances, and witness a beautiful Goan sunset over the water.",
    shortDescription: "Evening river cruise with music, dance, and sunset views.",
    price: 1500,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgD1Pk8cFslW6g_sphmCBatB7aU2SzyWZgtg&s"
    ],
    location: { city: "Panjim", country: "India" },
    duration: "5 hours",
    category: "Beach" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Mandovi River views", "Live Goan music", "Cultural dance performances", "Sunset views"],
    included: ["Cruise ticket", "Live entertainment", "Snacks"],
    notIncluded: ["Hotel transfers", "Tips", "Personal expenses"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Goa Water Sports Adventure Package",
    description: "Get your adrenaline pumping with exciting water sports at Goa's pristine beaches. Try parasailing, jet skiing, banana boat rides, and more. Perfect for adventure seekers and groups.",
    shortDescription: "Multiple water sports activities at Goa beaches",
    price: 2500,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6JJBnJGQLTKzeJ-wNCyR4uH__9K8abvwoA&s"
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
    title: "Jaipur City Palace & Amber Fort Tour",
    description: "Explore the royal heritage of Jaipur with visits to the magnificent City Palace, the astronomical observatory Jantar Mantar, and the majestic Amber Fort.",
    shortDescription: "Full-day tour of Jaipur's royal palaces and forts.",
    price: 4000,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAj5FrgzkdY_r2CzP1SbONv7K-2Y15C5lvNw&s"
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
  // --- Heritage Category (8 experiences) ---
  {
    title: "Taj Mahal & Agra Fort Day Trip from Delhi",
    description: "Journey to the iconic symbol of love, the Taj Mahal, a UNESCO World Heritage site. Also explore the majestic Agra Fort with a knowledgeable guide.",
    shortDescription: "Full-day guided tour to the iconic Taj Mahal and Agra Fort.",
    price: 5000,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnStzjceOlWvEiYrdEmaFBDxIZvGx7oGOPQ&s"
    ],
    location: { city: "Agra", country: "India" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["UNESCO World Heritage site", "Expert local guide", "Mughal architecture", "Agra Fort history"],
    included: ["Private car from Delhi", "Entrance fees", "Guided tour"],
    notIncluded: ["Meals", "Tips", "Camera fees"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Hampi's Ancient Ruins & Boulders Tour",
    description: "Explore the surreal landscape of Hampi, a UNESCO World Heritage site, filled with ancient temples, royal enclosures, and unique boulder-strewn hills.",
    shortDescription: "Explore the ancient capital of the Vijayanagara Empire.",
    price: 3000,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm9mj7C8V9eVQ4gHHWFOSNQSArfLe0QOjNw&s"
    ],
    location: { city: "Hampi", country: "India" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Virupaksha Temple", "Vittala Temple's stone chariot", "Coracle boat ride", "Sunset from Matanga Hill"],
    included: ["Full-day guided tour", "Bottled water"],
    notIncluded: ["Entrance fees", "Meals", "Coracle ride fee"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Ajanta & Ellora Caves Tour from Aurangabad",
    description: "Discover the magnificent rock-cut caves of Ajanta and Ellora, a UNESCO World Heritage site. Marvel at ancient paintings, sculptures, and monolithic architecture.",
    shortDescription: "Guided tour of the ancient Ajanta and Ellora Caves.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1620558601903-9f2441730121?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWphbnRhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Aurangabad", country: "India" },
    duration: "Full day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Ancient Buddhist paintings (Ajanta)", "Kailasa Temple (Ellora)", "Rock-cut architecture", "UNESCO site"],
    included: ["Private transport", "Licensed guide", "Bottled water"],
    notIncluded: ["Entrance fees", "Lunch", "Tips"],
    maxGroupSize: getRandomInt(5, 20)
  },
  {
    title: "Khajuraho Temples & Erotic Sculptures Tour",
    description: "Explore the UNESCO World Heritage temples of Khajuraho, famous for their intricate and stunningly detailed sculptures, including the celebrated erotic carvings.",
    shortDescription: "Guided tour of Khajuraho's famous sculpted temples.",
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2hhanVyYWhvJTIwdGVtcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
    ],
    location: { city: "Khajuraho", country: "India" },
    duration: "Half day",
    category: "Heritage" as CategoryType,
    rating: getRandomRating(),
    reviewCount: getRandomInt(50, 500),
    highlights: ["Western Group of Temples", "Intricate stone carvings", "Nagari style architecture", "UNESCO site"],
    included: ["Licensed guide", "Bottled water"],
    notIncluded: ["Entrance fees", "Transport", "Light & Sound show"],
    maxGroupSize: getRandomInt(5, 20)
  },
];