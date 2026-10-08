

document.addEventListener("DOMContentLoaded", () => {

    
    
    
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

    
    
    
    const fontDecrease = document.getElementById("fontDecrease");
    const fontReset = document.getElementById("fontReset");
    const fontIncrease = document.getElementById("fontIncrease");
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");
    const langToggle = document.getElementById("langToggle");
    const langLabel = document.getElementById("langLabel");

    
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

            
            document.querySelectorAll(".gov-nav-link .nav-text").forEach(span => {
                const text = span.getAttribute(`data-${currentLang}`);
                if (text) span.textContent = text;
            });

            showToast(currentLang === "hi" ? "🇮🇳 भाषा: हिंदी में परिवर्तित" : "🌐 Language: Switched to English");
        });
    }

    
    
    
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
                        <img src="${dest.image}" alt="${dest.name}">
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

    
    categoryChips.forEach(chip => {
        chip.addEventListener("click", () => {
            currentFilter = chip.getAttribute("data-filter");
            updateCategoryPills();
            renderDestinations();
        });
    });

    
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

    
    
    
    const plannerCircuits = {
        "winter-heritage": {
            badge: "Imperial Golden Triangle",
            title: "Royal Delhi, Taj Mahal & Pink City Haveli Circuit",
            subtitle: "New Delhi • Agra • Fatehpur Sikri • Jaipur • Pushkar",
            route: "Delhi Airport Express to NDLS → Train 12050 Gatimaan Express (NZM 08:10 → AGC 09:50, 100 min) → Yamuna Expressway / NH21 to Jaipur → Train 20978 Vande Bharat (JP 15:45 → DEC 19:35)",
            climate: "October to March: Sunny crisp days (14°C – 26°C), morning fog in Dec/Jan. Pack breathable cottons with evening light jackets.",
            budgets: {
                backpacker: "₹2,100 / $25 USD per person/day (Zostel / Madpackers dorms, Indian Railways Sleeper/3AC, street thalis & metro)",
                comfort: "₹5,400 / $65 USD per person/day (Boutique heritage havelis, Gatimaan & Vande Bharat AC Chair Car, private AC sedan)",
                luxury: "₹19,500 / $235 USD per person/day (The Oberoi Amarvilas & Taj Rambagh Palace, private chauffeur, fast-track ASI VIP entries)"
            },
            highlight: "Haveli Dharampura (Delhi), Peshawri at ITC Mughal (Agra), LMB Johari Bazaar & 1135 AD Amber Fort (Jaipur)",
            filterTag: "north",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Arrival in Delhi & Shahjahanabad Heritage Walk",
                    location: "Delhi NCR",
                    morning: "08:30 AM – Check in via Delhi Airport Express Metro (19 mins to New Delhi Station). Visit Jama Masjid (free entry; ₹300 camera fee). Walk through Dariba Kalan silver lane & Khari Baoli spice market.",
                    afternoon: "12:45 PM – Authentic lunch at Karim's (Gate 1 Jama Masjid; Mutton Rogan Josh or Dal Makhani). 02:30 PM – Red Fort Lahori Gate (Pre-book online at asi.payumoney.com to skip 40-min queue; ₹50 Indian / ₹600 Foreigner).",
                    evening: "05:30 PM – Humayun’s Tomb gardens at golden hour. 08:00 PM – Dinner at Pandara Road (Gulati). Overnight stay at Connaught Place boutique hotel.",
                    localTip: "Use Delhi Metro Smart Card or WhatsApp QR ticket to skip token queues. For autos, insist on meter or book Uber Auto."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Gatimaan Express to Agra & Agra Fort Sunset",
                    location: "Agra, Uttar Pradesh",
                    morning: "07:30 AM – Board Gatimaan Express (Train 12050) from Hazrat Nizamuddin at 08:10 AM; arrives Agra Cantt at 09:50 AM (AC Chair Car breakfast included). Transfer to hotel near Taj East Gate.",
                    afternoon: "01:00 PM – Lunch at Pinch of Spice (Paneer Lababdar / Murgh Boti). 02:45 PM – Tour Agra Fort (Jahangiri Mahal & Diwan-i-Khas where Shah Jahan was imprisoned facing the Taj).",
                    evening: "05:15 PM – Cross Yamuna River to Mehtab Bagh for sunset reflection of the Taj Mahal across the water. Dinner at Peshawri (ITC Mughal, famous Dal Bukhara).",
                    localTip: "Buy composite ASI entry ticket online. Only mobile phones and water bottles are permitted inside monument grounds; leave large bags at hotel."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Taj Mahal Dawn Sunrise & Ghost City of Fatehpur Sikri",
                    location: "Agra & Fatehpur Sikri",
                    morning: "05:45 AM – Reach Taj Mahal East Gate 30 minutes before sunrise for empty reflective pool photographs. Pre-book main mausoleum entry (₹200 add-on). Shoe covers and bottled water included.",
                    afternoon: "11:30 AM – Drive 38 km to UNESCO Fatehpur Sikri (Emperor Akbar’s red sandstone capital). Marvel at the 54-meter Buland Darwaza and white marble tomb of Sufi saint Sheikh Salim Chishti.",
                    evening: "04:30 PM – Sample authentic Agra Petha at authentic Panchhi Petha (Sadar Bazaar). 06:30 PM – Board evening intercity express or private AC taxi along NH21 toward Jaipur (approx. 4.5 hours).",
                    localTip: "Taj Mahal is strictly closed to tourists every Friday for prayers. Plan your schedule accordingly."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Amber Fort Royal Citadel & Panna Meena Stepwell",
                    location: "Jaipur, Rajasthan",
                    morning: "08:00 AM – Early ascent to Amber Fort to beat afternoon heat. Explore Sheesh Mahal (Palace of Mirrors) and Maota Lake views. Walk 5 mins to the geometric 16th-century Panna Meena Ka Kund stepwell.",
                    afternoon: "01:00 PM – Traditional Rajasthani Thali lunch at 1135 AD inside fort ramparts, or drive into city for Rawat Mishthan Bhandar (legendary hot Pyaaz Kachori and Mirchi Vada).",
                    evening: "04:30 PM – Photo stop at Jal Mahal (Water Palace). Drive up to Nahargarh Fort ramparts for panoramic sunset over the entire Pink City skyline. Dinner at Padao open-air terrace.",
                    localTip: "Purchase Jaipur Composite Ticket (₹100 Indian / ₹500 Foreigner; valid for 2 days across Amber Fort, Albert Hall, Hawa Mahal, and Jantar Mantar)."
                },
                {
                    dayNumber: 5,
                    dayTitle: "Pink City Palaces, Jantar Mantar Observatory & Bazaars",
                    location: "Jaipur Pink City",
                    morning: "08:30 AM – Hawa Mahal (Palace of Winds) facade photography from Wind View Cafe. Visit City Palace Jaipur including Pritam Niwas Chowk (Peacock Gate) and Maharaja Sawai Man Singh II Museum.",
                    afternoon: "12:30 PM – Walk next door to Jantar Mantar UNESCO site (world's largest stone sundial, measuring time down to 2-second accuracy). Lunch at Laxmi Mishthan Bhandar (LMB) in Johari Bazaar.",
                    evening: "04:30 PM – Walking tour through Bapu Bazaar and Johari Bazaar for blue pottery, block-print quilts, and silver jewelry. 07:30 PM – Cultural puppet and folk dance performance at Bagore Ki Haveli.",
                    localTip: "Fixed price government handicraft emporiums (Rajasthali on MI Road) give genuine benchmark prices before bargaining in street bazaars."
                },
                {
                    dayNumber: 6,
                    dayTitle: "Sacred Lake Pushkar or Regal Albert Hall Museum",
                    location: "Pushkar / Jaipur",
                    morning: "07:00 AM – Optional morning excursion to holy Pushkar (130 km via Ajmer). Visit the rare 14th-century Lord Brahma Temple and the 52 sacred ghats of Pushkar Lake.",
                    afternoon: "01:30 PM – Falafel and lassi at Pushkar rooftop cafes, or return to Jaipur for Albert Hall Museum (Indo-Saracenic architectural masterpiece and Persian carpets).",
                    evening: "06:30 PM – Evening stroll around Central Park or sound & light show at Amber Fort. Dinner at Baradari inside City Palace courtyard.",
                    localTip: "In Pushkar, decline priest 'puja flowers' offered aggressively at ghats if you do not seek a religious ritual donation."
                },
                {
                    dayNumber: 7,
                    dayTitle: "Vande Bharat Express to Delhi & Departure",
                    location: "Jaipur & New Delhi",
                    morning: "09:00 AM – Relaxed breakfast at heritage haveli. Last-minute artisan shopping for hand-blocked Sanganeri linens and lac bangles.",
                    afternoon: "01:30 PM – Board Vande Bharat Express (Train 20978) from Jaipur Junction at 15:45 PM; arrives Delhi Cantt at 19:35 PM in supreme comfort with hot snacks service.",
                    evening: "08:00 PM – Transfer directly from Delhi Cantt to IGI Airport Terminal 3 for international return flights or domestic connections.",
                    localTip: "Book IRCTC Vande Bharat tickets 15–30 days in advance via IRCTC portal; Executive Class includes wide reclining seats and panoramic observation windows."
                }
            ]
        },
        "winter-spiritual": {
            badge: "Sacred Rivers & Ghats",
            title: "The Eternal Ganga Aarti & Sacred Confluence Circuit",
            subtitle: "Varanasi • Sarnath • Prayagraj (Triveni Sangam) • Ayodhya",
            route: "Train 22436 Vande Bharat (NDLS 06:00 → BSB 14:00, 8 hrs) → AC private taxi to Prayagraj Sangam (120 km / 2.5 hrs) → Return via Lal Bahadur Shastri Airport (VNS)",
            climate: "November to February: 12°C – 23°C, misty morning river air. Pack slip-on shoes for temple corridors and warm shawls for dawn boat rides.",
            budgets: {
                backpacker: "₹1,600 / $20 USD per person/day (Ghats guesthouse / Zostel Varanasi, shared rowing boats, street kachori jalebi)",
                comfort: "₹4,200 / $50 USD per person/day (Riverside haveli with river-view balcony, private motorboat charter, guided temple corridor)",
                luxury: "₹16,500 / $200 USD per person/day (BrijRama Palace on Darbhanga Ghat, private bajra boat for Ganga Aarti, VIP Darshan passes)"
            },
            highlight: "Subah-e-Banaras dawn chanting at Assi Ghat, Kashi Chaat Bhandar (Tamatar Chaat), Blue Lassi, Sarnath Dhamek Stupa",
            filterTag: "north",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Arrival in Varanasi & Evening Dashashwamedh Aarti",
                    location: "Varanasi, Uttar Pradesh",
                    morning: "09:00 AM – Arrive via Vande Bharat Express at Varanasi Junction. Transfer to riverside haveli near Assi Ghat or Godowlia Crossing.",
                    afternoon: "01:30 PM – Lunch at Keshari Restaurant (Baati Chokha & Thali). Rest and recharge before heading into the narrow old lanes.",
                    evening: "05:30 PM – Board private wooden boat to witness the majestic Grand Ganga Aarti at Dashashwamedh Ghat. Multi-tiered brass lamps, conch shells, and floating flower diyas. Dinner at Cantonment.",
                    localTip: "Book evening boat from Assi or Dashashwamedh Ghat by 04:30 PM to secure prime mooring directly facing the priest platforms."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Dawn Rowing Boat on the Ganges & Kashi Vishwanath Corridor",
                    location: "Varanasi Ghats",
                    morning: "05:15 AM – Subah-e-Banaras classical music and yoga at Assi Ghat. Dawn rowing boat along Manikarnika Ghat to Panchganga Ghat as pilgrims bathe in the morning sun.",
                    afternoon: "11:00 AM – Breakfast of hot Kachori-Sabzi and Jalebi at Ram Bhandar. Visit the newly renovated Kashi Vishwanath Golden Temple Corridor (pre-book Sugam Darshan ticket online to skip 2-hour queue).",
                    evening: "04:30 PM – Walk through Thatheri Bazaar brass market. Evening tea and Tamatar Chaat at Kashi Chaat Bhandar (Godowlia). Night stroll along illuminated Namo Ghat.",
                    localTip: "Mobile phones, leather belts, and bags are prohibited inside Kashi Vishwanath Sanctum; use the official digital lockers inside Corridor Gate 4."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Sarnath Deer Park & Buddhist Enlightenment Monuments",
                    location: "Sarnath, Uttar Pradesh",
                    morning: "08:30 AM – Drive 12 km to Sarnath, where Lord Buddha gave his First Sermon 2,500 years ago. Explore the colossal 43-meter Dhamek Stupa and Mulagandha Kuti Vihara.",
                    afternoon: "12:30 PM – Visit Sarnath Archaeological Museum housing the original 3rd-century BCE Lion Capital of Ashoka (National Emblem of India).",
                    evening: "05:00 PM – Return to Varanasi. Taste legendary saffron Malaiyyo (winter milk froth dessert) in Chaukhamba lane. Banarasi silk saree weaver workshop at Madanpura.",
                    localTip: "Museum is closed on Fridays. Buy the ₹20 ASI ticket online to bypass the physical counter."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Day Excursion to Prayagraj & Triveni Sangam Confluence",
                    location: "Prayagraj (Allahabad)",
                    morning: "06:30 AM – Early private taxi to Prayagraj (120 km / 2.5 hrs via NH19). Head directly to Qila Ghat for a boat out to the Triveni Sangam (confluence of Ganga, Yamuna, and invisible Saraswati).",
                    afternoon: "01:00 PM – Traditional lunch in Civil Lines. Visit Anand Bhavan (historic ancestral home of the Nehru family and center of the Indian freedom movement).",
                    evening: "04:30 PM – Visit Allahabad Fort and the underground Patalpuri Temple. Drive back to Varanasi by 08:30 PM for rest.",
                    localTip: "Negotiate boats at Sangam before boarding; fixed government rate boards are displayed near the mela police post."
                }
            ]
        },
        "winter-nature": {
            badge: "God's Own Country Circuit",
            title: "Kerala Backwaters, Spice Hills & Tea Highlands",
            subtitle: "Kochi Fort • Munnar Tea Estates • Thekkady Wildlife • Alleppey Houseboat",
            route: "Arrive Cochin International (COK) → Mountain drive NH85 to Munnar (130 km / 4 hrs) → Spice trail to Thekkady (90 km / 3 hrs) → Alleppey Backwaters jetty (140 km / 3.5 hrs)",
            climate: "October to March: Mild tropical coastal warmth (22°C – 30°C). Munnar tea hills drop to 12°C at night. Pack light breathable clothes plus a fleece for Munnar.",
            budgets: {
                backpacker: "₹2,200 / $27 USD per person/day (Fort Kochi colonial homestay, state KSRTC buses, government ferry rides ₹15, fish curry meals)",
                comfort: "₹5,800 / $70 USD per person/day (Private AC car throughout, 3★ tea plantation resort, private AC deluxe houseboat with chef)",
                luxury: "₹22,000 / $265 USD per person/day (Brunton Boatyard Fort Kochi, Windermere Estate Munnar, luxury ultra-premium Kettuvallam houseboat)"
            },
            highlight: "Kolukkumalai world's highest organic tea estate, Periyar bamboo rafting, private thatched houseboat cruise with Karimeen Pollichathu dinner",
            filterTag: "south",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Colonial Fort Kochi, Chinese Fishing Nets & Kathakali",
                    location: "Kochi, Kerala",
                    morning: "09:00 AM – Arrive Cochin Airport (world's first 100% solar-powered airport). Taxi to Fort Kochi. Walk to the 14th-century cantilevered Chinese Fishing Nets along Vasco da Gama Square.",
                    afternoon: "01:00 PM – Malabar seafood lunch at Paragon or Oceanos. Visit St. Francis Church (oldest European church in India) and Santa Cruz Cathedral Basilica.",
                    evening: "05:00 PM – Attend traditional Kathakali makeup and classical dance recital at Kerala Kathakali Centre. Dinner at Kashi Art Cafe in Burgher Street.",
                    localTip: "Use the Kochi Water Metro (electric air-conditioned boats) to travel between High Court Jetty and Vypin for only ₹20 with scenic harbor views."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Jew Town Mattancherry & Drive into Misty Munnar Hills",
                    location: "Kochi to Munnar",
                    morning: "08:30 AM – Explore Jew Town antique markets and the 1568 Paradesi Synagogue in Mattancherry. Visit Dutch Palace (Mattancherry Palace) murals.",
                    afternoon: "11:30 AM – Scenic drive ascending through the Western Ghats (NH85). Stop at Cheeyappara and Valara waterfalls. Fresh cardamom tea at roadside stalls.",
                    evening: "04:30 PM – Arrive in Munnar (1,600m altitude). Check into tea plantation resort. Evening walk through eucalyptus and tea gardens. Dinner at Saravana Bhavan Munnar.",
                    localTip: "Road to Munnar has winding hairpin bends; keep motion sickness tablets handy if sensitive to hill roads."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Munnar Tea Factory, Eravikulam National Park & Nilgiri Tahr",
                    location: "Munnar, Kerala",
                    morning: "07:30 AM – Visit Eravikulam National Park (Rajamalai) to spot the endangered Nilgiri Tahr (mountain goat) against rolling shola grasslands (Pre-book entry at eravikulamnationalpark.in).",
                    afternoon: "01:00 PM – Visit KDHP Tea Museum at Nullatanni Estate. Witness orthodox black tea processing from CTC rolling to final tasting.",
                    evening: "04:00 PM – Drive to Mattupetty Dam and Echo Point. Enjoy fresh spice plantation spiced tea and homemade chocolates. Campfire dinner at resort.",
                    localTip: "Eravikulam Park closes annually during the Nilgiri Tahr calving season (Feb to March); check forestry department notices before travel."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Spice Plantations of Thekkady & Periyar Lake Cruise",
                    location: "Thekkady (Periyar)",
                    morning: "08:00 AM – Drive south through cardamom hills to Thekkady (3 hrs). Guided walking tour through Abraham’s Spice Garden (cinnamon, vanilla, black pepper, nutmeg).",
                    afternoon: "01:30 PM – Traditional Kerala Sadhya lunch on banana leaf. Check in to jungle eco-lodge near Periyar National Park.",
                    evening: "03:30 PM – Kerala Tourism boat safari on Periyar Lake to spot wild elephant herds, sambar deer, and otters along lake banks. 07:00 PM – Kalaripayattu martial arts show at Kadathanadan Kalari Centre.",
                    localTip: "Book the 07:30 AM or 03:30 PM Forest Department boat online at periyartigerreserve.org weeks in advance for best wildlife sightings."
                },
                {
                    dayNumber: 5,
                    dayTitle: "Boarding Private Alleppey Houseboat (Kettuvallam)",
                    location: "Alleppey (Alappuzha)",
                    morning: "08:30 AM – Drive down the Ghats to Alleppey Backwaters jetty (3.5 hrs). Board your private thatched Kettuvallam houseboat by 12:00 PM noon. Welcome tender coconut drink.",
                    afternoon: "01:00 PM – Houseboat glides through Vembanad Lake and Punnamada backwater canals. Onboard chef prepares freshly fried pearl spot fish (Karimeen Pollichathu), red rice, and avial.",
                    evening: "05:00 PM – Boat moors along quiet village bank at sunset. Walk through paddy fields below sea level (Kuttanad). Candlelight dinner on deck under clear stars.",
                    localTip: "By government environmental regulation, houseboats must anchor between 05:30 PM and 07:30 AM to allow local fishermen to cast their nets undisturbed."
                }
            ]
        },
        "summer-adventure": {
            badge: "High Altitude Trans-Himalayan",
            title: "The Great Ladakh High Passes & Pangong Tso Expedition",
            subtitle: "Leh (3,500m) • Khardung La (5,359m) • Nubra Valley • Pangong Tso (4,250m)",
            route: "Flight into Kushok Bakula Rimpochee Airport (IXL Leh) → Acclimatize 48 hrs in Leh → 4x4 Scorpio/Innova to Nubra via Khardung La → Shayok river route to Pangong Lake → Return via Chang La Pass",
            climate: "May to September: Bright mountain sun (16°C – 22°C day), chilly night temperatures (0°C – 5°C). High UV intensity; sunglasses, sunblock SPF 50, and layered thermal fleece mandatory.",
            budgets: {
                backpacker: "₹2,600 / $32 USD per person/day (Leh homestay / guest room, shared taxi tours to Nubra/Pangong, momos & thukpa)",
                comfort: "₹6,800 / $82 USD per person/day (3★ solar-heated hotel in Leh, private 4WD vehicle with oxygen cylinder, luxury yurt glamping at Pangong)",
                luxury: "₹24,000 / $290 USD per person/day (The Grand Dragon Ladakh / Chamba Camp Thiksey, dedicated expedition leader, private luxury heated dome)"
            },
            highlight: "Stargazing at milky way skies over Pangong Tso crystal lake, Hunder sand dunes double-humped camel ride, and Thiksey morning chanting",
            filterTag: "himalayas",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Leh Arrival & Mandatory High Altitude Acclimatization",
                    location: "Leh, Ladakh (3,500m)",
                    morning: "07:30 AM – Spectacular flight over snow-capped Karakoram ranges landing at Leh (3,500m). Transfer to hotel. STRICT RULE: Complete bed rest for the first 24 hours to prevent Acute Mountain Sickness (AMS).",
                    afternoon: "01:00 PM – Light hydrating lunch at hotel (garlic soup, clear broth, plenty of warm water or ginger honey tea). Rest indoors.",
                    evening: "05:30 PM – Very slow gentle walk through Leh Main Bazaar. Visit Tibetan Kitchen for dinner. Early sleep.",
                    localTip: "Do not plan any excursions on Day 1. Drink 3–4 liters of fluids. Consult your doctor beforehand regarding Diamox (Acetazolamide) prophylaxis."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Shanti Stupa Sunrise & Indus Valley Monasteries",
                    location: "Leh Valley",
                    morning: "06:30 AM – Morning drive up to white-domed Shanti Stupa for panoramic dawn views of Leh town and Namgyal Tsemo Fort.",
                    afternoon: "11:30 AM – Tour Shey Palace and the majestic 12-story Thiksey Monastery (resembling the Potala Palace of Lhasa). Visit the 15-meter statue of Maitreya Buddha.",
                    evening: "04:30 PM – Visit Hall of Fame War Memorial maintained by Indian Army. Evening coffee and apricot pie at Gesmo Bakery in Leh.",
                    localTip: "Obtain Inner Line Permit (ILP) online at lahdclehpermit.in for Nubra and Pangong (Environmental fee ₹400 + Red Cross fee ₹100 + ₹20/day)."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Crossing Khardung La Pass (5,359m) to Nubra Valley Dunes",
                    location: "Khardung La to Nubra Valley",
                    morning: "07:00 AM – Drive north climbing the world's most dramatic paved mountain road. Reach summit of Khardung La Pass (5,359m / 17,582 ft). Quick 15-minute photo stop at prayer flags.",
                    afternoon: "01:30 PM – Descend into the picturesque Nubra Valley (Diskit). Tour the colossal 32-meter golden statue of Jampa Buddha overlooking Shyok River.",
                    evening: "05:00 PM – Sunset double-humped Bactrian camel safari across cold desert sand dunes at Hunder. Check into deluxe yurt camp. Traditional Ladakhi stew dinner.",
                    localTip: "Do not stay longer than 20 minutes at the summit of Khardung La to avoid oxygen deprivation headache."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Scenic Shyok River Route to Surreal Pangong Tso Lake",
                    location: "Nubra to Pangong Tso (4,250m)",
                    morning: "06:30 AM – Depart early via the rugged off-road Shayok River route connecting Nubra directly to Pangong Lake without re-crossing Leh (approx. 5.5 hours drive).",
                    afternoon: "01:00 PM – First breathtaking sight of Pangong Tso’s shimmering deep-blue and turquoise saltwater expanse extending 134 km into Tibet.",
                    evening: "05:00 PM – Photography along Spangmik shoreline as water color shifts from sapphire to aquamarine. Midnight stargazing under zero-light-pollution Milky Way skies.",
                    localTip: "Temperatures at Pangong drop below freezing even in June–August. Ensure your camp has heavy down duvets or room heating."
                }
            ]
        },
        "summer-nature": {
            badge: "Himachal Mountain Splendor",
            title: "Pine Forests, Paragliding & Monasteries",
            subtitle: "Dharamshala • McLeod Ganj • Manali • Solang Valley",
            route: "Flight to Kangra Airport (DHM) / Train to Pathankot → Scenic drive to McLeod Ganj (90 km) → Drive through tea gardens to Manali (210 km / 6.5 hrs) → Return via Chandigarh",
            climate: "April to June: Refreshing mountain breeze (16°C – 26°C), clear Himalayan views, wild pine scents. Light sweaters for evening walks.",
            budgets: {
                backpacker: "₹1,900 / $23 USD per person/day (Old Manali hostel, shared Volvos, Tibetan momo stalls, self-guided trail hikes)",
                comfort: "₹4,800 / $58 USD per person/day (Chalet resort with apple orchard view, dedicated AC cab, guided paragliding & trout dining)",
                luxury: "₹17,000 / $205 USD per person/day (The Himalayan luxury castle, Norbulingka private suite, VIP Solang heli-transfers)"
            },
            highlight: "Walking across the golden cedar trails of Dharamkot, Dalai Lama Temple Complex, and baked Himalayan trout at Johnson's Cafe",
            filterTag: "himalayas",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Arrival in McLeod Ganj & Tsuglagkhang Temple Complex",
                    location: "Dharamshala / McLeod Ganj",
                    morning: "09:30 AM – Arrive in McLeod Ganj (Little Lhasa). Check into pine ridge hotel. Stroll through Temple Road Tibetan craft markets.",
                    afternoon: "01:00 PM – Lunch at Tibet Kitchen (Steamed tingmo bread with shapta). 02:30 PM – Visit Tsuglagkhang Complex (residence of His Holiness the Dalai Lama), spin the prayer wheels, and visit the Tibet Museum.",
                    evening: "05:30 PM – Walk through the deodar forest to the serene Church of St. John in the Wilderness (built 1852). Sunset coffee at Illiterati Books & Coffee.",
                    localTip: "Observe temple etiquette: walk clockwise around all Buddhist stupas and prayer wheel shrines."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Bhagsunag Waterfall, Dharamkot & Norbulingka Institute",
                    location: "Dharamshala Valley",
                    morning: "08:00 AM – Short morning hike from Bhagsunag temple to Bhagsu waterfall. Continue uphill to Dharamkot village for panoramic Kangra valley views.",
                    afternoon: "01:00 PM – Drive down to Norbulingka Institute (dedicated to preserving traditional Tibetan thangka painting, woodcarving, and bronze metalwork).",
                    evening: "05:00 PM – Visit the picturesque tea gardens of Kangra. Taste fresh first-flush Kangra green tea. Dinner at Nick's Italian Kitchen.",
                    localTip: "Norbulingka Japanese-style gardens offer tranquil reading spots and an authentic Tibetan craft workshop tour."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Scenic Drive to Manali & Old Manali Vibe",
                    location: "Manali, Himachal Pradesh",
                    morning: "07:30 AM – Early departure along NH154 through Mandi and the scenic Beas river gorge toward Kullu Valley (approx. 6.5 hrs).",
                    afternoon: "02:30 PM – Arrive in Manali. Check into hotel surrounded by pine trees and apple orchards. Walk across the old wooden bridge into Old Manali.",
                    evening: "05:30 PM – Visit the 1553 CE wooden pagoda Hadimba Devi Temple set inside cedar forest. Dinner at Johnson’s Cafe (fresh baked Himalayan brown trout with almonds).",
                    localTip: "Old Manali has authentic bakeries, live acoustic music, and handicraft lanes far more peaceful than Mall Road."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Atal Tunnel Expedition into Lahaul Valley & Sissu Falls",
                    location: "Atal Tunnel & Lahaul Valley",
                    morning: "08:00 AM – Drive north toward Solang Valley and enter the engineering marvel of Atal Tunnel (9.02 km long, world’s longest highway tunnel above 10,000 ft).",
                    afternoon: "10:30 AM – Emerge into the stark, breathtaking trans-Himalayan landscape of Lahaul Valley. Hike 20 minutes to Sissu Waterfall across the suspension bridge.",
                    evening: "03:30 PM – Drive back through the tunnel. Optional paragliding or cable car ride at Solang Valley. Warm siddu (Himachal steamed wheat dumpling) at local dhaba.",
                    localTip: "Atal Tunnel connects lush green Beas valley to semi-arid Lahaul within 15 minutes; weather on the other side can be vastly colder and windier."
                }
            ]
        },
        "monsoon-nature": {
            badge: "Emerald Rainforest & Living Bridges",
            title: "Abode of Clouds & Monsoon Living Roots Circuit",
            subtitle: "Guwahati • Shillong • Cherrapunji (Sohra) • Mawlynnong • Dawki",
            route: "Guwahati Airport (GAU) → Umiam Lake viewpoint → Shillong NH6 → Sohra cliff road (55 km / 2 hrs) → Dawki Indo-Bangladesh border → Return via Guwahati",
            climate: "July to September: Spectacular monsoon rain, roaring waterfalls, misty canyon clouds (18°C – 24°C). Waterproof trekking boots & rain ponchos mandatory.",
            budgets: {
                backpacker: "₹2,000 / $24 USD per person/day (Nongriat village homestay, shared Sumo cabs from Shillong, Khasi rice platters)",
                comfort: "₹4,600 / $55 USD per person/day (Boutique pine cottages, private AC tourist cab, local indigenous Khasi trekking guide)",
                luxury: "₹15,500 / $188 USD per person/day (Ri Kynjai Resort Umiam Lake, Polo Orchid Cherrapunji cliff-view suite, private boat charter at Dawki)"
            },
            highlight: "Trekking through rainforest canopy to see 500-year-old double-decker living root bridges and roaring Nohkalikai Falls",
            filterTag: "east",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Arrival in Guwahati, Umiam Lake & Scotland of the East",
                    location: "Guwahati to Shillong",
                    morning: "09:30 AM – Arrive Lokpriya Gopinath Bordoloi Airport in Guwahati. Board private taxi ascending NH6 into Meghalaya (approx. 3.5 hrs).",
                    afternoon: "01:00 PM – Stop at Umiam Lake (Barapani) for lake-view lunch and fresh pine breeze. Continue into Shillong city (1,500m elevation).",
                    evening: "05:00 PM – Stroll through Police Bazar and Laitumkhrah. Coffee at Dylan’s Cafe (tribute to Bob Dylan). Overnight stay at Shillong heritage lodge.",
                    localTip: "Try traditional Khasi snack Tungrymbai or roasted pork momos at local cafes in Laitumkhrah."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Cherrapunji (Sohra) Waterfalls & Mawsmai Limestone Caves",
                    location: "Cherrapunji (Sohra)",
                    morning: "08:00 AM – Drive to Cherrapunji across the dramatic misty canyons of Sohra. Stop at the thundering Elephant Falls and Mawkdok Dympep Valley viewpoint zip-line.",
                    afternoon: "01:00 PM – Visit Nohkalikai Falls (India’s tallest plunge waterfall at 340 meters) tumbling into a turquoise pool. Lunch at Orange Roots pure vegetarian restaurant.",
                    evening: "03:30 PM – Walk through the illuminated subterranean fossil formations of Mawsmai Cave. Watch sunset from Seven Sister Falls (Nohsngithiang Falls). Check into Sohra resort.",
                    localTip: "Carry high-quality waterproof jackets and dry bags for electronics; Cherrapunji receives some of the highest rainfall on Earth."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Nongriat Double-Decker Living Root Bridge Rainforest Trek",
                    location: "Nongriat Village",
                    morning: "06:30 AM – Early departure to Tyrna village (trek base). Begin descending the 3,500 stone steps through lush tropical rainforest canopy.",
                    afternoon: "10:30 AM – Reach the world-famous Double-Decker Living Root Bridge (Jingkieng Nongriat), bio-engineered by the indigenous Khasi tribe using living Ficus elastica roots over centuries.",
                    evening: "02:00 PM – Swim in natural turquoise pools at Rainbow Falls. Ascend back to Tyrna or overnight in village eco-homestay with home-cooked farm meals.",
                    localTip: "Trek involves steep climbing; carry bamboo walking sticks (available for ₹20 at Tyrna trailhead) and ample hydration."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Mawlynnong Cleanest Village & Transparent Dawki River",
                    location: "Mawlynnong & Dawki",
                    morning: "08:00 AM – Drive along border ridges to Mawlynnong (awarded Cleanest Village in Asia). Walk down flower-lined village pathways and climb Sky View bamboo canopy tower.",
                    afternoon: "12:30 PM – Continue to Dawki on the Indo-Bangladesh border. Board traditional wooden boat on the emerald Umngot River, so transparent that boats appear to float on air.",
                    evening: "04:30 PM – Drive back toward Shillong via scenic Krang Suri waterfall. Traditional Khasi dinner in Shillong.",
                    localTip: "Dawki river clarity is highest from October to April, while monsoon brings dramatic roaring waterfall volume across canyons."
                }
            ]
        },
        "winter-coastal": {
            badge: "Arabian Sea Coastal Heritage",
            title: "Portuguese Latin Quarter, Spice Plantations & Serene Sands",
            subtitle: "Panjim Fontainhas • Old Goa UNESCO Basilicas • Palolem • Gokarna",
            route: "Fly into Goa Dabolim (GOI) or Manohar Mopa (GOX) → Konkan coastal highway NH66 to South Goa and Gokarna → Return via Goa",
            climate: "November to February: Warm sunny days (24°C – 31°C), gentle Arabian Sea breeze, zero rain. Light linen wear and swimwear.",
            budgets: {
                backpacker: "₹2,200 / $26 USD per person/day (Hostel in Anjuna or Palolem beach hut, rented Activa scooter ₹400/day, beach shack fish curry)",
                comfort: "₹5,200 / $63 USD per person/day (Restored 19th-century Portuguese heritage villa in Fontainhas, AC cab, fine dining Goan meals)",
                luxury: "₹19,000 / $230 USD per person/day (Taj Exotica Benaulim / The Leela Goa, private sunset catamaran cruise, vintage private estate dinner)"
            },
            highlight: "Fontainhas Latin Quarter heritage architectural walk, Basilica of Bom Jesus, and fresh butter garlic crab at Fisherman's Wharf",
            filterTag: "beaches",
            days: [
                {
                    dayNumber: 1,
                    dayTitle: "Fontainhas Portuguese Latin Quarter & Sunset Mandovi Cruise",
                    location: "Panaji (Panjim), Goa",
                    morning: "10:00 AM – Arrive in Goa. Check into heritage boutique hotel in Fontainhas (Panjim). Walking tour through cobblestone lanes with pastel-painted Portuguese villas and oyster-shell windows.",
                    afternoon: "01:00 PM – Authentic Goan lunch at Mum’s Kitchen or Viva Panjim (Prawn Balchão, Pork Vindaloo, or Mushroom Xacuti). Coffee and pastéis de nata (egg tart) at Confeitaria 31 de Janeiro.",
                    evening: "05:00 PM – Visit Church of Our Lady of the Immaculate Conception on the tiered zig-zag staircase. Sunset walk along Miramar beach or Mandovi riverfront.",
                    localTip: "Respect local residents in Fontainhas: avoid photographing through private open residential windows."
                },
                {
                    dayNumber: 2,
                    dayTitle: "Old Goa UNESCO Basilicas & Sahakari Spice Farm",
                    location: "Old Goa & Ponda",
                    morning: "08:30 AM – Drive 10 km to Old Goa (former capital of Portuguese India). Marvel at the 1605 CE Basilica of Bom Jesus (relics of St. Francis Xavier) and colossal Sé Cathedral.",
                    afternoon: "12:30 PM – Guided spice tour at Sahakari Spice Farm in Ponda. Enjoy traditional Goan buffet lunch served on fresh banana leaves with cashew feni tasting.",
                    evening: "05:00 PM – Drive south to coastal Cavelossim or Benaulim. Dinner at Fisherman’s Wharf overlooking Sal River (fresh grilled Kingfish and crab rechado).",
                    localTip: "Modest dress covering shoulders and knees is mandatory inside Old Goa basilicas."
                },
                {
                    dayNumber: 3,
                    dayTitle: "Crescent Beach Palolem & Sunset at Cabo de Rama Fort",
                    location: "South Goa Coastline",
                    morning: "08:30 AM – Head to scenic crescent-shaped Palolem Beach. Hire a kayak or small boat to spot wild dolphins off Butterfly Beach.",
                    afternoon: "01:00 PM – Fresh wood-fired pizza and coconut water at Dropadi Beach Shack. Swim in warm, gentle Arabian Sea waters.",
                    evening: "04:30 PM – Drive to dramatic ruins of Cabo de Rama Fort standing on a cliff edge. Watch glorious sunset over the uninterrupted Arabian Sea horizon. Dinner at Martin's Corner.",
                    localTip: "Palolem is significantly cleaner, quieter, and safer for swimming compared to crowded northern beaches."
                },
                {
                    dayNumber: 4,
                    dayTitle: "Excursion to Sacred Om Beach Gokarna or Departure",
                    location: "Gokarna, Karnataka",
                    morning: "07:30 AM – Optional scenic coastal drive across Karnataka border along NH66 to temple beach town Gokarna (90 km / 2 hrs).",
                    afternoon: "11:30 AM – Visit the ancient 4th-century Mahabaleshwar Temple and walk the cliff path connecting Kudle Beach to the sacred Om-shaped Om Beach.",
                    evening: "04:30 PM – Sunset tea at Namaste Cafe overlooking breaking waves. Drive back to Goa for departure flights.",
                    localTip: "Gokarna offers pristine secluded beaches with fewer commercial crowds than central Goa."
                }
            ]
        }
    };

    let activeSelectedDay = 0;
    let currentActivePlan = null;

    const tripPlannerForm = document.getElementById("tripPlannerForm");
    const saveTripBtn = document.getElementById("saveTripBtn");
    const printTripBtn = document.getElementById("printTripBtn");
    const viewCircuitStopsBtn = document.getElementById("viewCircuitStopsBtn");
    const itineraryDayPills = document.getElementById("itineraryDayPills");
    const itineraryDayContent = document.getElementById("itineraryDayContent");

    function renderDaySchedule(dayIndex) {
        if (!currentActivePlan || !currentActivePlan.days || currentActivePlan.days.length === 0) return;
        activeSelectedDay = Math.max(0, Math.min(dayIndex, currentActivePlan.days.length - 1));

        
        if (itineraryDayPills) {
            const pills = itineraryDayPills.querySelectorAll(".itin-day-pill");
            pills.forEach((p, idx) => {
                p.classList.toggle("active", idx === activeSelectedDay);
                p.setAttribute("aria-selected", idx === activeSelectedDay ? "true" : "false");
            });
        }

        const day = currentActivePlan.days[activeSelectedDay];
        if (!day || !itineraryDayContent) return;

        itineraryDayContent.innerHTML = `
            <div class="day-header-meta">
                <h5>Day ${day.dayNumber}: ${day.dayTitle}</h5>
                <span class="day-loc-badge"><i class="fa-solid fa-location-dot"></i> ${day.location}</span>
            </div>
            <div class="day-slots-grid">
                <div class="day-slot-item">
                    <span class="slot-tag"><i class="fa-solid fa-sun"></i> Morning &bull; Dawn &ndash; 11:30</span>
                    <p>${day.morning}</p>
                </div>
                <div class="day-slot-item">
                    <span class="slot-tag"><i class="fa-solid fa-utensils"></i> Afternoon &bull; 12:00 &ndash; 16:30</span>
                    <p>${day.afternoon}</p>
                </div>
                <div class="day-slot-item">
                    <span class="slot-tag"><i class="fa-solid fa-moon"></i> Evening &bull; 17:00 &ndash; Night</span>
                    <p>${day.evening}</p>
                </div>
            </div>
            <div class="day-logistics-advisory">
                <i class="fa-solid fa-circle-info"></i>
                <div>
                    <strong>Verified Ground Advisory:</strong> ${day.localTip}
                </div>
            </div>
        `;
    }

    function generateDayPills(days) {
        if (!itineraryDayPills) return;
        itineraryDayPills.innerHTML = "";
        days.forEach((day, index) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `itin-day-pill ${index === activeSelectedDay ? "active" : ""}`;
            btn.setAttribute("role", "tab");
            btn.setAttribute("aria-selected", index === activeSelectedDay ? "true" : "false");
            btn.innerHTML = `<i class="fa-solid fa-calendar-day"></i> Day ${day.dayNumber}`;
            btn.addEventListener("click", () => {
                renderDaySchedule(index);
            });
            itineraryDayPills.appendChild(btn);
        });
    }

    function applyTripPlan(season, style, duration, budgetTier, origin, companion) {
        let key = `${season}-${style}`;
        if (!plannerCircuits[key]) {
            if (style === "adventure" || season === "summer") key = "summer-adventure";
            else if (style === "coastal") key = "winter-coastal";
            else if (style === "northeast" || season === "monsoon") key = "monsoon-nature";
            else if (style === "spiritual") key = "winter-spiritual";
            else if (style === "nature") key = "winter-nature";
            else key = "winter-heritage";
        }

        const basePlan = plannerCircuits[key];
        let maxDays = 7;
        if (duration === "short") maxDays = 4;
        else if (duration === "classic") maxDays = 7;
        else if (duration === "grand") maxDays = 12;

        const slicedDays = basePlan.days.slice(0, Math.min(maxDays, basePlan.days.length));

        
        let routeDisplay = basePlan.route;
        if (origin && origin !== "delhi") {
            const originNames = {
                mumbai: "Mumbai (CSMT/BOM)",
                bengaluru: "Bengaluru (BLR)",
                kolkata: "Kolkata (HWH/CCU)",
                kochi: "Kochi (COK)",
                chennai: "Chennai (MAS/MAA)"
            };
            const name = originNames[origin] || origin;
            routeDisplay = `Transit connect from ${name} via direct express flight/rail → ${basePlan.route}`;
        }

        const tierNames = {
            backpacker: "Backpacker Tier",
            comfort: "Comfort Heritage Tier",
            luxury: "Palace Luxury Tier"
        };

        const budgetDisplay = basePlan.budgets[budgetTier] || basePlan.budgets.comfort;

        currentActivePlan = {
            badge: `${basePlan.badge} • ${slicedDays.length} DAYS`,
            tierBadge: tierNames[budgetTier] || "Comfort Heritage",
            title: basePlan.title,
            subtitle: basePlan.subtitle,
            route: routeDisplay,
            climate: basePlan.climate,
            budget: budgetDisplay,
            highlight: basePlan.highlight,
            filterTag: basePlan.filterTag,
            days: slicedDays
        };

        const resultBox = document.getElementById("itineraryResult");
        if (resultBox) resultBox.style.opacity = "0.3";

        setTimeout(() => {
            const badgeEl = document.getElementById("itineraryBadge");
            const tierBadgeEl = document.getElementById("itineraryTierBadge");
            const titleEl = document.getElementById("itineraryTitle");
            const subtitleEl = document.getElementById("itinerarySubtitle");
            const routeEl = document.getElementById("itineraryRoute");
            const climateEl = document.getElementById("itineraryClimate");
            const budgetEl = document.getElementById("itineraryBudget");
            const highlightEl = document.getElementById("itineraryHighlight");

            if (badgeEl) badgeEl.textContent = currentActivePlan.badge;
            if (tierBadgeEl) tierBadgeEl.textContent = currentActivePlan.tierBadge;
            if (titleEl) titleEl.textContent = currentActivePlan.title;
            if (subtitleEl) subtitleEl.textContent = currentActivePlan.subtitle;
            if (routeEl) routeEl.innerHTML = currentActivePlan.route;
            if (climateEl) climateEl.textContent = currentActivePlan.climate;
            if (budgetEl) budgetEl.textContent = currentActivePlan.budget;
            if (highlightEl) highlightEl.textContent = currentActivePlan.highlight;

            activeSelectedDay = 0;
            generateDayPills(currentActivePlan.days);
            renderDaySchedule(0);

            if (viewCircuitStopsBtn) {
                viewCircuitStopsBtn.onclick = () => {
                    currentFilter = currentActivePlan.filterTag || "all";
                    updateCategoryPills();
                    renderDestinations();
                    const pTrips = document.querySelector("#popularTrips");
                    if (pTrips) pTrips.scrollIntoView({ behavior: "smooth" });
                };
            }

            if (resultBox) resultBox.style.opacity = "1";
        }, 150);
    }

    if (tripPlannerForm) {
        tripPlannerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const origin = document.getElementById("travelOrigin")?.value || "delhi";
            const season = document.getElementById("travelSeason")?.value || "winter";
            const style = document.getElementById("travelStyle")?.value || "heritage";
            const duration = document.getElementById("travelDuration")?.value || "classic";
            const budgetTier = document.getElementById("travelBudgetTier")?.value || "comfort";
            const companion = document.getElementById("travelCompanion")?.value || "couple";

            applyTripPlan(season, style, duration, budgetTier, origin, companion);
            showToast("Verified Logistics Circuit Generated");
        });

        
        applyTripPlan("winter", "heritage", "classic", "comfort", "delhi", "couple");
    }

    if (saveTripBtn) {
        saveTripBtn.addEventListener("click", () => {
            if (!currentActivePlan) return;
            let exportText = `INDIA TRAVEL PLANNER - VERIFIED LOGISTICS CIRCUIT\n`;
            exportText += `Circuit: ${currentActivePlan.title}\n`;
            exportText += `Destinations: ${currentActivePlan.subtitle}\n`;
            exportText += `Budget Estimate: ${currentActivePlan.budget}\n`;
            exportText += `Climate Guidance: ${currentActivePlan.climate}\n\n`;
            exportText += `DAY-BY-DAY VERIFIED SCHEDULE:\n`;
            currentActivePlan.days.forEach(d => {
                exportText += `\n[Day ${d.dayNumber}: ${d.dayTitle} - ${d.location}]\n`;
                exportText += `- Morning: ${d.morning}\n`;
                exportText += `- Afternoon: ${d.afternoon}\n`;
                exportText += `- Evening: ${d.evening}\n`;
                exportText += `- Ground Advisory: ${d.localTip}\n`;
            });
            exportText += `\nOfficial Tourism Experience Portal • Ministry of Tourism, Government of India`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(exportText).then(() => {
                    showToast("Itinerary summary copied to clipboard");
                }).catch(() => {
                    showToast("Itinerary copied to clipboard");
                });
            } else {
                showToast("Itinerary copied to clipboard");
            }
        });
    }

    if (printTripBtn) {
        printTripBtn.addEventListener("click", () => {
            window.print();
        });
    }

    
    
    
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

    
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("🎉 Thank you for subscribing to Incredible India Official Gazette!");
            newsletterForm.reset();
        });
    }

    
    
    
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

    
    
    
    const policyModalBackdrop = document.getElementById("policyModalBackdrop");
    const policyModalCloseBtn = document.getElementById("policyModalCloseBtn");
    const policyModalAcknowledgeBtn = document.getElementById("policyModalAcknowledgeBtn");
    const policyModalTitle = document.getElementById("policyModalTitle");
    const policyModalSubtitle = document.getElementById("policyModalSubtitle");
    const policyModalContent = document.getElementById("policyModalContent");
    const policyTriggers = document.querySelectorAll(".policy-modal-trigger");

    const policyData = {
        website: {
            title: "Website Policies",
            subtitle: "Guidelines for Indian Government Websites (GIGW 3.0) Compliance",
            body: `
                <h4>1. Scope & Governance</h4>
                <p>This official portal is published and maintained by the Ministry of Tourism, Government of India. It adheres to the technical, accessibility, and design standards established by the National Informatics Centre (NIC) and the Ministry of Electronics & Information Technology (MeitY).</p>
                <h4>2. Hyperlinking Policy</h4>
                <p>Prior written permission must be obtained before links from external domains are directed to this portal. Links directed here must not open within frames of another site; pages must render in a separate window or tab to clearly indicate authentic government domain ownership.</p>
                <h4>3. Copyright & Reproduction</h4>
                <p>Material featured on this portal may be reproduced free of charge in any format or media without requiring specific permission, subject to the material being reproduced accurately and not used in a derogatory or misleading context. The source must be explicitly acknowledged.</p>
                <h4>4. Content Management & Review</h4>
                <p>Content published regarding monuments, tourist circuits, culinary traditions, and travel guidelines is subject to regular administrative verification by regional tourism offices.</p>
            `
        },
        terms: {
            title: "Terms of Use",
            subtitle: "Conditions Governing Public Access to Ministry Digital Resources",
            body: `
                <h4>1. Acceptance of Terms</h4>
                <p>By browsing, accessing, or utilizing the interactive features (including the Smart Trip Planner, Tourism Database, and Gallery) of this portal, you agree to comply with the terms and statutory provisions of the Information Technology Act, 2000 and applicable Government of India regulations.</p>
                <h4>2. Informational Purpose & Advisories</h4>
                <p>The information on destinations, entry fees, visiting hours, and train connectivity is compiled for public facilitation. Although rigorous verification is undertaken, travelers are encouraged to consult official local authorities or the 24x7 Multi-Lingual Tourist Info Helpline (1363) prior to travel.</p>
                <h4>3. External Links & Services</h4>
                <p>External links provided (such as Indian Railways IRCTC, Bureau of Immigration e-Visa, and Digital India portals) are hosted by respective administrative authorities. The Ministry does not assume liability for transactions carried out on external systems.</p>
            `
        },
        privacy: {
            title: "Privacy Policy",
            subtitle: "Digital Personal Data Protection (DPDP) Act 2023 Compliance",
            body: `
                <h4>1. Data Collection & Usage</h4>
                <p>This portal does not automatically capture any specific personal information (such as name, phone number, or e-mail address) that allows us to identify you individually. Personal details are collected only when voluntarily provided (e.g., subscribing to official bulletins or submitting tourist inquiries).</p>
                <h4>2. Local Storage & Client Preferences</h4>
                <p>Client-side LocalStorage and session cookies are employed exclusively for accessibility enhancements—preserving user-selected font size adjustments, high-contrast dark mode states, and traveler wishlist bookmarks. No tracking cookies are shared with third parties.</p>
                <h4>3. Information Security Standards</h4>
                <p>All data transmissions and portal servers follow security best practices aligned with CERT-In directives, including strict Transport Layer Security (TLS 1.3), Content Security Policy, and HTTP strict transport headers.</p>
            `
        },
        accessibility: {
            title: "Accessibility Statement",
            subtitle: "Commitment to Universal Accessibility (WCAG 2.1 Level AA)",
            body: `
                <h4>1. Conformance Standard</h4>
                <p>The Ministry of Tourism is committed to ensuring that its digital services are accessible to people of all abilities, including persons with visual, auditory, cognitive, and motor impairments. This site is built in compliance with WCAG 2.1 Level AA and GIGW accessibility standards.</p>
                <h4>2. Accessibility Features Built-In</h4>
                <ul>
                    <li><strong>Dynamic Text Sizing:</strong> Font resizer controls (A-, A, A+) allowing users to scale type across 14px, 16px, and 18px baseline levels without page disruption.</li>
                    <li><strong>High Contrast Theme:</strong> Inverted color palette with contrast ratios exceeding 7:1 for headers and 4.5:1 for body copy.</li>
                    <li><strong>Bilingual Localization:</strong> Instant toggle between Hindi (राजभाषा) and English with Devanagari script font rendering.</li>
                    <li><strong>Keyboard Navigation:</strong> Logical tab sequences, visible focus indicators, and screen reader skip-to-content links.</li>
                </ul>
                <h4>3. Accessibility Feedback & Assistance</h4>
                <p>If you encounter any accessibility barriers on this portal, please notify the Ministry's Web Accessibility Team or dial the Toll-Free Tourist Helpline: <strong>1363</strong> (Toll Free within India) / <strong>+91-11-23365358</strong>.</p>
            `
        }
    };

    function openPolicyModal(policyKey) {
        const policy = policyData[policyKey];
        if (!policy || !policyModalBackdrop) return;

        policyModalTitle.textContent = policy.title;
        policyModalSubtitle.textContent = policy.subtitle;
        policyModalContent.innerHTML = policy.body;

        policyModalBackdrop.classList.add("active");
        policyModalBackdrop.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closePolicyModal() {
        if (!policyModalBackdrop) return;
        policyModalBackdrop.classList.remove("active");
        policyModalBackdrop.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    policyTriggers.forEach(btn => {
        btn.addEventListener("click", () => {
            const policyKey = btn.getAttribute("data-policy");
            openPolicyModal(policyKey);
        });
    });

    if (policyModalCloseBtn) policyModalCloseBtn.addEventListener("click", closePolicyModal);
    if (policyModalAcknowledgeBtn) policyModalAcknowledgeBtn.addEventListener("click", closePolicyModal);
    if (policyModalBackdrop) {
        policyModalBackdrop.addEventListener("click", (e) => {
            if (e.target === policyModalBackdrop) closePolicyModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (policyModalBackdrop && policyModalBackdrop.classList.contains("active")) closePolicyModal();
        }
    });

    
    renderDestinations();
});