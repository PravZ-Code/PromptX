/**
 * Ministry of Tourism - Government of India Official Portal
 * High-Performance Client Logic, UX4G Integration & Interactive Engine
 */

document.addEventListener("DOMContentLoaded", () => {

    // =================================================================
    // 1. COMPREHENSIVE DESTINATION DATASET (19 Verified Tours)
    // =================================================================
    const destinations = [
        {
            id: "agra",
            name: "Agra & The Taj Mahal",
            state: "Uttar Pradesh",
            region: "north",
            image: "images/dest-agra.jpg",
            rating: "4.9",
            bestTime: "Oct – Mar",
            airport: "Agra Airport / IGI Delhi (200 km)",
            desc: "The seat of Mughal emperors and home to the world's crowning architectural masterpiece, the Taj Mahal, flanked by Agra Fort and Fatehpur Sikri.",
            experiences: [
                "Sunrise view of the Taj Mahal reflecting in the Yamuna River",
                "Explore the red sandstone courtyards of Agra Fort",
                "Stroll through the ghost city of Fatehpur Sikri",
                "Sample legendary Agra Petha at historic sweet shops"
            ],
            food: "Agra Petha, Mughlai Biryani, Bedmi Puri",
            tags: ["taj mahal", "monument", "mughal", "heritage", "unesco", "romantic", "north"]
        },
        {
            id: "jaipur",
            name: "Jaipur (The Pink City)",
            state: "Rajasthan",
            region: "north",
            image: "images/dest-jaipur.jpg",
            rating: "4.8",
            bestTime: "Nov – Feb",
            airport: "Jaipur International Airport (JAI)",
            desc: "A fairytale kingdom of rose-tinted palaces, majestic hilltop forts, vibrant bazaars, and opulent royal havelis designed according to Vedic Vastu Shastra.",
            experiences: [
                "Ascend the dramatic battlements of Amer Fort",
                "Photograph the 953 honeycombed windows of Hawa Mahal",
                "Admire astronomical instruments at Jantar Mantar",
                "Shop for handcrafted blue pottery in Johari Bazaar"
            ],
            food: "Dal Baati Churma, Pyaz Kachori, Ghewar",
            tags: ["fort", "palace", "rajasthan", "desert", "royal", "culture", "unesco", "north"]
        },
        {
            id: "kerala",
            name: "Kerala Backwaters & Alleppey",
            state: "Kerala",
            region: "south",
            image: "images/dest-kerala.jpg",
            rating: "4.9",
            bestTime: "Sep – Mar",
            airport: "Cochin International Airport (COK)",
            desc: "Known as 'God’s Own Country', offering serene labyrinthine waterways, traditional kettuvallam houseboats, emerald paddy fields, and rejuvenating Ayurvedic wellness.",
            experiences: [
                "Glide through tranquil palm-fringed lagoons on a luxury houseboat",
                "Witness the thunderous rhythm of the Nehru Trophy Snake Boat Race",
                "Experience authentic Panchakarma Ayurvedic massage therapies",
                "Taste fresh coastal pearl spot fish wrapped in banana leaf"
            ],
            food: "Appam with Ishtu, Karimeen Pollichathu, Malabar Parotta",
            tags: ["backwaters", "nature", "ayurveda", "houseboat", "south", "greenery"]
        },
        {
            id: "varanasi",
            name: "Varanasi (Kashi)",
            state: "Uttar Pradesh",
            region: "north",
            image: "images/dest-varanasi.jpg",
            rating: "4.9",
            bestTime: "Oct – Mar",
            airport: "Lal Bahadur Shastri Airport (VNS)",
            desc: "One of the world's oldest continuously inhabited cities, the spiritual heart of India where sacred ghats, Vedic chanting, and the holy Ganges River converge.",
            experiences: [
                "Witness the evening Maha Ganga Aarti at Dashashwamedh Ghat",
                "Take a dawn wooden boat ride along the misty ghats",
                "Explore the narrow alleys of Kashi Vishwanath corridor",
                "Visit Sarnath, where Lord Buddha gave his first sermon"
            ],
            food: "Banarasi Kachori Sabzi, Malaiyo, Tamatar Chaat, Paan",
            tags: ["spiritual", "ganges", "ghats", "temple", "ancient", "culture", "north"]
        },
        {
            id: "ladakh",
            name: "Leh & Ladakh",
            state: "Ladakh",
            region: "himalayas",
            image: "images/dest-ladakh.jpg",
            rating: "4.9",
            bestTime: "May – Sep",
            airport: "Kushok Bakula Rimpochee Airport (IXL)",
            desc: "The 'Land of High Passes' boasting stark lunar landscapes, azure high-altitude alpine lakes, centuries-old Buddhist gompas, and breathtaking Himalayan crests.",
            experiences: [
                "Marvel at the color-shifting waters of Pangong Tso Lake",
                "Drive across Khardung La, one of the world's highest motorable passes",
                "Experience monastic chanting at Thiksey Monastery",
                "Ride double-humped Bactrian camels in Nubra Valley sand dunes"
            ],
            food: "Thukpa, Momos, Butter Tea, Skyu",
            tags: ["mountains", "himalayas", "trekking", "buddhist", "adventure", "lakes"]
        },
        {
            id: "goa",
            name: "Goa (Sun, Sand & Heritage)",
            state: "Goa",
            region: "beaches",
            image: "images/dest-goa.jpg",
            rating: "4.7",
            bestTime: "Nov – Feb",
            airport: "Dabolim (GOI) / Manohar International (GOX)",
            desc: "A coastal paradise combining Portuguese colonial churches, golden sandy beaches, vibrant spice plantations, beach shacks, and exhilarating water sports.",
            experiences: [
                "Visit the UNESCO-listed Basilica of Bom Jesus in Old Goa",
                "Watch dramatic sunsets on Palolem and Morjim beaches",
                "Trek to the milky cascading torrent of Dudhsagar Waterfalls",
                "Explore the Latin Quarter havelis of Fontainhas in Panaji"
            ],
            food: "Goan Fish Curry, Pork Vindaloo, Bebinca, Feni",
            tags: ["beach", "coastal", "portuguese", "churches", "nightlife", "seafood", "west"]
        },
        {
            id: "hampi",
            name: "Hampi & Vijayanagara",
            state: "Karnataka",
            region: "south",
            image: "images/dest-hampi.jpg",
            rating: "4.9",
            bestTime: "Oct – Mar",
            airport: "Jindal Vijayanagar (VDY) / Hubli (HBX)",
            desc: "The open-air archaeological capital of the 14th-century Vijayanagara Empire, featuring colossal stone chariots, musical pillars, and dramatic granite boulder hills.",
            experiences: [
                "Marvel at the iconic Stone Chariot in the Vijaya Vittala Temple",
                "Climb Matanga Hill for a panoramic golden sunrise over the ruins",
                "Cross the Tungabhadra River in a traditional round coracle boat",
                "Explore the royal enclosures and Lotus Mahal pavilion"
            ],
            food: "Bisi Bele Bath, Mysore Masala Dosa, Jolada Rotti, Filter Coffee",
            tags: ["unesco", "heritage", "ruins", "boulders", "temple", "karnataka", "south"]
        },
        {
            id: "statueofunity",
            name: "Statue of Unity (Kevadia)",
            state: "Gujarat",
            region: "west",
            image: "images/explore-statueofunity.jpg",
            rating: "4.9",
            bestTime: "Oct – Mar",
            airport: "Vadodara Airport (BDQ - 90 km)",
            desc: "The world's tallest monument standing 182 meters tall on the Narmada River, honoring Iron Man Sardar Vallabhbhai Patel with high-speed elevators and panoramic viewing gallery.",
            experiences: [
                "Ascend to the 153-meter-high viewing gallery between the statue's chest",
                "Explore the 24-acre Valley of Flowers & Butterfly Park",
                "Watch the evening laser sound and light projection mapping show",
                "Cruise the scenic Sardar Sarovar Dam reservoir"
            ],
            food: "Gujarati Thali, Khaman Dhokla, Handvo, Jalebi Fafda",
            tags: ["statue of unity", "monument", "gujarat", "modern", "record", "west"]
        },
        {
            id: "munnar",
            name: "Munnar & Western Ghats",
            state: "Kerala",
            region: "south",
            image: "images/explore-munnar.jpg",
            rating: "4.9",
            bestTime: "Sep – Mar",
            airport: "Cochin International Airport (COK - 110 km)",
            desc: "Rolling emerald tea plantations, mist-covered mountain valleys, cascading waterfalls, and the highest peak in South India, Anamudi.",
            experiences: [
                "Tour tea processing history at the Tata Tea Museum",
                "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
                "Boating amidst mountain mists at Mattupetty Dam",
                "Hike to Top Station for panoramic views of Tamil Nadu plains"
            ],
            food: "Kerala Porotta, Puttu and Kadala Curry, Cardamom Tea",
            tags: ["tea", "hills", "kerala", "nature", "western ghats", "south"]
        },
        {
            id: "dalhousie",
            name: "Dalhousie & Khajjiar",
            state: "Himachal Pradesh",
            region: "himalayas",
            image: "images/explore-dalhousie.jpg",
            rating: "4.8",
            bestTime: "Mar – Jun & Dec – Feb",
            airport: "Gaggal Airport, Kangra (DHM - 105 km)",
            desc: "A tranquil hill station established across five mountain hills, famous for Scottish and Victorian havelis, deodar forests, and Khajjiar – India's Mini Switzerland.",
            experiences: [
                "Walk across the golden alpine meadows of Khajjiar Lake",
                "Take a 360-degree snow-crest panorama from Dainkund Peak",
                "Trek through ancient deodar trees in Kalatop Wildlife Sanctuary",
                "Stroll along Subhash Baoli mountain stream path"
            ],
            food: "Himachali Dham, Madra, Siddu, Pahadi Chha Gosht",
            tags: ["dalhousie", "himachal", "snow", "hills", "himalayas", "nature"]
        },
        {
            id: "dharamsala",
            name: "Dharamsala & McLeod Ganj",
            state: "Himachal Pradesh",
            region: "himalayas",
            image: "images/explore-dharamsala.jpg",
            rating: "4.8",
            bestTime: "Oct – May",
            airport: "Kangra Gaggal Airport (DHM - 15 km)",
            desc: "Residence of His Holiness the Dalai Lama and the seat of Tibetan Buddhism in exile, surrounded by towering cedar trees and the rocky snow-capped Dhauladhar peaks.",
            experiences: [
                "Visit the Tsuglagkhang Complex (Dalai Lama Main Temple)",
                "Trek to the scenic alpine ridge of Triund with Dhauladhar views",
                "Explore the Norbulingka Institute preserving Tibetan arts",
                "Dip near the mountain cascade of Bhagsunag Waterfall"
            ],
            food: "Tibetan Tingmo, Shaphalay, Thukpa, Herbal Ginger-Lemon Honey Tea",
            tags: ["dharamsala", "buddhist", "dalai lama", "himachal", "himalayas", "trekking"]
        },
        {
            id: "wayanad",
            name: "Wayanad (Spice & Forest Hills)",
            state: "Kerala",
            region: "south",
            image: "images/explore-wayanad.jpg",
            rating: "4.8",
            bestTime: "Oct – May",
            airport: "Calicut International Airport (CCJ - 65 km)",
            desc: "A mist-cloaked plateau in the Nilgiri Biosphere featuring prehistoric rock shelters, aromatic spice plantations, wildlife sanctuaries, and bamboo groves.",
            experiences: [
                "Decipher 6,000-year-old Neolithic carvings in Edakkal Caves",
                "Boat on Banasura Sagar Dam, Asia's 2nd largest earthen dam",
                "Trek to the heart-shaped lake at Chembra Peak",
                "Spot wild elephants at Wayanad Wildlife Sanctuary"
            ],
            food: "Malabar Biryani, Bamboo Rice Payasam, Unnakaya",
            tags: ["wayanad", "caves", "kerala", "spices", "wildlife", "south"]
        },
        {
            id: "amritsar",
            name: "Amritsar (The Golden Sanctum)",
            state: "Punjab",
            region: "north",
            image: "images/dest-amritsar.jpg",
            rating: "4.9",
            bestTime: "Oct – Mar",
            airport: "Sri Guru Ram Dass Jee International (ATQ)",
            desc: "Spiritual headquarters of Sikhism, home to the resplendent Harmandir Sahib (Golden Temple), poignant freedom history, and unmatched culinary generosity.",
            experiences: [
                "Partake in the blessed community kitchen (Langar) feeding 100,000 daily",
                "Witness the patriotic Beating Retreat ceremony at Attari-Wagah Border",
                "Pay homage at the historic Jallianwala Bagh national memorial",
                "Bite into piping hot butter-drenched Amritsari Kulchas"
            ],
            food: "Amritsari Kulcha, Dal Makhani, Lassi, Pinni",
            tags: ["golden temple", "punjab", "sikh", "patriotic", "food", "north"]
        },
        {
            id: "rishikesh",
            name: "Rishikesh & Haridwar",
            state: "Uttarakhand",
            region: "north",
            image: "images/dest-rishikesh.jpg",
            rating: "4.8",
            bestTime: "Sep – Apr",
            airport: "Dehradun Jolly Grant Airport (DED - 20 km)",
            desc: "The Yoga Capital of the World on the roaring emerald banks of the Ganges, offering meditation ashrams, suspension bridges, and white-water river rafting.",
            experiences: [
                "Attend evening Ganga Aarti with floating diyas at Triveni Ghat",
                "Experience Grade III-IV white-water rafting on the emerald Ganges",
                "Cross the iconic Lakshman Jhula and Ram Jhula suspension bridges",
                "Visit the historic Beatles Ashram covered in vibrant spiritual murals"
            ],
            food: "Aloo Puri, Garhwali Kafuli, Ayurvedic Khichdi, Masala Chai",
            tags: ["yoga", "ganges", "rafting", "ashram", "himalayas", "spiritual", "north"]
        },
        {
            id: "darjeeling",
            name: "Darjeeling & Kanchenjunga",
            state: "West Bengal",
            region: "east",
            image: "images/dest-darjeeling.jpg",
            rating: "4.8",
            bestTime: "Mar – May & Oct – Dec",
            airport: "Bagdogra Airport (IXB - 70 km)",
            desc: "The Queen of the Hills renowned for world-class muscatel tea gardens, sunrise vistas over Mount Kanchenjunga, and the historic UNESCO Toy Train.",
            experiences: [
                "Watch golden sunrise ignite Mount Kanchenjunga from Tiger Hill",
                "Ride the vintage steam-powered Darjeeling Himalayan Toy Train",
                "Walk among tea pluckers in the Makaibari organic tea estate",
                "Visit the Himalayan Mountaineering Institute and Peace Pagoda"
            ],
            food: "Darjeeling First Flush Tea, Steamed Momos, Churpee, Thukpa",
            tags: ["tea", "toy train", "kanchenjunga", "bengal", "hills", "east"]
        },
        {
            id: "meghalaya",
            name: "Meghalaya (Abode of Clouds)",
            state: "Meghalaya",
            region: "east",
            image: "images/dest-meghalaya.jpg",
            rating: "4.9",
            bestTime: "Oct – Apr",
            airport: "Umroi Shillong (SHL) / Guwahati (GAU - 120 km)",
            desc: "The wettest place on earth, featuring bio-engineered living root bridges, crystal-clear Dawki river waters, dramatic canyons, and mist-cloaked waterfalls.",
            experiences: [
                "Trek down to the double-decker Living Root Bridge in Nongriat",
                "Boat on the mirror-like transparent waters of Umngot River in Dawki",
                "Marvel at the roaring plunge of Nohkalikai Falls in Cherrapunji",
                "Explore the stalactites inside Mawsmai limestone cave"
            ],
            food: "Jadoh (rice & meat), Dohneiiong, Pumaloi, Meghalayan Honey",
            tags: ["living root bridges", "clouds", "waterfalls", "east", "nature", "northeast"]
        },
        {
            id: "mysore",
            name: "Mysuru (The Heritage City)",
            state: "Karnataka",
            region: "south",
            image: "images/dest-mysore.jpg",
            rating: "4.7",
            bestTime: "Oct – Mar",
            airport: "Mysore Airport (MYQ) / Bengaluru (BLR - 170 km)",
            desc: "The cultural capital of Karnataka, celebrated for the dazzling Indo-Saracenic Mysore Palace illuminated by 100,000 bulbs, sandalwood, and grand Dasara festivals.",
            experiences: [
                "Tour the stained glass and carved teakwood halls of Mysore Palace",
                "Climb Chamundi Hill to visit the 12th-century Chamundeshwari Temple",
                "Shop for GI-tagged Mysore Silk sarees and pure sandalwood oil",
                "Savor legendary melt-in-mouth Mysore Pak sweet at original shops"
            ],
            food: "Mysore Pak, Mysore Masala Dosa, Maddur Vada, Filter Coffee",
            tags: ["palace", "royal", "dasara", "silk", "sandalwood", "karnataka", "south"]
        }
    ];

    // =================================================================
    // 2. MONUMENTS DATASET (6 UNESCO WONDERS)
    // =================================================================
    const monumentsData = {
        "agra": {
            name: "The Taj Mahal",
            state: "Uttar Pradesh",
            region: "North India",
            image: "images/dest-agra.jpg",
            rating: "4.9 / 5.0",
            airport: "Agra Airport (AGR) / IGI New Delhi (200 km)",
            bestTime: "October – March (Closed on Fridays)",
            desc: "Recognized as the supreme triumph of Mughal symmetry and eternal devotion, this ivory-white marble mausoleum on the Yamuna river was commissioned by Emperor Shah Jahan in 1632 in memory of Empress Mumtaz Mahal. Over 20,000 artisans contributed to its pietra dura marble inlays.",
            experiences: [
                "Dawn sunrise viewing when marble subtly shifts from rose-gold to pure white",
                "Inspect intricate semiprecious lapis lazuli and jade floral inlays",
                "Visit the mirrored viewing vantage point across the river at Mehtab Bagh",
                "Explore the neighboring Red Sandstone Agra Fort royal chambers"
            ],
            food: "Authentic Agra Angoori Petha, Mughlai Chicken Jahangiri, Bedmi Poori"
        },
        "qutub": {
            name: "Qutub Minar Complex",
            state: "New Delhi",
            region: "North India",
            image: "images/heritage-qutub.jpg",
            rating: "4.8 / 5.0",
            airport: "Indira Gandhi International Airport, New Delhi (DEL)",
            bestTime: "October – March",
            desc: "At 72.5 meters, Qutub Minar is the tallest fluted brick minaret in the world, started in 1199 CE by Qutb-ud-din Aibak. The surrounding complex houses the enigmatic 4th-century rust-resistant Iron Pillar of Chandragupta II and the Quwwat-ul-Islam mosque.",
            experiences: [
                "Marvel at 800-year-old carved calligraphic bands and corbelled balconies",
                "Examine the 1,600-year-old metallurgical wonder: the rust-proof Iron Pillar",
                "Photograph the unfinished colossal base of Alai Minar",
                "Stroll through the tranquil tomb of Iltutmish with ornate geometrical stone screens"
            ],
            food: "Old Delhi Nihari, Chandni Chowk Paranthas, Daulat ki Chaat"
        },
        "konark": {
            name: "Konark Sun Temple",
            state: "Odisha",
            region: "East India",
            image: "images/heritage-konark.jpg",
            rating: "4.9 / 5.0",
            airport: "Biju Patnaik International Airport, Bhubaneswar (BBI - 65 km)",
            bestTime: "October – March",
            desc: "Conceived as a colossal stone chariot of Surya the Sun God, this 13th-century Kalinga marvel features 24 exquisitely carved stone wheels pulled by seven horses. The wheels function as precise sundials, calculating time accurate to minutes using the shadows of spokes.",
            experiences: [
                "Witness the first rays of dawn striking the temple sanctum gate",
                "Observe the Konark Classical Dance Festival held against the lit facade each December",
                "Visit nearby Chandrabhaga Beach, legendary site of sun worship and serene dunes",
                "Explore stone friezes showing everyday life, musicians, and celestial nymphs"
            ],
            food: "Chhena Poda (baked caramelized cheese sweet), Odia Dalma, Machha Besara"
        },
        "ellora": {
            name: "Ajanta & Ellora Caves (Kailasa Temple)",
            state: "Maharashtra",
            region: "West India",
            image: "images/heritage-ajanta.jpg",
            rating: "4.9 / 5.0",
            airport: "Chhatrapati Sambhajinagar Airport (IXU - 30 km)",
            bestTime: "November – March",
            desc: "The largest monolithic rock excavation on earth. Cave 16 (Kailasa Temple) at Ellora was carved top-down from a single volcanic basalt cliff, removing 200,000 tons of rock without modern machinery. Ajanta houses 2,000-year-old Buddhist tempera wall murals illustrating Jataka tales.",
            experiences: [
                "Marvel at the multi-story Kailasa monolithic temple complex",
                "View the glowing Bodhisattva Padmapani fresco in Ajanta Cave 1",
                "Explore the multi-story Buddhist monasteries carved directly into mountain cliffs",
                "Visit Daulatabad Fort and Bibi Ka Maqbara nearby"
            ],
            food: "Naan Qalia, Kolhapuri Misal Pav, Puran Poli, Solkadhi"
        },
        "hampi": {
            name: "Stone Chariot & Vijayanagara Ruins",
            state: "Karnataka",
            region: "South India",
            image: "images/dest-hampi.jpg",
            rating: "4.9 / 5.0",
            airport: "Hubballi Airport (HBX - 140 km) / Jindal Vidyanagar (VDY)",
            bestTime: "October – March",
            desc: "The shrine dedicated to Garuda inside the Vijaya Vittala Temple, set amidst the boulder-strewn landscape of the 14th-century Vijayanagara Empire. The chariot wheels were historically engineered to rotate on their granite axles.",
            experiences: [
                "Listen to the resonant musical pillars in the Vijaya Vittala Temple maha-mandapa",
                "Climb Matanga Hill for an unforgettable sunrise across the temple valley",
                "Ride across the Tungabhadra river in an authentic woven bamboo coracle",
                "Explore the Royal Enclosure and the stepped tank (Pushkarani)"
            ],
            food: "North Karnataka Jolada Rotti, Ennegai (stuffed brinjal), Mysore Filter Coffee"
        },
        "redfort": {
            name: "Red Fort Complex (Lal Qila)",
            state: "New Delhi",
            region: "North India",
            image: "images/heritage-redfort.jpg",
            rating: "4.8 / 5.0",
            airport: "Indira Gandhi International Airport, New Delhi (DEL)",
            bestTime: "October – March",
            desc: "The monumental red sandstone citadel built by Emperor Shah Jahan in 1648, representing the zenith of Mughal palace architecture and India's national independence symbolism, where the Prime Minister hoists the national flag on Independence Day.",
            experiences: [
                "Walk through the imposing Lahori Gate and the covered Chhatta Chowk bazaar",
                "Admire the inlaid marble pavilions of Diwan-i-Khas and Diwan-i-Aam",
                "Attend the evening Light and Sound Show narrating Delhi's history",
                "Cross the road into Chandni Chowk for legendary culinary explorations"
            ],
            food: "Chandni Chowk Rabri Jalebi, Paranthe Wali Gali paranthas, Kulfi Falooda"
        }
    };

    // =================================================================
    // 3. CULINARY, FESTIVALS & INITIATIVES DATASETS
    // =================================================================
    const culinaryDetails = {
        "biryani": {
            name: "Hyderabadi & Awadhi Dum Biryani",
            state: "Telangana & Uttar Pradesh",
            region: "Pan-India",
            image: "images/food-biryani.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Year-round culinary trail",
            airport: "Rajiv Gandhi International (HYD) / CCS Lucknow (LKO)",
            desc: "The crown jewel of Indian gastronomy. Long aged basmati rice layered with fragrant spices, saffron-infused milk, caramelized onions, and slow-cooked in sealed earthen handis over charcoal embers (dum pukht style).",
            experiences: [
                "Taste royal Dum Biryani in historic Hyderabad Old City near Charminar",
                "Compare Awadhi Dum Biryani in Chowk, Lucknow",
                "Savor spicy accompaniments: Mirchi ka Salan and creamy Burani Raita"
            ],
            food: "Double ka Meetha, Shahi Tukda, Irani Chai with Osmania Biscuits"
        },
        "dosa": {
            name: "Mysore Masala Dosa & South Indian Breakfasts",
            state: "Karnataka & Tamil Nadu",
            region: "South India",
            image: "images/food-dosa.jpg",
            rating: "4.9 / 5.0",
            bestTime: "Year-round morning tradition",
            airport: "Bengaluru (BLR) / Chennai (MAA)",
            desc: "Crisp, paper-thin golden crepes fermented from aged rice and black lentils, lined with aromatic spicy red garlic chutney and stuffed with seasoned potato masala.",
            experiences: [
                "Enjoy piping hot dosas at historic heritage tiffin rooms in Bengaluru & Mysuru",
                "Pair with fresh wet coconut chutney, spicy tomato chutney, and piping hot sambar",
                "Complete the breakfast ritual with frothy South Indian Filter Kaapi"
            ],
            food: "Idli Vada, Rava Kesari, Medu Vada, Filter Kaapi"
        },
        "thali": {
            name: "Royal Rajasthani & Gujarati Heritage Thali",
            state: "Rajasthan & Gujarat",
            region: "West India",
            image: "images/food-thali.jpg",
            rating: "4.9 / 5.0",
            bestTime: "October – March",
            airport: "Jaipur (JAI) / Ahmedabad (AMD)",
            desc: "The ultimate Indian culinary experience: an opulent circular silver or brass platter featuring 20+ dishes carefully balanced according to Ayurvedic principles with sweet, salty, bitter, and spiced elements.",
            experiences: [
                "Savor Dal Baati Churma soaked in aromatic desi cow ghee",
                "Enjoy desert delicacies like Ker Sangri, Gatte ki Sabzi, and Bajra Roti",
                "Sample Gujarati Dal, Kadhi, Thepla, and Khandvi"
            ],
            food: "Chhach (spiced buttermilk), Ghewar, Shrikhand, Malpua"
        },
        "chaat": {
            name: "Legendary Street Chaat of Banaras & Delhi",
            state: "Uttar Pradesh & Delhi",
            region: "North India",
            image: "images/food-chaat.jpg",
            rating: "4.9 / 5.0",
            bestTime: "October – March evenings",
            airport: "Delhi (DEL) / Varanasi (VNS)",
            desc: "An explosion of flavors, textures, and temperatures: crisp fried puris, whipped curd, tangy tamarind chutney, spicy green mint water, and fresh pomegranate kernels.",
            experiences: [
                "Crush crisp Pani Puris (Golgappas) bursting with spicy cumin water in Old Delhi",
                "Taste warm Tamatar Chaat and crispy Palak Patta Chaat at Varanasi ghats",
                "Try chilled Dahi Bhallas soaked in sweet curd and roasted cumin"
            ],
            food: "Aloo Tikki, Papdi Chaat, Sev Puri, Raj Kachori"
        },
        "sweets": {
            name: "Traditional Indian Mithai & Desserts",
            state: "Pan-India • Bengal & North",
            region: "Pan-India",
            image: "images/food-sweets.jpg",
            rating: "4.9 / 5.0",
            bestTime: "Festivals & celebrations year-round",
            airport: "Kolkata (CCU) / Delhi (DEL)",
            desc: "India's centuries-old confectionery tradition combining reduced whole milk (khoya), saffron, cardamom, pistachios, and silver leaf into delicate artisan sweets.",
            experiences: [
                "Sample authentic GI-tagged spongy Bengali Rasgulla and Sandesh in Kolkata",
                "Enjoy warm Gulab Jamuns soaked in rose-cardamom sugar syrup",
                "Taste rich melt-in-the-mouth Mysore Pak and crisp saffron Jalebis with Rabri"
            ],
            food: "Rasmalai, Kaju Katli, Motichoor Ladoo, Kheer"
        }
    };

    const festivalDetails = {
        "diwali": {
            name: "Diwali – The Festival of Lights",
            state: "Pan-India",
            region: "All India",
            image: "images/fest-diwali.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Autumn (October – November)",
            airport: "Varanasi (VNS) / Jaipur (JAI) / Delhi (DEL)",
            desc: "Signifying the triumph of light over darkness and good over evil. Across the subcontinent, millions of terracotta oil lamps (diyas) illuminate riverside ghats, homes, and public monuments in a sea of golden warmth.",
            experiences: [
                "Witness Dev Deepawali at Varanasi, where 1,000,000 diyas line 84 river ghats",
                "Watch fireworks illuminate the sky over Amer Fort in Jaipur",
                "Experience vibrant sweet-sharing and family gatherings across India"
            ],
            food: "Gujiya, Kaju Katli, Mathri, Gulab Jamun"
        },
        "holi": {
            name: "Holi – The Festival of Colors",
            state: "Uttar Pradesh & Rajasthan",
            region: "North India",
            image: "images/fest-holi.jpg",
            rating: "4.9 / 5.0",
            bestTime: "Spring (March)",
            airport: "Delhi (DEL) / Agra (AGR) / Jaipur (JAI)",
            desc: "The world's most joyful celebration of spring and love. Entire communities gather to shower natural colored powders (gulal), dance to rhythmic dhol beats, and embrace one another in joy.",
            experiences: [
                "Participate in the famous Lathmar Holi in Barsana & Nandgaon near Mathura",
                "Experience the royal court Holi celebrations in Udaipur and Jaipur palaces",
                "Sip traditional saffron Thandai garnished with rose petals and almonds"
            ],
            food: "Thandai, Puran Poli, Gujiya, Dahi Vada"
        },
        "durgapuja": {
            name: "Durga Puja – Carnival of Art & Devotion",
            state: "West Bengal",
            region: "East India",
            image: "images/fest-durga-puja.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Autumn (September – October)",
            airport: "Netaji Subhash Chandra Bose International (CCU)",
            desc: "Inscribed on UNESCO's Intangible Cultural Heritage of Humanity list. For five days, Kolkata transforms into the world's largest open-air art installation with thousands of themed decorative pandals.",
            experiences: [
                "Pandal-hopping by night among award-winning architectural installations",
                "Witness the thunderous Dhunuchi dance performed to traditional dhak drums",
                "Experience the grand immersion procession (Sindoor Khela) on Bijoya Dashami"
            ],
            food: "Kolkata Kathi Rolls, Bhog Khichuri, Rosogolla, Mishti Doi"
        },
        "pushkar": {
            name: "Pushkar Camel Fair & Desert Gathering",
            state: "Rajasthan",
            region: "West India",
            image: "images/fest-pushkar.jpg",
            rating: "4.8 / 5.0",
            bestTime: "Kartik Purnima (November)",
            airport: "Jaipur International Airport (JAI - 140 km)",
            desc: "One of the world's largest livestock gatherings, bringing together 50,000 decorated camels, Rajasthani folk dancers, turban contests, and hot-air ballooning against the backdrop of sacred Pushkar Lake.",
            experiences: [
                "Photograph sunrise over desert dunes covered in camel caravans",
                "Take a tethered hot air balloon ride over the fairgrounds and Thar desert",
                "Witness folk music performances with morchang, sarangi, and dholak"
            ],
            food: "Dal Baati Churma, Malpua from historic Halwai Gali, Rabri"
        },
        "kathakali": {
            name: "Kathakali & Classical Temple Arts",
            state: "Kerala",
            region: "South India",
            image: "images/fest-kathakali.jpg",
            rating: "4.9 / 5.0",
            bestTime: "Year-Round Evenings",
            airport: "Cochin International Airport (COK)",
            desc: "A 300-year-old classical Indian dance-drama originating from Kerala, famed for elaborate facial makeup (Chutti), towering gilded headgear, stylized gestures (mudras), and dramatic eye expressions.",
            experiences: [
                "Watch the intricate 2-hour live facial makeup application before the performance",
                "Experience the dramatic stories from the Mahabharata and Ramayana",
                "Attend a demonstration of the 24 basic mudras and navarasas (facial emotions)"
            ],
            food: "Kerala Banana Chips, Puttu with Kadala Curry, Tender Coconut Water"
        }
    };

    const initiativeDetails = {
        "swadesh": {
            name: "Swadesh Darshan 2.0 Initiative",
            state: "Pan-India",
            region: "Ministry Initiative",
            image: "images/initiative-swadesh.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Operational Nationwide",
            airport: "Available across all major transport hubs",
            desc: "A flagship program of the Ministry of Tourism, Government of India, focused on developing sustainable and responsible tourist destinations across 55 tourist circuits. It enhances tourist facilities, digital interpretation centers, and heritage conservation.",
            experiences: [
                "Visit 55 developed theme-based tourism circuits across India",
                "Experience enhanced tourist facilitation centers with multilingual guides",
                "Enjoy upgraded connectivity through highway wayside amenities and electric mobility"
            ],
            food: "Regional cuisine stalls certified under the Clean Street Food Hubs program"
        },
        "prashad": {
            name: "PRASHAD Spiritual Scheme",
            state: "Pilgrimage Centers Nationwide",
            region: "Ministry Initiative",
            image: "images/initiative-prashad.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Open Year-Round",
            airport: "Serving Kedarnath, Varanasi, Amritsar, Puri, Somnath, and Ajmer",
            desc: "The National Mission on Pilgrimage Rejuvenation and Spiritual, Heritage Augmentation Drive (PRASHAD) focuses on holistic development of pilgrimage sites with improved queue management, sanitation, illumination, and accessible pilgrim amenities.",
            experiences: [
                "Enhanced walkways, ropeways, and universal accessibility at sacred shrines",
                "Sound and light shows illuminating sacred history and philosophies",
                "Clean drinking water, medical kiosks, and organized bathing ghats"
            ],
            food: "Traditional temple prasad prepared in modern hygienic kitchens"
        },
        "dekho": {
            name: "Dekho Apna Desh Campaign",
            state: "All 28 States & 8 Union Territories",
            region: "National Movement",
            image: "images/initiative-dekho.jpg",
            rating: "5.0 / 5.0",
            bestTime: "Active Year-Round",
            airport: "Connecting all regional airports under the UDAN scheme",
            desc: "A nationwide initiative encouraging citizens and international travelers to explore the immense cultural, natural, and geographic diversity of India, fostering domestic tourism, local handicraft artisans, and eco-friendly homestays.",
            experiences: [
                "Pledge to visit at least 15 destinations across India",
                "Discover hidden offbeat gems, rural villages, and tribal art traditions",
                "Support local craftspeople and community-based eco-tourism lodges"
            ],
            food: "Diverse organic indigenous farm-to-table traditions from Ladakh to Kerala"
        }
    };

    // =================================================================
    // 4. HERO CAROUSEL ENGINE (Auto-Cycle, Controls, Indicators)
    // =================================================================
    const slides = document.querySelectorAll(".carousel-slide");
    const indicatorDots = document.querySelectorAll(".indicator-dot");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    const heroSection = document.getElementById("heroCarousel");
    let currentSlide = 0;
    let autoSlideInterval = null;

    function goToSlide(index) {
        if (slides.length === 0) return;
        slides.forEach(s => s.classList.remove("active"));
        indicatorDots.forEach(d => d.classList.remove("active"));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        if (indicatorDots[currentSlide]) {
            indicatorDots[currentSlide].classList.add("active");
        }
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5500);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoSlide(); });

    indicatorDots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            goToSlide(idx);
            startAutoSlide();
        });
    });

    if (heroSection) {
        heroSection.addEventListener("mouseenter", stopAutoSlide);
        heroSection.addEventListener("mouseleave", startAutoSlide);
    }
    startAutoSlide();

    // Slide buttons: "Explore Monument" & "View Circuit"
    document.querySelectorAll(".view-slide-guide").forEach(btn => {
        btn.addEventListener("click", () => {
            const slideKey = btn.getAttribute("data-slide");
            const found = destinations.find(d => d.id === slideKey);
            if (found) openDestinationModal(found);
            else if (monumentsData[slideKey]) openDestinationModal(monumentsData[slideKey]);
        });
    });

    document.querySelectorAll(".slide-circuit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const filterRegion = btn.getAttribute("data-filter");
            currentFilter = filterRegion;
            updateCategoryPills();
            renderDestinations();
            const tripsSection = document.querySelector("#popularTrips");
            if (tripsSection) tripsSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // =================================================================
    // 5. ACCESSIBILITY UTILITIES (Font Resizer, Contrast, Language)
    // =================================================================
    const fontDecrease = document.getElementById("fontDecrease");
    const fontReset = document.getElementById("fontReset");
    const fontIncrease = document.getElementById("fontIncrease");
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");
    const langToggle = document.getElementById("langToggle");
    const langLabel = document.getElementById("langLabel");

    // Font Resizing
    function setFontSize(sizeClass) {
        document.body.classList.remove("font-sm", "font-md", "font-lg");
        document.body.classList.add(sizeClass);
        [fontDecrease, fontReset, fontIncrease].forEach(b => b.classList.remove("active"));
        if (sizeClass === "font-sm" && fontDecrease) fontDecrease.classList.add("active");
        if (sizeClass === "font-md" && fontReset) fontReset.classList.add("active");
        if (sizeClass === "font-lg" && fontIncrease) fontIncrease.classList.add("active");
    }

    if (fontDecrease) fontDecrease.addEventListener("click", () => setFontSize("font-sm"));
    if (fontReset) fontReset.addEventListener("click", () => setFontSize("font-md"));
    if (fontIncrease) fontIncrease.addEventListener("click", () => setFontSize("font-lg"));

    // High Contrast Dark Mode
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const html = document.documentElement;
            const isDark = html.getAttribute("data-theme") === "dark";
            const nextTheme = isDark ? "light" : "dark";
            html.setAttribute("data-theme", nextTheme);
            themeLabel.textContent = nextTheme === "dark" ? "Light Mode" : "Dark Mode";
            showToast(nextTheme === "dark" ? "🌙 High Contrast Dark Theme Activated" : "☀️ Standard Light Theme Activated");
        });
    }

    // Bilingual Language Translation Engine (English <-> Hindi)
    let currentLang = "en";
    const i18nDictionary = {
        en: {
            deptHi: "भारत सरकार",
            deptTitle: "पर्यटन मंत्रालय",
            deptEn: "MINISTRY OF TOURISM",
            searchPlaceholder: "खोजें / Search destinations, circuits, heritage...",
            navCta: "Explore Tours",
            tickerTitle: "घोषणाएं / News",
            explorerBadge: "DISCOVER INCREDIBLE INDIA",
            explorerTitle: "Popular Trips & Tourist Destinations",
            explorerSubtitle: "Filter by region or search across India's premier tourist destinations, hill stations, coastal beaches, and cultural hubs.",
            heritageTitle: "Architectural Wonders of India",
            heritageSubtitle: "42 UNESCO World Heritage Sites preserving thousands of years of stone carving, celestial mathematics, and royal dynastic legacies.",
            cuisineTitle: "Regional Gastronomy & Flavors of India",
            cuisineSubtitle: "From slow-cooked royal Awadhi handis to coastal Malabar spices, crisp fermentations, and traditional vegetarian feasts.",
            festivalsTitle: "Festivals & Cultural Celebrations",
            festivalsSubtitle: "Experience the vibrant communal harmony of India's world-famous festivals of lights, colors, art, and classical dances.",
            galleryTitle: "Travel Experiences & Moments Gallery",
            gallerySubtitle: "A curated visual tapestry of India's world-famous mountain railways, wildlife reserves, sacred rivers, and tranquil backwaters.",
            plannerTitle: "Interactive India Travel Planner",
            plannerSubtitle: "Select your preferred travel season, companion style, and travel vibe to generate a tailored logistics circuit.",
            schemesTitle: "Tourism Initiatives & Traveler Essentials",
            schemesSubtitle: "Key schemes by the Ministry of Tourism, digital payments guidance, and high-speed railway connectivity."
        },
        hi: {
            deptHi: "भारत सरकार",
            deptTitle: "पर्यटन मंत्रालय",
            deptEn: "GOVERNMENT OF INDIA",
            searchPlaceholder: "पर्यटन स्थल, धरोहर एवं यात्रा मार्ग खोजें...",
            navCta: "यात्राएं देखें",
            tickerTitle: "ताज़ा समाचार",
            explorerBadge: "अतुल्य भारत दर्शन",
            explorerTitle: "लोकप्रिय पर्यटन स्थल एवं यात्रा मार्ग",
            explorerSubtitle: "क्षेत्र के अनुसार खोजें अथवा भारत के प्रमुख पर्यटन स्थलों, पर्वतीय स्थानों और समुद्र तटों का अन्वेषण करें।",
            heritageTitle: "भारत के स्थापत्य एवं धरोहर चमत्कार",
            heritageSubtitle: "42 यूनेस्को विश्व धरोहर स्थल जो सहस्राब्दियों की पाषाण कला, खगोलीय विज्ञान और राजसी वैभव को संजोए हुए हैं।",
            cuisineTitle: "क्षेत्रीय व्यंजन एवं खान-पान संस्कृति",
            cuisineSubtitle: "शाही अवधी हांडी से लेकर तटीय मालाबार मसालों और पारंपरिक शाकाहारी थाली तक का स्वाद लें।",
            festivalsTitle: "उत्सव, मेले एवं जीवंत सांस्कृतिक परंपराएं",
            festivalsSubtitle: "प्रकाश, रंग, कला और शास्त्रीय नृत्यों के विश्व-प्रसिद्ध भारतीय त्योहारों का अनुभव करें।",
            galleryTitle: "यात्रा अनुभव एवं चित्र दीर्घा",
            gallerySubtitle: "पर्वतीय रेल, वन्यजीव अभयारण्य, पावन नदियां और शांत केरल बैकवाटर्स की मनमोहक दृश्य दीर्घा।",
            plannerTitle: "इंटरैक्टिव यात्रा योजनाकार",
            plannerSubtitle: "अपनी यात्रा का मौसम, रुचि और अवधि चुनकर अपनी अनुकूलित यात्रा योजना तुरंत तैयार करें।",
            schemesTitle: "सरकारी योजनाएं एवं यात्रा दिशा-निर्देश",
            schemesSubtitle: "पर्यटन मंत्रालय की प्रमुख योजनाएं, डिजिटल भुगतान गाइड और वंदे भारत एक्सप्रेस रेल कनेक्टिविटी।"
        }
    };

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = (currentLang === "en") ? "hi" : "en";
            langLabel.textContent = (currentLang === "en") ? "हिंदी" : "English";

            const dict = i18nDictionary[currentLang];
            const setTxt = (id, txt) => {
                const el = document.getElementById(id);
                if (el) el.textContent = txt;
            };

            setTxt("headerDeptHi", dict.deptHi);
            setTxt("headerTitleHi", dict.deptTitle);
            setTxt("headerTitleEn", dict.deptEn);
            setTxt("navCtaText", dict.navCta);
            setTxt("tickerTitle", dict.tickerTitle);
            setTxt("explorerBadge", dict.explorerBadge);
            setTxt("explorerTitle", dict.explorerTitle);
            setTxt("explorerSubtitle", dict.explorerSubtitle);
            setTxt("heritageTitle", dict.heritageTitle);
            setTxt("heritageSubtitle", dict.heritageSubtitle);
            setTxt("cuisineTitle", dict.cuisineTitle);
            setTxt("cuisineSubtitle", dict.cuisineSubtitle);
            setTxt("festivalsTitle", dict.festivalsTitle);
            setTxt("festivalsSubtitle", dict.festivalsSubtitle);
            setTxt("galleryTitle", dict.galleryTitle);
            setTxt("gallerySubtitle", dict.gallerySubtitle);
            setTxt("plannerTitle", dict.plannerTitle);
            setTxt("plannerSubtitle", dict.plannerSubtitle);
            setTxt("schemesTitle", dict.schemesTitle);
            setTxt("schemesSubtitle", dict.schemesSubtitle);

            const searchInput = document.getElementById("topNavSearch");
            if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

            // Nav links translation
            document.querySelectorAll(".gov-nav-link .nav-text").forEach(span => {
                const text = span.getAttribute(`data-${currentLang}`);
                if (text) span.textContent = text;
            });

            showToast(currentLang === "hi" ? "🇮🇳 भाषा: हिंदी में परिवर्तित" : "🌐 Language: Switched to English");
        });
    }

    // =================================================================
    // 6. POPULAR TRIPS SEARCH & FILTER ENGINE
    // =================================================================
    const destinationsGrid = document.getElementById("destinationsGrid");
    const resultsCount = document.getElementById("resultsCount");
    const noResults = document.getElementById("noResults");
    const destinationSearch = document.getElementById("destinationSearch");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const categoryChips = document.querySelectorAll("#categoryPillsBar .gov-chip");
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    const topNavSearch = document.getElementById("topNavSearch");
    const topNavSearchBtn = document.getElementById("topNavSearchBtn");
    const navExploreBtn = document.getElementById("navExploreBtn");

    let currentFilter = "all";
    let searchQuery = "";
    let savedBookmarks = new Set();

    // Load saved bookmarks from localStorage
    try {
        const saved = JSON.parse(localStorage.getItem("indiaTourismBookmarks") || "[]");
        saved.forEach(id => savedBookmarks.add(id));
    } catch (e) {}

    function updateCategoryPills() {
        categoryChips.forEach(chip => {
            const f = chip.getAttribute("data-filter");
            chip.classList.toggle("active", f === currentFilter);
        });
    }

    function renderDestinations() {
        if (!destinationsGrid) return;
        const query = searchQuery.trim().toLowerCase();

        const filtered = destinations.filter(dest => {
            const matchesCategory = (currentFilter === "all") || (dest.region === currentFilter);
            const matchesQuery = !query ||
                dest.name.toLowerCase().includes(query) ||
                dest.state.toLowerCase().includes(query) ||
                dest.desc.toLowerCase().includes(query) ||
                dest.food.toLowerCase().includes(query) ||
                dest.tags.some(t => t.toLowerCase().includes(query));

            return matchesCategory && matchesQuery;
        });

        if (resultsCount) {
            resultsCount.textContent = `Showing ${filtered.length} of ${destinations.length} verified tours`;
        }

        if (filtered.length === 0) {
            destinationsGrid.innerHTML = "";
            if (noResults) noResults.classList.remove("hidden");
            return;
        }

        if (noResults) noResults.classList.add("hidden");

        destinationsGrid.innerHTML = filtered.map(dest => {
            const isFav = savedBookmarks.has(dest.id);
            const favIcon = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
            const zoneName = getZoneName(dest.region);

            return `
                <div class="ux4g-card tour-card" data-dest-id="${dest.id}">
                    <div class="tour-card-media">
                        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                        <span class="tour-zone-badge">${zoneName}</span>
                        <button type="button" class="tour-fav-btn" data-fav-id="${dest.id}" title="Wishlist" aria-label="Add to wishlist">
                            <i class="${favIcon}"></i>
                        </button>
                    </div>
                    <div class="tour-card-body">
                        <div class="tour-header-row">
                            <h3>${dest.name}</h3>
                            <span class="tour-rating"><i class="fa-solid fa-star"></i> ${dest.rating}</span>
                        </div>
                        <div class="tour-state-sub">
                            <i class="fa-solid fa-location-dot"></i> ${dest.state}
                        </div>
                        <p class="tour-desc">${dest.desc}</p>
                        <div class="tour-meta-row">
                            <span><i class="fa-regular fa-calendar"></i> Season: <strong>${dest.bestTime}</strong></span>
                            <span><i class="fa-solid fa-utensils"></i> Cuisine Trail</span>
                        </div>
                        <div class="tour-actions-row">
                            <button type="button" class="ux4g-btn ux4g-btn-primary ux4g-btn-s view-tour-details" data-id="${dest.id}">
                                <i class="fa-solid fa-compass"></i> View Tour
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        attachCardListeners();
    }

    function getZoneName(region) {
        const names = {
            "all": "All India",
            "north": "North India",
            "south": "South India",
            "west": "West India",
            "east": "East & NE",
            "himalayas": "Himalayas",
            "beaches": "Coastal & Beach"
        };
        return names[region] || "Incredible India";
    }

    function attachCardListeners() {
        document.querySelectorAll(".view-tour-details").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = btn.getAttribute("data-id");
                const found = destinations.find(d => d.id === id);
                if (found) openDestinationModal(found);
            });
        });

        document.querySelectorAll(".tour-card").forEach(card => {
            card.addEventListener("click", (e) => {
                if (e.target.closest(".tour-fav-btn")) return;
                const id = card.getAttribute("data-dest-id");
                const found = destinations.find(d => d.id === id);
                if (found) openDestinationModal(found);
            });
        });

        document.querySelectorAll(".tour-fav-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = btn.getAttribute("data-fav-id");
                const dest = destinations.find(d => d.id === id);
                const name = dest ? dest.name : "Tour";

                if (savedBookmarks.has(id)) {
                    savedBookmarks.delete(id);
                    btn.querySelector("i").className = "fa-regular fa-heart";
                    showToast(`Removed ${name} from travel wishlist`);
                } else {
                    savedBookmarks.add(id);
                    btn.querySelector("i").className = "fa-solid fa-heart";
                    showToast(`❤️ Added ${name} to your travel wishlist!`);
                }

                try {
                    localStorage.setItem("indiaTourismBookmarks", JSON.stringify([...savedBookmarks]));
                } catch (e) {}
            });
        });
    }

    // Category chips click
    categoryChips.forEach(chip => {
        chip.addEventListener("click", () => {
            currentFilter = chip.getAttribute("data-filter");
            updateCategoryPills();
            renderDestinations();
        });
    });

    // In-section search
    if (destinationSearch) {
        destinationSearch.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? "block" : "none";
            renderDestinations();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            destinationSearch.value = "";
            searchQuery = "";
            clearSearchBtn.style.display = "none";
            renderDestinations();
            destinationSearch.focus();
        });
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            if (destinationSearch) destinationSearch.value = "";
            searchQuery = "";
            if (clearSearchBtn) clearSearchBtn.style.display = "none";
            currentFilter = "all";
            updateCategoryPills();
            renderDestinations();
        });
    }

    // Top Navigation Search bar
    function executeTopSearch() {
        const query = (topNavSearch ? topNavSearch.value.trim() : "");
        if (destinationSearch) destinationSearch.value = query;
        searchQuery = query;
        currentFilter = "all";
        updateCategoryPills();
        if (clearSearchBtn) clearSearchBtn.style.display = query ? "block" : "none";
        renderDestinations();
        const tripsEl = document.querySelector("#popularTrips");
        if (tripsEl) tripsEl.scrollIntoView({ behavior: "smooth" });
    }

    if (topNavSearchBtn) topNavSearchBtn.addEventListener("click", executeTopSearch);
    if (topNavSearch) {
        topNavSearch.addEventListener("keydown", (e) => {
            if (e.key === "Enter") executeTopSearch();
        });
    }

    if (navExploreBtn) {
        navExploreBtn.addEventListener("click", () => {
            const el = document.querySelector("#popularTrips");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        });
    }

    // =================================================================
    // 7. MONUMENT, FOOD, FESTIVAL & INITIATIVE BUTTONS
    // =================================================================
    document.querySelectorAll(".monument-detail-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-dest-id");
            if (monumentsData[id]) {
                openDestinationModal(monumentsData[id]);
            } else {
                const found = destinations.find(d => d.id === id);
                if (found) openDestinationModal(found);
            }
        });
    });

    document.querySelectorAll(".food-action-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-food-id");
            if (culinaryDetails[id]) {
                openDestinationModal(culinaryDetails[id]);
            }
        });
    });

    document.querySelectorAll(".fest-action-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-fest");
            if (festivalDetails[id]) {
                openDestinationModal(festivalDetails[id]);
            }
        });
    });

    document.querySelectorAll(".initiative-btn, .initiative-card").forEach(el => {
        el.addEventListener("click", (e) => {
            const id = el.getAttribute("data-initiative");
            if (initiativeDetails[id]) {
                openDestinationModal(initiativeDetails[id]);
            }
        });
    });

    // UPI & Climate Guides
    const upiGuideBtn = document.getElementById("upiGuideBtn");
    if (upiGuideBtn) {
        upiGuideBtn.addEventListener("click", () => {
            openDestinationModal({
                name: "UPI One World: Cashless Travel Across India",
                state: "National Digital Rail (NPCI)",
                region: "Tourist Facility",
                image: "images/scheme-upi.png",
                rating: "5.0 / 5.0",
                bestTime: "Available 24x7 Across All States",
                airport: "Airports: Delhi, Mumbai, Bengaluru, Hyderabad, Chennai",
                desc: "Unified Payments Interface (UPI) is the world's most popular instant mobile payment standard. International tourists visiting India can obtain a 'UPI One World' prepaid wallet at major international airport arrival terminals, linked to their foreign passport. It enables immediate scanning and payment at millions of street vendors, cafes, monuments, and transport services without handling cash.",
                experiences: [
                    "Download and activate UPI One World at designated airport kiosks upon arrival",
                    "Scan any standard QR code at street food stalls, auto-rickshaws, and heritage bazaars",
                    "View transparent real-time exchange rates and instant payment notifications",
                    "Surplus wallet balances are smoothly refunded to original payment cards upon departure"
                ],
                food: "Accepted at 100% of street chaat corners, restaurants, and royal thali dining halls"
            });
        });
    }

    const climateGuideBtn = document.getElementById("climateGuideBtn");
    if (climateGuideBtn) {
        climateGuideBtn.addEventListener("click", () => {
            openDestinationModal({
                name: "India Weather & Seasonal Travel Advisory",
                state: "Pan-India Climate Matrix",
                region: "Travel Essentials",
                image: "images/scheme-season.jpg",
                rating: "4.9 / 5.0",
                bestTime: "October – March (Plains & Coastal) / April – June (Himalayas)",
                airport: "Year-Round Flight Operations",
                desc: "India features diverse climate zones ranging from tropical beaches to alpine trans-Himalayan peaks. Choosing the right season ensures optimal comfort, festivals, and sightseeing.",
                experiences: [
                    "Winter (October – March): Ideal for Rajasthan deserts, Agra, Varanasi, and South Indian temples (15°C – 28°C)",
                    "Summer (April – June): Perfect for high-altitude trekking in Ladakh, Kashmir, Dalhousie, and Dharamsala",
                    "Monsoon (July – September): Breathtaking for lush greenery, roaring waterfalls, and Ayurvedic rejuvenation in Kerala and Meghalaya",
                    "Packing advice: Lightweight cotton for plains; warm fleece and thermal layers for Himalayan hill stations"
                ],
                food: "Enjoy seasonal treats: fresh roasted corn in monsoon, hot jalebis in winter, tender coconuts in summer"
            });
        });
    }

    // =================================================================
    // 8. INTERACTIVE GALLERY & LIGHTBOX ENGINE
    // =================================================================
    const galleryChips = document.querySelectorAll(".gallery-chip");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxDesc = document.getElementById("lightboxDesc");
    const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

    galleryChips.forEach(chip => {
        chip.addEventListener("click", () => {
            galleryChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            const filter = chip.getAttribute("data-gallery-filter");

            galleryItems.forEach(item => {
                const cat = item.getAttribute("data-category");
                if (filter === "all" || cat === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    function openLightbox(imgSrc, title, desc) {
        if (!lightboxModal) return;
        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;

        lightboxModal.classList.add("active");
        lightboxModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove("active");
        lightboxModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-zoom-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const src = btn.getAttribute("data-img");
            const title = btn.getAttribute("data-title");
            const desc = btn.getAttribute("data-desc");
            openLightbox(src, title, desc);
        });
    });

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const btn = item.querySelector(".gallery-zoom-btn");
            if (btn) {
                const src = btn.getAttribute("data-img");
                const title = btn.getAttribute("data-title");
                const desc = btn.getAttribute("data-desc");
                openLightbox(src, title, desc);
            }
        });
    });

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    // =================================================================
    // 9. MODAL DESTINATION GUIDE (UX4G Accessible Dialog)
    // =================================================================
    const modalBackdrop = document.getElementById("destModalBackdrop");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");
    const modalDestImg = document.getElementById("modalDestImg");
    const modalDestRegion = document.getElementById("modalDestRegion");
    const modalDestTitle = document.getElementById("modalDestTitle");
    const modalDestState = document.getElementById("modalDestState");
    const modalDestBestTime = document.getElementById("modalDestBestTime");
    const modalDestAirport = document.getElementById("modalDestAirport");
    const modalDestRating = document.getElementById("modalDestRating");
    const modalDestOverview = document.getElementById("modalDestOverview");
    const modalDestExperiences = document.getElementById("modalDestExperiences");
    const modalDestFood = document.getElementById("modalDestFood");
    const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
    let activeModalDest = null;

    function openDestinationModal(data) {
        if (!data || !modalBackdrop) return;
        activeModalDest = data;

        modalDestImg.src = data.image;
        modalDestImg.alt = data.name;
        modalDestRegion.textContent = getZoneName(data.region);
        modalDestTitle.textContent = data.name;
        modalDestState.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.state}, India`;
        modalDestBestTime.textContent = data.bestTime;
        modalDestAirport.textContent = data.airport;
        modalDestRating.textContent = `${data.rating} / 5.0`;
        modalDestOverview.textContent = data.desc;
        modalDestExperiences.innerHTML = (data.experiences || []).map(ex => `<li>${ex}</li>`).join("");
        modalDestFood.textContent = data.food || "Delicious regional delicacies and traditional sweets.";

        const id = data.id || data.name;
        const isFav = savedBookmarks.has(id);
        modalBookmarkBtn.innerHTML = isFav 
            ? `<i class="fa-solid fa-bookmark"></i> Saved in Wishlist` 
            : `<i class="fa-regular fa-bookmark"></i> Bookmark Tour`;

        modalBackdrop.classList.add("active");
        modalBackdrop.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove("active");
        modalBackdrop.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (modalCloseActionBtn) modalCloseActionBtn.addEventListener("click", closeModal);
    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (modalBackdrop && modalBackdrop.classList.contains("active")) closeModal();
            if (lightboxModal && lightboxModal.classList.contains("active")) closeLightbox();
        }
    });

    if (modalBookmarkBtn) {
        modalBookmarkBtn.addEventListener("click", () => {
            if (!activeModalDest) return;
            const id = activeModalDest.id || activeModalDest.name;
            if (savedBookmarks.has(id)) {
                savedBookmarks.delete(id);
                modalBookmarkBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> Bookmark Tour`;
                showToast("Removed from travel wishlist");
            } else {
                savedBookmarks.add(id);
                modalBookmarkBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Saved in Wishlist`;
                showToast("Added to your travel wishlist!");
            }
            try {
                localStorage.setItem("indiaTourismBookmarks", JSON.stringify([...savedBookmarks]));
            } catch (e) {}
            renderDestinations();
        });
    }

    // =================================================================
    // 10. SMART TRIP PLANNER LOGISTICS ENGINE
    // =================================================================
    const plannerCircuits = {
        "winter-heritage": {
            badge: "Imperial Heritage Circuit",
            title: "Royal Golden Triangle & Desert Fortresses",
            subtitle: "Delhi • Agra (Taj Mahal) • Jaipur • Udaipur",
            route: "Fly into New Delhi → Gatimaan Express to Agra → Drive to Jaipur → Express Train to Udaipur City of Lakes",
            climate: "October to March: Crisp sunny days (16°C – 25°C), cool breezy evenings",
            budget: "₹4,000 - ₹9,500 ($50 - $115 USD) per day with royal haveli stays",
            highlight: "Dawn sunrise view of Taj Mahal followed by private boat ride on Lake Pichola, Udaipur.",
            filterTag: "north"
        },
        "winter-spiritual": {
            badge: "Sacred Rivers & Enlightenment",
            title: "The Eternal Ghats & Golden Sanctum Tour",
            subtitle: "Varanasi • Prayagraj • Sarnath • Amritsar",
            route: "Vande Bharat Express: Delhi → Varanasi (Ganga Aarti) → Amritsar Golden Temple",
            climate: "November to February: Cool winter air (12°C – 22°C), sacred morning mist",
            budget: "₹2,500 - ₹5,500 ($30 - $65 USD) per day",
            highlight: "Ganga Aarti brass fire ceremony and midnight sacred hymns at Harmandir Sahib.",
            filterTag: "north"
        },
        "winter-nature": {
            badge: "Tropical Serenity Circuit",
            title: "God's Own Country & Spice Trail",
            subtitle: "Kochi • Munnar Tea Hills • Thekkady Wildlife • Alleppey Backwaters",
            route: "Arrive at Cochin International → Scenic drive to Munnar → Houseboat at Alleppey",
            climate: "October to March: Mild tropical warmth (22°C – 30°C) with gentle ocean breeze",
            budget: "₹4,500 - ₹8,000 ($55 - $95 USD) per day with luxury houseboat stay",
            highlight: "Sleeping under the stars aboard a traditional thatched houseboat floating on Alleppey backwaters.",
            filterTag: "south"
        },
        "summer-adventure": {
            badge: "High Altitude Expedition",
            title: "The Great Trans-Himalayan Odyssey",
            subtitle: "Leh • Khardung La Pass • Nubra Valley • Pangong Tso Lake",
            route: "Fly into Leh (acclimatize 48 hrs) → Nubra Valley via world's highest passes → Pangong Lake",
            climate: "May to September: Sunny blue skies, cool winds (15°C day, 3°C night)",
            budget: "₹5,000 - ₹10,000 ($60 - $120 USD) per day including 4x4 transport & glamping",
            highlight: "Stargazing at milky way skies over Pangong Tso crystal lake and camel ride in Hunder dunes.",
            filterTag: "himalayas"
        },
        "summer-nature": {
            badge: "Himachal Mountain Splendor",
            title: "Pine Forests, Paragliding & Monasteries",
            subtitle: "Dalhousie • Khajjiar • Dharamsala • Manali",
            route: "Train to Pathankot / Flight to Kangra → Scenic drive to Dalhousie → McLeod Ganj",
            climate: "April to June: Refreshing mountain breeze (15°C – 25°C), snow on high passes",
            budget: "₹3,500 - ₹7,500 ($45 - $90 USD) per day",
            highlight: "Walking across the golden meadow of Khajjiar and meditating at the Dalai Lama temple.",
            filterTag: "himalayas"
        },
        "monsoon-nature": {
            badge: "Emerald Rainforest & Living Bridges",
            title: "Abode of Clouds & Monsoon Wonderland",
            subtitle: "Shillong • Cherrapunji (Sohra) • Mawlynnong • Dawki",
            route: "Guwahati Airport → Umiam Lake → Cherrapunji roaring waterfalls",
            climate: "July to September: Lush rain, rolling clouds, magnificent roaring waterfalls",
            budget: "₹3,000 - ₹6,000 ($38 - $75 USD) per day",
            highlight: "Trekking through lush rainforest canopy to see 500-year-old living root bridges.",
            filterTag: "east"
        },
        "winter-coastal": {
            badge: "Sun, Sand & Heritage Haven",
            title: "Arabian Sea Coastline & Latin Quarters",
            subtitle: "North Goa Beaches • Old Goa Churches • South Goa Serenity",
            route: "Fly into Goa International → Explore Old Goa UNESCO churches → Sunset cruise on Mandovi",
            climate: "November to February: Warm sunny days (24°C – 31°C) with gentle ocean breeze",
            budget: "₹3,500 - ₹9,000 ($45 - $110 USD) per day",
            highlight: "Watching the sun dip into the Arabian Sea while tasting fresh grilled fish and listening to fado music.",
            filterTag: "beaches"
        }
    };

    const tripPlannerForm = document.getElementById("tripPlannerForm");
    const saveTripBtn = document.getElementById("saveTripBtn");
    const viewCircuitStopsBtn = document.getElementById("viewCircuitStopsBtn");

    if (tripPlannerForm) {
        tripPlannerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const season = document.getElementById("travelSeason").value;
            const style = document.getElementById("travelStyle").value;
            const duration = document.getElementById("travelDuration").value;

            let key = `${season}-${style}`;
            if (!plannerCircuits[key]) {
                if (style === "adventure" || season === "summer") key = "summer-adventure";
                else if (style === "coastal") key = "winter-coastal";
                else if (season === "monsoon") key = "monsoon-nature";
                else key = "winter-heritage";
            }

            const plan = plannerCircuits[key];
            const resultBox = document.getElementById("itineraryResult");
            if (resultBox) resultBox.style.opacity = "0.3";

            setTimeout(() => {
                document.getElementById("itineraryBadge").textContent = `${plan.badge} • ${duration.toUpperCase()}`;
                document.getElementById("itineraryTitle").textContent = plan.title;
                document.getElementById("itinerarySubtitle").textContent = plan.subtitle;
                document.getElementById("itineraryRoute").textContent = plan.route;
                document.getElementById("itineraryClimate").textContent = plan.climate;
                document.getElementById("itineraryBudget").textContent = plan.budget;
                document.getElementById("itineraryHighlight").textContent = plan.highlight;

                if (viewCircuitStopsBtn) {
                    viewCircuitStopsBtn.onclick = () => {
                        currentFilter = plan.filterTag || "all";
                        updateCategoryPills();
                        renderDestinations();
                        const pTrips = document.querySelector("#popularTrips");
                        if (pTrips) pTrips.scrollIntoView({ behavior: "smooth" });
                    };
                }

                if (resultBox) resultBox.style.opacity = "1";
                showToast("✨ Personalized Itinerary Generated!");
            }, 200);
        });
    }

    if (saveTripBtn) {
        saveTripBtn.addEventListener("click", () => {
            showToast("💾 Itinerary saved to your offline travel wallet!");
        });
    }

    // =================================================================
    // 11. MOBILE MENU & NAVIGATION SCROLL SPY
    // =================================================================
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".gov-nav-link");
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("active");
            mobileMenuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
            mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) navMenu.classList.remove("active");
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                mobileMenuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        }

        const sections = document.querySelectorAll("section[id], body[id='home']");
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");
            const navLink = document.querySelector(`.gov-nav-link[href="#${id}"]`);
            if (navLink) {
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(n => n.classList.remove("active"));
                    navLink.classList.add("active");
                }
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Newsletter Submission
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("🎉 Thank you for subscribing to Incredible India Official Gazette!");
            newsletterForm.reset();
        });
    }

    // =================================================================
    // 12. TOAST NOTIFICATION SYSTEM
    // =================================================================
    const toast = document.getElementById("toastNotification");
    const toastMsg = document.getElementById("toastMessage");
    let toastTimer = null;

    function showToast(message) {
        if (!toast || !toastMsg) return;
        toastMsg.textContent = message;
        toast.classList.add("show");
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3200);
    }

    // Initial render of destinations grid
    renderDestinations();
});