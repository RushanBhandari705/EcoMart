// EcoMart Products JavaScript - Clean Edition
// Features: Loading States, Toast Notifications, View Toggle, Lazy Loading, Cart Animation, Improved Zoom, Similar Products

// ==================== PRODUCT DATA ====================
const products = [
    // Bamboo Bottles Category (5 products)
    {
        id: 1,
        name: "Bamboo Water Bottle",
        description: "Eco-friendly bamboo bottle with stainless steel interior. Perfect for daily use.",
        detailedDescription: "Our Bamboo Water Bottle is crafted from sustainable bamboo and food-grade stainless steel. It's BPA-free, leak-proof, and easy to clean. The double-wall vacuum insulation keeps your beverages at the perfect temperature for hours.",
        price: 1698.30,
        originalPrice: 2040.00,
        discount: 20,
        category: "bamboo",
        image: "../assets/bamboo bottle product.jpg",
        images: [
            {src: "../assets/bamboo bottle product.jpg", label: "Full View"},
            {src: "../assets/bamboo bottle product.jpg", label: "Cap"},
            {src: "../assets/bamboo bottle product.jpg", label: "Body"},
            {src: "../assets/bamboo bottle product.jpg", label: "Base"},
            {src: "../assets/bamboo bottle product.jpg", label: "Detail"}
        ],
        stock: "in-stock",
        rating: 4.5,
        reviews: [
            { user: "EcoWarrior", rating: 5, date: "2025-01-15", comment: "Love this bottle! Keeps my water cold all day at work." },
            { user: "GreenLife", rating: 4, date: "2025-01-10", comment: "Great quality, but a bit heavy compared to plastic bottles." },
            { user: "Sarah_M", rating: 5, date: "2025-01-12", comment: "Beautiful design and very functional. Worth every penny!" },
            { user: "Mike_Jones", rating: 4, date: "2025-01-08", comment: "Good bottle, lid could be a bit tighter though." },
            { user: "NatureLover99", rating: 5, date: "2025-01-05", comment: "Perfect size for hiking. No leaks and keeps drinks cold for hours!" }
        ],
        specifications: [
            "Made from sustainable bamboo with food-grade stainless steel interior",
            "BPA-free, leak-proof design ensures safe and secure storage",
            "Double-wall vacuum insulation maintains temperature for up to 12 hours",
            "Easy-clean wide mouth opening fits ice cubes and is dishwasher safe",
            "Lightweight at 350g with 750ml capacity - perfect for daily hydration"
        ]
    },
    {
        id: 2,
        name: "Bamboo Insulated Tumbler",
        description: "Double-walled bamboo tumbler for hot and cold drinks. Stylish and sustainable.",
        detailedDescription: "Perfect for coffee or smoothies on the go. Features a spill-proof lid and natural bamboo exterior.",
        price: 2548.30,
        originalPrice: 3060.00,
        discount: 17,
        category: "bamboo",
        image: "../assets/Bamboo Insulated Tumbler.jpg",
        images: [
            {src: "../assets/Bamboo Insulated Tumbler.jpg", label: "Full View"},
            {src: "../assets/Bamboo Insulated Tumbler.jpg", label: "Lid"},
            {src: "../assets/Bamboo Insulated Tumbler.jpg", label: "Body"},
            {src: "../assets/Bamboo Insulated Tumbler.jpg", label: "Base"},
            {src: "../assets/Bamboo Insulated Tumbler.jpg", label: "Size"}
        ],
        stock: "in-stock",
        rating: 4.7,
        reviews: [
            { user: "CoffeeLover", rating: 5, date: "2025-01-20", comment: "Perfect for my morning coffee!" },
            { user: "TeaTime", rating: 5, date: "2025-01-18", comment: "Keeps my tea hot for hours during my commute." },
            { user: "OfficeWorker", rating: 4, date: "2025-01-14", comment: "Great tumbler, fits perfectly in my car cup holder." },
            { user: "BusyMom", rating: 5, date: "2025-01-11", comment: "No spills! Perfect for busy mornings with kids." },
            { user: "StudentLife", rating: 4, date: "2025-01-09", comment: "Love the bamboo look. Wish it was slightly bigger." }
        ],
        specifications: [
            "Double-walled insulation keeps drinks hot for 6 hours, cold for 12 hours",
            "Premium bamboo exterior with durable stainless steel construction",
            "Spill-proof lid with secure locking mechanism for travel",
            "450ml capacity - ideal for coffee, tea, or smoothies on the go",
            "Eco-friendly and sustainable alternative to disposable cups"
        ]
    },
    {
        id: 3,
        name: "Bamboo Sports Bottle",
        description: "Large capacity bamboo bottle perfect for sports and gym use.",
        detailedDescription: "Features a wide mouth for easy cleaning and ice cubes. Comes with a carrying loop.",
        price: 2888.30,
        originalPrice: 3400.00,
        discount: 15,
        category: "bamboo",
        image: "../assets/bamboo sports bottle.jpg",
        images: [
            {src: "../assets/bamboo sports bottle.jpg", label: "Full View"},
            {src: "../assets/bamboo sports bottle.jpg", label: "Cap"},
            {src: "../assets/bamboo sports bottle.jpg", label: "Body"},
            {src: "../assets/bamboo sports bottle.jpg", label: "Loop"},
            {src: "../assets/bamboo sports bottle.jpg", label: "Mouth"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "FitnessGuru", rating: 5, date: "2025-01-18", comment: "Great for the gym!" },
            { user: "MarathonRunner", rating: 5, date: "2025-01-16", comment: "Large capacity is perfect for long runs. Highly recommend!" },
            { user: "YogaLover", rating: 4, date: "2025-01-13", comment: "Love it but the carrying loop could be stronger." },
            { user: "GymRat", rating: 5, date: "2025-01-10", comment: "Fits perfectly in my gym bag. No leaks at all!" },
            { user: "ActiveLifestyle", rating: 4, date: "2025-01-07", comment: "Great bottle, keeps water cold during intense workouts." }
        ],
        specifications: [
            "Extra large 1000ml capacity for extended workouts and activities",
            "Wide mouth opening - easy to fill, clean, and add ice cubes",
            "Durable carrying loop for convenient transportation",
            "Made from sustainable bamboo with rust-proof stainless steel",
            "Lightweight design at 420g despite large capacity"
        ]
    },
    {
        id: 4,
        name: "Bamboo Tea Infuser Bottle",
        description: "Bamboo bottle with built-in tea infuser. Perfect for tea lovers.",
        detailedDescription: "Includes a stainless steel infuser basket. Ideal for loose leaf tea on the go.",
        price: 3398.30,
        originalPrice: 4080.00,
        discount: 17,
        category: "bamboo",
        image: "../assets/Bamboo Tea Infuser Bottle.jpg",
        images: [
            {src: "../assets/Bamboo Tea Infuser Bottle.jpg", label: "Full View"},
            {src: "../assets/Bamboo Tea Infuser Bottle.jpg", label: "Infuser"},
            {src: "../assets/Bamboo Tea Infuser Bottle.jpg", label: "Body"},
            {src: "../assets/Bamboo Tea Infuser Bottle.jpg", label: "Base"},
            {src: "../assets/Bamboo Tea Infuser Bottle.jpg", label: "Detail"}
        ],
        stock: "limited",
        rating: 4.8,
        reviews: [
            { user: "TeaAddict", rating: 5, date: "2025-01-22", comment: "Best tea bottle ever!" },
            { user: "GreenTeaFan", rating: 5, date: "2025-01-19", comment: "The infuser works perfectly. My tea tastes amazing!" },
            { user: "LooseLeafLover", rating: 5, date: "2025-01-17", comment: "Finally a bottle designed for real tea enthusiasts!" },
            { user: "TeaCeremony", rating: 4, date: "2025-01-14", comment: "Great quality, infuser could be slightly larger though." },
            { user: "ChaiMaster", rating: 5, date: "2025-01-11", comment: "Perfect for my chai tea. Keeps it hot and flavorful!" }
        ],
        specifications: [
            "Built-in stainless steel infuser basket for loose leaf tea brewing",
            "Removable infuser allows easy cleaning and versatile use",
            "500ml capacity - ideal size for individual tea servings",
            "Premium bamboo exterior with heat-retaining double-wall construction",
            "Perfect for tea lovers who prefer loose leaf over tea bags"
        ]
    },
    {
        id: 5,
        name: "Bamboo Kids Bottle",
        description: "Child-friendly bamboo bottle with fun colors. Safe and durable for kids.",
        detailedDescription: "BPA-free with an easy-grip design. Perfect size for school and activities.",
        price: 2208.30,
        originalPrice: 2550.00,
        discount: 13,
        category: "bamboo",
        image: "../assets/bamboo baby bottle.jpg",
        images: [
            {src: "../assets/bamboo baby bottle.jpg", label: "Full View"},
            {src: "../assets/bamboo baby bottle.jpg", label: "Cap"},
            {src: "../assets/bamboo baby bottle.jpg", label: "Body"},
            {src: "../assets/bamboo baby bottle.jpg", label: "Grip"},
            {src: "../assets/bamboo baby bottle.jpg", label: "Size"}
        ],
        stock: "in-stock",
        rating: 4.5,
        reviews: [
            { user: "MomOf3", rating: 5, date: "2025-01-19", comment: "My kids love these!" },
            { user: "DadLife", rating: 5, date: "2025-01-17", comment: "Perfect size for my 6-year-old. No spills in the backpack!" },
            { user: "Preschool_Teacher", rating: 4, date: "2025-01-15", comment: "Great for school. Easy for kids to open and close." },
            { user: "ParentingPro", rating: 5, date: "2025-01-12", comment: "Safe, durable, and eco-friendly. What more could you want?" },
            { user: "KidsFirst", rating: 4, date: "2025-01-09", comment: "My daughter carries it everywhere. Quality product!" }
        ],
        specifications: [
            "Child-safe BPA-free materials - completely safe for kids",
            "Easy-grip ergonomic design perfect for small hands",
            "Leak-proof lid prevents spills in backpacks and lunch boxes",
            "Compact 350ml size ideal for school, sports, and activities",
            "Lightweight at only 200g - easy for children to carry"
        ]
    },

    // Tote Bags Category (6 products)
    {
        id: 6,
        name: "Organic Cotton Tote Bag",
        description: "100% organic cotton tote with reinforced handles. Perfect for groceries.",
        detailedDescription: "Fair-trade certified cotton. Machine washable and can hold up to 20kg.",
        price: 6798.30,
        originalPrice: 8500.00,
        discount: 20,
        category: "bags",
        image: "../assets/totebag.png",
        images: [
            {src: "../assets/totebag.png", label: "Full View"},
            {src: "../assets/totebag.png", label: "Handles"},
            {src: "../assets/totebag.png", label: "Interior"},
            {src: "../assets/totebag.png", label: "Bottom"},
            {src: "../assets/totebag.png", label: "Side"}
        ],
        stock: "in-stock",
        rating: 4.8,
        reviews: [
            { user: "SustainableShopper", rating: 5, date: "2025-01-20", comment: "Very sturdy!" },
            { user: "EcoMom", rating: 5, date: "2025-01-18", comment: "Use it for groceries every week. Still looks brand new!" },
            { user: "ZeroWasteLife", rating: 4, date: "2025-01-15", comment: "Great bag, would love more color options though." },
            { user: "FarmersMarketFan", rating: 5, date: "2025-01-12", comment: "Perfect for farmers market runs. Holds so much!" },
            { user: "GreenGroceries", rating: 5, date: "2025-01-09", comment: "Machine washed multiple times and still perfect!" }
        ],
        specifications: [
            "100% organic fair-trade certified cotton - ethically sourced",
            "Reinforced double-stitched handles for maximum durability",
            "Machine washable for easy cleaning and maintenance",
            "Holds up to 20kg - perfect for heavy grocery shopping",
            "Spacious 40cm x 35cm x 15cm dimensions with plenty of room"
        ]
    },
    {
        id: 7,
        name: "Hemp Messenger Bag",
        description: "Durable hemp bag with adjustable strap. Perfect for work or travel.",
        detailedDescription: "Features multiple pockets and compartments. Water-resistant and naturally antimicrobial.",
        price: 7650.00,
        originalPrice: 9350.00,
        discount: 18,
        category: "bags",
        image: "../assets/hemp bag.jpg",
        images: [
            {src: "../assets/hemp bag.jpg", label: "Full View"},
            {src: "../assets/hemp bag.jpg", label: "Strap"},
            {src: "../assets/hemp bag.jpg", label: "Pockets"},
            {src: "../assets/hemp bag.jpg", label: "Zipper"},
            {src: "../assets/hemp bag.jpg", label: "Interior"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "WorkCommuter", rating: 5, date: "2025-01-17", comment: "Perfect for daily commute!" },
            { user: "TravelBug", rating: 5, date: "2025-01-15", comment: "Great bag for work and weekend trips!" },
            { user: "OfficeWorker_Jane", rating: 4, date: "2025-01-13", comment: "Love the pockets. Very organized!" },
            { user: "DigitalNomad", rating: 5, date: "2025-01-10", comment: "Water-resistant feature saved my laptop once!" },
            { user: "Student_Alex", rating: 4, date: "2025-01-08", comment: "Comfortable for carrying books and laptop." }
        ],
        specifications: [
            "Made from 100% sustainable hemp - naturally durable and eco-friendly",
            "Multiple pockets and compartments for organization",
            "Adjustable padded strap for comfort during long commutes",
            "Water-resistant and naturally antimicrobial properties",
            "Perfect size at 35cm x 28cm x 10cm for work or travel"
        ]
    },
    {
        id: 8,
        name: "Recycled Plastic Backpack",
        description: "Stylish backpack made from recycled ocean plastic. Eco and functional.",
        detailedDescription: "Padded laptop compartment and ergonomic straps. Helps clean our oceans!",
        price: 11050.00,
        originalPrice: 13600.00,
        discount: 19,
        category: "bags",
        image: "../assets/Recycled Plastic Backpack.jpg",
        images: [
            {src: "../assets/Recycled Plastic Backpack.jpg", label: "Full View"},
            {src: "../assets/Recycled Plastic Backpack.jpg", label: "Straps"},
            {src: "../assets/Recycled Plastic Backpack.jpg", label: "Compartments"},
            {src: "../assets/Recycled Plastic Backpack.jpg", label: "Laptop Sleeve"},
            {src: "../assets/Recycled Plastic Backpack.jpg", label: "Zippers"}
        ],
        stock: "in-stock",
        rating: 4.9,
        reviews: [
            { user: "TechStudent", rating: 5, date: "2025-01-23", comment: "Love the laptop protection!" },
            { user: "EcoTechie", rating: 5, date: "2025-01-21", comment: "Amazing! Made from ocean plastic and looks stylish!" },
            { user: "CollegeLife", rating: 5, date: "2025-01-19", comment: "Fits all my textbooks and my 15-inch laptop perfectly!" },
            { user: "RemoteWorker", rating: 4, date: "2025-01-16", comment: "Very comfortable straps. Minor issue with side pocket zipper." },
            { user: "GreenCommuter", rating: 5, date: "2025-01-14", comment: "Feel good knowing I'm helping clean the oceans!" }
        ],
        specifications: [
            "Made from recycled ocean plastic - helps clean our planet",
            "Padded laptop compartment fits up to 15-inch laptops safely",
            "Ergonomic padded shoulder straps for comfortable all-day wear",
            "Multiple compartments including water bottle pockets",
            "Large 45cm x 30cm x 15cm capacity for all your essentials"
        ]
    },
    {
        id: 9,
        name: "Canvas Beach Tote",
        description: "Large canvas tote perfect for beach days. Water-resistant lining.",
        detailedDescription: "Spacious design with zippered closure. Includes internal pockets for valuables.",
        price: 5440.00,
        originalPrice: 6460.00,
        discount: 16,
        category: "bags",
        image: "../assets/Canvas Beach Tote.jpg",
        images: [
            {src: "../assets/Canvas Beach Tote.jpg", label: "Full View"},
            {src: "../assets/Canvas Beach Tote.jpg", label: "Handles"},
            {src: "../assets/Canvas Beach Tote.jpg", label: "Interior"},
            {src: "../assets/Canvas Beach Tote.jpg", label: "Pockets"},
            {src: "../assets/Canvas Beach Tote.jpg", label: "Zipper"}
        ],
        stock: "in-stock",
        rating: 4.5,
        reviews: [
            { user: "BeachLover", rating: 5, date: "2025-01-22", comment: "Perfect for beach days!" },
            { user: "SummerVibes", rating: 5, date: "2025-01-20", comment: "Love the water-resistant lining. Keeps my stuff dry!" },
            { user: "Vacationer", rating: 4, date: "2025-01-18", comment: "Great tote! Wish it came in more colors." },
            { user: "FamilyDay", rating: 5, date: "2025-01-15", comment: "Holds everything for a family beach trip!" },
            { user: "SunSeeker", rating: 4, date: "2025-01-12", comment: "Good quality canvas. Very spacious!" }
        ],
        specifications: [
            "Extra large canvas design perfect for beach outings",
            "Water-resistant lining protects contents from splashes and sand",
            "Zippered main closure keeps belongings secure",
            "Internal pockets for phones, keys, and valuables",
            "Durable construction with reinforced handles for heavy loads"
        ]
    },
    {
        id: 10,
        name: "Jute Shopping Bag",
        description: "Natural jute bag with leather handles. Stylish and sustainable.",
        detailedDescription: "Perfect for farmers markets and groceries. Biodegradable and compostable.",
        price: 4760.00,
        originalPrice: 5950.00,
        discount: 20,
        category: "bags",
        image: "../assets/Jute Shopping Bag.jpg",
        images: [
            {src: "../assets/Jute Shopping Bag.jpg", label: "Full View"},
            {src: "../assets/Jute Shopping Bag.jpg", label: "Handles"},
            {src: "../assets/Jute Shopping Bag.jpg", label: "Weave"},
            {src: "../assets/Jute Shopping Bag.jpg", label: "Bottom"},
            {src: "../assets/Jute Shopping Bag.jpg", label: "Side"}
        ],
        stock: "in-stock",
        rating: 4.4,
        reviews: [
            { user: "FashionForward", rating: 5, date: "2025-01-24", comment: "So stylish and sustainable!" },
            { user: "TrendSetter", rating: 5, date: "2025-01-21", comment: "Gets compliments everywhere I go!" },
            { user: "StyleIcon", rating: 4, date: "2025-01-19", comment: "Beautiful design. Leather alternative is excellent!" },
            { user: "VeganFashion", rating: 5, date: "2025-01-16", comment: "Finally a vegan leather bag that looks luxurious!" },
            { user: "UrbanChic", rating: 5, date: "2025-01-13", comment: "Perfect for work or evening out. Very versatile!" }
        ],
        specifications: [
            "Premium vegan leather - cruelty-free and sustainable",
            "Sleek minimalist design perfect for professional settings",
            "Multiple internal compartments for organized storage",
            "Adjustable strap converts from shoulder to crossbody",
            "Durable construction that looks and feels like real leather"
        ]
    },
    {
        id: 11,
        name: "Minimalist Cotton Tote",
        description: "Simple, elegant cotton tote. Perfect for everyday use.",
        detailedDescription: "Lightweight and foldable. Fits easily in your purse or car.",
        price: 3060.00,
        originalPrice: 3740.00,
        discount: 18,
        category: "bags",
        image: "../assets/Minimalist Cotton Tote.jpg",
        images: [
            {src: "../assets/Minimalist Cotton Tote.jpg", label: "Full View"},
            {src: "../assets/Minimalist Cotton Tote.jpg", label: "Handles"},
            {src: "../assets/Minimalist Cotton Tote.jpg", label: "Folded"},
            {src: "../assets/Minimalist Cotton Tote.jpg", label: "Interior"},
            {src: "../assets/Minimalist Cotton Tote.jpg", label: "Detail"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "MarketShopper", rating: 5, date: "2025-01-23", comment: "Love this bag!" },
            { user: "FoodieLove", rating: 5, date: "2025-01-20", comment: "Perfect for farmers market hauls!" },
            { user: "EcoChef", rating: 4, date: "2025-01-18", comment: "Great bag. Handles could be slightly longer." },
            { user: "OrganicLife", rating: 5, date: "2025-01-15", comment: "Holds so much produce! Very sturdy!" },
            { user: "LocalFirst", rating: 5, date: "2025-01-12", comment: "My go-to bag for local shopping!" }
        ],
        specifications: [
            "Made from sustainably sourced jute fiber",
            "Natural biodegradable material - returns to earth",
            "Strong woven construction holds heavy items",
            "Open top design for easy loading and unloading",
            "Perfect for groceries, farmers markets, and daily shopping"
        ]
    },

    // Kitchen Category (10 products)
    {
        id: 12,
        name: "Reusable Bamboo Utensil Set",
        description: "Complete set of bamboo utensils with carrying case.",
        detailedDescription: "Includes fork, knife, spoon, and chopsticks. Lightweight and durable.",
        price: 3740.00,
        originalPrice: 3740.00,
        discount: 0,
        category: "kitchen",
        image: "../assets/bambooutiset.png",
        images: [
            {src: "../assets/bambooutiset.png", label: "Full Set"},
            {src: "../assets/bambooutiset.png", label: "Fork"},
            {src: "../assets/bambooutiset.png", label: "Knife"},
            {src: "../assets/bambooutiset.png", label: "Spoon"},
            {src: "../assets/bambooutiset.png", label: "Case"}
        ],
        stock: "in-stock",
        rating: 4.3,
        reviews: [
            { user: "ZeroWasteTraveler", rating: 5, date: "2025-01-18", comment: "Essential for my kit!" }
        ],
        specifications: {
            material: "100% Natural Bamboo",
            contents: "Fork, Knife, Spoon, Chopsticks"
        }
    },
    {
        id: 13,
        name: "Beeswax Food Wraps (3-Pack)",
        description: "Reusable beeswax wraps for sustainable food storage.",
        detailedDescription: "Made with organic cotton and beeswax. Washable and reusable for up to a year.",
        price: 2380.00,
        originalPrice: 3051.50,
        discount: 22,
        category: "kitchen",
        image: "../assets/Beeswax Food Wraps (3-Pack).jpg",
        images: [
            {src: "../assets/Beeswax Food Wraps (3-Pack).jpg", label: "Full Set"},
            {src: "../assets/Beeswax Food Wraps (3-Pack).jpg", label: "Small"},
            {src: "../assets/Beeswax Food Wraps (3-Pack).jpg", label: "Medium"},
            {src: "../assets/Beeswax Food Wraps (3-Pack).jpg", label: "Large"},
            {src: "../assets/Beeswax Food Wraps (3-Pack).jpg", label: "In Use"}
        ],
        stock: "limited",
        rating: 4.7,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 14,
        name: "Stainless Steel Straws Set",
        description: "Set of 4 stainless steel straws with cleaning brush.",
        detailedDescription: "Includes 2 straight and 2 bent straws. Dishwasher safe.",
        price: 2040.00,
        originalPrice: 2550.00,
        discount: 20,
        category: "kitchen",
        image: "../assets/steelstraw.png",
        images: [
            {src: "../assets/steelstraw.png", label: "Full Set"},
            {src: "../assets/steelstraw.png", label: "Straight"},
            {src: "../assets/steelstraw.png", label: "Bent"},
            {src: "../assets/steelstraw.png", label: "Brush"},
            {src: "../assets/steelstraw.png", label: "Tips"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 15,
        name: "Glass Food Storage Containers",
        description: "Set of 5 glass containers with bamboo lids.",
        detailedDescription: "Microwave and freezer safe. BPA and PVC free.",
        price: 5950.00,
        originalPrice: 7627.90,
        discount: 22,
        category: "kitchen",
        image: "../assets/foodcontainer.png",
        images: [
            {src: "../assets/foodcontainer.png", label: "Full Set"},
            {src: "../assets/foodcontainer.png", label: "Large"},
            {src: "../assets/foodcontainer.png", label: "Medium"},
            {src: "../assets/foodcontainer.png", label: "Small"},
            {src: "../assets/foodcontainer.png", label: "Lids"}
        ],
        stock: "out-of-stock",
        rating: 4.9,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 16,
        name: "Bamboo Cutting Board Set",
        description: "Set of 3 bamboo cutting boards in different sizes.",
        detailedDescription: "Knife-friendly and naturally antibacterial. Easy to clean and maintain.",
        price: 7140.00,
        originalPrice: 8500.00,
        discount: 16,
        category: "kitchen",
        image: "../assets/Bamboo Cutting Board Set.jpg",
        images: [
            {src: "../assets/Bamboo Cutting Board Set.jpg", label: "Full Set"},
            {src: "../assets/Bamboo Cutting Board Set.jpg", label: "Large Board"},
            {src: "../assets/Bamboo Cutting Board Set.jpg", label: "Medium Board"},
            {src: "../assets/Bamboo Cutting Board Set.jpg", label: "Small Board"},
            {src: "../assets/Bamboo Cutting Board Set.jpg", label: "Detail"}
        ],
        stock: "in-stock",
        rating: 4.7,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 17,
        name: "Silicone Food Bags (4-Pack)",
        description: "Reusable silicone bags for food storage. Freezer and microwave safe.",
        detailedDescription: "Leakproof and airtight. Great for meal prep and leftovers.",
        price: 4760.00,
        originalPrice: 5950.00,
        discount: 20,
        category: "kitchen",
        image: "../assets/Silicone Food Bags (4-Pack).jpg",
        images: [
            {src: "../assets/Silicone Food Bags (4-Pack).jpg", label: "Full Set"},
            {src: "../assets/Silicone Food Bags (4-Pack).jpg", label: "Large Bag"},
            {src: "../assets/Silicone Food Bags (4-Pack).jpg", label: "Medium Bag"},
            {src: "../assets/Silicone Food Bags (4-Pack).jpg", label: "Seal"},
            {src: "../assets/Silicone Food Bags (4-Pack).jpg", label: "In Use"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 18,
        name: "Compostable Dish Sponges (6-Pack)",
        description: "Plant-based sponges that are 100% compostable.",
        detailedDescription: "Made from coconut husk and cellulose. Durable and long-lasting.",
        price: 2720.00,
        originalPrice: 3400.00,
        discount: 20,
        category: "kitchen",
        image: "../assets/Compostable Dish Sponges (6-Pack).jpg",
        images: [
            {src: "../assets/Compostable Dish Sponges (6-Pack).jpg", label: "Full Pack"},
            {src: "../assets/Compostable Dish Sponges (6-Pack).jpg", label: "Single Sponge"},
            {src: "../assets/Compostable Dish Sponges (6-Pack).jpg", label: "Texture"},
            {src: "../assets/Compostable Dish Sponges (6-Pack).jpg", label: "In Use"},
            {src: "../assets/Compostable Dish Sponges (6-Pack).jpg", label: "Wet"}
        ],
        stock: "in-stock",
        rating: 4.4,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 19,
        name: "Ceramic Pour-Over Coffee Set",
        description: "Handcrafted ceramic pour-over coffee maker with reusable filter.",
        detailedDescription: "Includes ceramic dripper and stainless steel filter. Makes perfect coffee.",
        price: 6460.00,
        originalPrice: 7650.00,
        discount: 16,
        category: "kitchen",
        image: "../assets/Ceramic Pour-Over Coffee Set.jpg",
        images: [
            {src: "../assets/Ceramic Pour-Over Coffee Set.jpg", label: "Full Set"},
            {src: "../assets/Ceramic Pour-Over Coffee Set.jpg", label: "Dripper"},
            {src: "../assets/Ceramic Pour-Over Coffee Set.jpg", label: "Filter"},
            {src: "../assets/Ceramic Pour-Over Coffee Set.jpg", label: "In Use"},
            {src: "../assets/Ceramic Pour-Over Coffee Set.jpg", label: "Detail"}
        ],
        stock: "in-stock",
        rating: 4.8,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 20,
        name: "Wooden Salad Bowl Set",
        description: "Large wooden salad bowl with serving utensils.",
        detailedDescription: "Hand-finished acacia wood. Beautiful and functional for any table.",
        price: 8840.00,
        originalPrice: 11050.00,
        discount: 20,
        category: "kitchen",
        image: "../assets/Wooden Salad Bowl Set.jpg",
        images: [
            {src: "../assets/Wooden Salad Bowl Set.jpg", label: "Full Set"},
            {src: "../assets/Wooden Salad Bowl Set.jpg", label: "Bowl"},
            {src: "../assets/Wooden Salad Bowl Set.jpg", label: "Servers"},
            {src: "../assets/Wooden Salad Bowl Set.jpg", label: "Grain"},
            {src: "../assets/Wooden Salad Bowl Set.jpg", label: "In Use"}
        ],
        stock: "limited",
        rating: 4.9,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 21,
        name: "Eco Dish Soap Bar",
        description: "Zero-waste solid dish soap. Lasts 3x longer than liquid soap.",
        detailedDescription: "Made with plant-based ingredients. Cuts through grease effectively.",
        price: 1530.00,
        originalPrice: 2040.00,
        discount: 25,
        category: "kitchen",
        image: "../assets/Eco Dish Soap Bar.jpg",
        images: [
            {src: "../assets/Eco Dish Soap Bar.jpg", label: "Full View"},
            {src: "../assets/Eco Dish Soap Bar.jpg", label: "In Use"},
            {src: "../assets/Eco Dish Soap Bar.jpg", label: "Lather"},
            {src: "../assets/Eco Dish Soap Bar.jpg", label: "Size"},
            {src: "../assets/Eco Dish Soap Bar.jpg", label: "Package"}
        ],
        stock: "in-stock",
        rating: 4.5,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },

    // Personal Care Category (9 products)
    {
        id: 22,
        name: "Bamboo Toothbrush (4-Pack)",
        description: "Biodegradable bamboo toothbrushes with soft bristles.",
        detailedDescription: "BPA-free charcoal-infused bristles. Eco-friendly dental care.",
        price: 1360.00,
        originalPrice: 1870.00,
        discount: 27,
        category: "personal",
        image: "../assets/Bamboo Toothbrush (4-Pack).jpg",
        images: [
            {src: "../assets/Bamboo Toothbrush (4-Pack).jpg", label: "Full Pack"},
            {src: "../assets/Bamboo Toothbrush (4-Pack).jpg", label: "Single Brush"},
            {src: "../assets/Bamboo Toothbrush (4-Pack).jpg", label: "Bristles"},
            {src: "../assets/Bamboo Toothbrush (4-Pack).jpg", label: "Handle"},
            {src: "../assets/Bamboo Toothbrush (4-Pack).jpg", label: "Logo"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 23,
        name: "Organic Shampoo Bar",
        description: "Zero-waste shampoo bar for all hair types. Plastic-free.",
        detailedDescription: "Made with organic oils and botanicals. Lasts 60+ washes.",
        price: 2210.00,
        originalPrice: 2720.00,
        discount: 19,
        category: "personal",
        image: "../assets/Organic Shampoo Bar.jpg",
        images: [
            {src: "../assets/Organic Shampoo Bar.jpg", label: "Full View"},
            {src: "../assets/Organic Shampoo Bar.jpg", label: "Texture"},
            {src: "../assets/Organic Shampoo Bar.jpg", label: "Lather"},
            {src: "../assets/Organic Shampoo Bar.jpg", label: "Size"},
            {src: "../assets/Organic Shampoo Bar.jpg", label: "Ingredients"}
        ],
        stock: "in-stock",
        rating: 4.7,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 24,
        name: "Reusable Makeup Remover Pads",
        description: "Soft bamboo pads for gentle makeup removal. Machine washable.",
        detailedDescription: "Set of 12 pads with laundry bag. Replaces 3000+ disposable pads.",
        price: 3060.00,
        originalPrice: 3740.00,
        discount: 18,
        category: "personal",
        image: "../assets/Reusable Makeup Remover Pads.jpg",
        images: [
            {src: "../assets/Reusable Makeup Remover Pads.jpg", label: "Full Set"},
            {src: "../assets/Reusable Makeup Remover Pads.jpg", label: "Pads"},
            {src: "../assets/Reusable Makeup Remover Pads.jpg", label: "Texture"},
            {src: "../assets/Reusable Makeup Remover Pads.jpg", label: "Bag"},
            {src: "../assets/Reusable Makeup Remover Pads.jpg", label: "In Use"}
        ],
        stock: "in-stock",
        rating: 4.8,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 25,
        name: "Natural Deodorant Cream",
        description: "Aluminum-free natural deodorant in glass jar.",
        detailedDescription: "Long-lasting protection with essential oils. Sensitive skin friendly.",
        price: 2550.00,
        originalPrice: 3060.00,
        discount: 17,
        category: "personal",
        image: "../assets/Natural Deodorant Cream.jpg",
        images: [
            {src: "../assets/Natural Deodorant Cream.jpg", label: "Full View"},
            {src: "../assets/Natural Deodorant Cream.jpg", label: "Texture"},
            {src: "../assets/Natural Deodorant Cream.jpg", label: "Jar"},
            {src: "../assets/Natural Deodorant Cream.jpg", label: "Application"},
            {src: "../assets/Natural Deodorant Cream.jpg", label: "Ingredients"}
        ],
        stock: "in-stock",
        rating: 4.5,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 26,
        name: "Konjac Facial Sponge Set",
        description: "Natural konjac sponges for gentle exfoliation.",
        detailedDescription: "Set of 3 for face and body. Biodegradable and compostable.",
        price: 2040.00,
        originalPrice: 2550.00,
        discount: 20,
        category: "personal",
        image: "../assets/Konjac Facial Sponge Set.jpg",
        images: [
            {src: "../assets/Konjac Facial Sponge Set.jpg", label: "Full Set"},
            {src: "../assets/Konjac Facial Sponge Set.jpg", label: "Face Sponge"},
            {src: "../assets/Konjac Facial Sponge Set.jpg", label: "Body Sponge"},
            {src: "../assets/Konjac Facial Sponge Set.jpg", label: "Texture"},
            {src: "../assets/Konjac Facial Sponge Set.jpg", label: "Wet"}
        ],
        stock: "in-stock",
        rating: 4.6,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 27,
        name: "Organic Body Butter",
        description: "Rich, creamy body butter in recyclable tin. Vegan and cruelty-free.",
        detailedDescription: "Made with shea butter and coconut oil. Deeply moisturizing.",
        price: 3740.00,
        originalPrice: 4760.00,
        discount: 21,
        category: "personal",
        image: "../assets/Organic Body Butter.jpg",
        images: [
            {src: "../assets/Organic Body Butter.jpg", label: "Full View"},
            {src: "../assets/Organic Body Butter.jpg", label: "Texture"},
            {src: "../assets/Organic Body Butter.jpg", label: "Tin"},
            {src: "../assets/Organic Body Butter.jpg", label: "Application"},
            {src: "../assets/Organic Body Butter.jpg", label: "Ingredients"}
        ],
        stock: "limited",
        rating: 4.9,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 28,
        name: "Solid Conditioner Bar",
        description: "Concentrated conditioner bar for silky smooth hair.",
        detailedDescription: "Enriched with argan oil and keratin. Lasts 80+ washes.",
        price: 2380.00,
        originalPrice: 2890.00,
        discount: 18,
        category: "personal",
        image: "../assets/Solid Conditioner Bar.jpg",
        images: [
            {src: "../assets/Solid Conditioner Bar.jpg", label: "Full View"},
            {src: "../assets/Solid Conditioner Bar.jpg", label: "Texture"},
            {src: "../assets/Solid Conditioner Bar.jpg", label: "Application"},
            {src: "../assets/Solid Conditioner Bar.jpg", label: "Size"},
            {src: "../assets/Solid Conditioner Bar.jpg", label: "Result"}
        ],
        stock: "in-stock",
        rating: 4.7,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 29,
        name: "Reusable Safety Razor",
        description: "Classic safety razor with replaceable blades. Plastic-free shaving.",
        detailedDescription: "Precision-engineered for a close shave. Includes 10 blades.",
        price: 5440.00,
        originalPrice: 6800.00,
        discount: 20,
        category: "personal",
        image: "../assets/Reusable Safety Razor.jpg",
        images: [
            {src: "../assets/Reusable Safety Razor.jpg", label: "Full View"},
            {src: "../assets/Reusable Safety Razor.jpg", label: "Handle"},
            {src: "../assets/Reusable Safety Razor.jpg", label: "Head"},
            {src: "../assets/Reusable Safety Razor.jpg", label: "Blades"},
            {src: "../assets/Reusable Safety Razor.jpg", label: "Detail"}
        ],
        stock: "in-stock",
        rating: 4.8,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    },
    {
        id: 30,
        name: "Essential Oil Roller Set",
        description: "Set of 6 essential oil rollers for wellness and relaxation.",
        detailedDescription: "Lavender, peppermint, eucalyptus and more. Portable and convenient.",
        price: 4760.00,
        originalPrice: 5950.00,
        discount: 20,
        category: "personal",
        image: "../assets/Essential Oil Roller Set.jpg",
        images: [
            {src: "../assets/Essential Oil Roller Set.jpg", label: "Full Set"},
            {src: "../assets/Essential Oil Roller Set.jpg", label: "Single Roller"},
            {src: "../assets/Essential Oil Roller Set.jpg", label: "Applicator"},
            {src: "../assets/Essential Oil Roller Set.jpg", label: "Labels"},
            {src: "../assets/Essential Oil Roller Set.jpg", label: "In Use"}
        ],
        stock: "in-stock",
        rating: 4.7,
        reviews: [
            { user: "HappyCustomer", rating: 5, date: "2025-01-20", comment: "Excellent product! Highly recommend!" },
            { user: "EcoConsumer", rating: 5, date: "2025-01-18", comment: "Great quality and sustainable. Love it!" },
            { user: "GreenLiving", rating: 4, date: "2025-01-15", comment: "Good product, slightly expensive but worth it." },
            { user: "NatureFriend", rating: 5, date: "2025-01-12", comment: "Perfect addition to my eco-friendly lifestyle!" },
            { user: "SustainableChoice", rating: 4, date: "2025-01-09", comment: "Very satisfied with this purchase!" }
        ],
        specifications: [
            "Made from sustainable and eco-friendly materials",
            "Durable construction for long-lasting use",
            "Easy to clean and maintain",
            "Perfect for daily use and special occasions",
            "Contributes to reducing environmental impact"
        ]
    }
];

// ==================== STATE MANAGEMENT ====================
let cart = JSON.parse(localStorage.getItem('ecomart_cart')) || [];
let currentPage = 1;
const productsPerPage = 9;
let filteredProducts = [...products];
let selectedCategory = 'all';
let currentSort = 'recommended';
let viewMode = localStorage.getItem('ecomart_viewMode') || 'grid';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    showLoadingSkeletons();
    
    setTimeout(() => {
        setupEventListeners();
        renderProducts();
        updateCartBadge();
        renderPagination();
        setupLazyLoading();
        setViewMode(viewMode);
        hideLoadingSkeletons();
    }, 800);
}

// ==================== LOADING SKELETONS ====================
function showLoadingSkeletons() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    for (let i = 0; i < productsPerPage; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-price"></div>
            </div>
        `;
        grid.appendChild(skeleton);
    }
}

function hideLoadingSkeletons() {
    // Skeletons will be replaced by actual products
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.success}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-close">&times;</div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    const dismissTimeout = setTimeout(() => removeToast(toast), 3000);
    
    toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(dismissTimeout);
        removeToast(toast);
    });
}

function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
}

// ==================== VIEW MODE TOGGLE ====================
function setViewMode(mode) {
    viewMode = mode;
    localStorage.setItem('ecomart_viewMode', mode);
    
    const grid = document.getElementById('productsGrid');
    const buttons = document.querySelectorAll('.view-toggle-btn');
    
    buttons.forEach(btn => {
        if (btn.dataset.view === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (mode === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// ==================== LAZY LOADING ====================
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== CART FLYING ANIMATION ====================
function flyToCart(productImage, event) {
    const imgClone = document.createElement('img');
    imgClone.src = productImage;
    imgClone.className = 'flying-item';
    
    const rect = event.target.getBoundingClientRect();
    imgClone.style.left = rect.left + 'px';
    imgClone.style.top = rect.top + 'px';
    
    document.body.appendChild(imgClone);
    
    const cartIcon = document.getElementById('cartIcon');
    const cartRect = cartIcon.getBoundingClientRect();
    
    setTimeout(() => {
        imgClone.style.left = cartRect.left + 'px';
        imgClone.style.top = cartRect.top + 'px';
    }, 10);
    
    setTimeout(() => {
        imgClone.remove();
        document.getElementById('cartBadge').classList.add('cart-badge-pulse');
        setTimeout(() => {
            document.getElementById('cartBadge').classList.remove('cart-badge-pulse');
        }, 500);
    }, 1000);
}

// ==================== PRODUCT RENDERING ====================
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);
    
    pageProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductDetail(product);
    
    const stockClass = product.stock === 'in-stock' ? 'in-stock' : 
                       product.stock === 'limited' ? 'limited-stock' : 'out-of-stock';
    const stockText = product.stock === 'in-stock' ? '✓ In Stock' : 
                      product.stock === 'limited' ? '⚠ Limited Stock' : '✕ Out of Stock';
    
    card.innerHTML = `
        ${product.discount > 0 ? `<div class="discount-badge">SAVE ${product.discount}%</div>` : ''}
        <div class="stock-indicator ${stockClass}">${stockText}</div>
        
        <img class="product-image" src="${product.image}" alt="${product.name}">
        
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="review-count">(${product.reviews?.length || 0})</span>
            </div>
            
            <div class="product-price">
                ${product.discount > 0 ? `
                    <div class="original-price">NPR ${product.originalPrice.toFixed(2)}</div>
                    <div class="discounted-price">NPR ${product.price.toFixed(2)}</div>
                ` : `
                    <div class="regular-price">NPR ${product.price.toFixed(2)}</div>
                `}
            </div>
            
            <div class="product-actions">
                <button class="add-to-cart-btn" 
                        onclick="addToCart(${product.id}, event)" 
                        ${product.stock === 'out-of-stock' ? 'disabled' : ''}>
                    ${product.stock === 'out-of-stock' ? 'Out of Stock' : '🛒 Add to Cart'}
                </button>
                <button class="view-btn" onclick="openProductDetail(${JSON.stringify(product).replace(/"/g, '&quot;')}, event)">
                    View Details
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? '' : 'empty'}">★</span>`;
    }
    return stars;
}

// ==================== SIMILAR PRODUCTS ====================
function getRandomProducts(currentProduct, count = 4) {
    // Get all products except the current one
    const availableProducts = products.filter(p => p.id !== currentProduct.id);
    
    // Shuffle the array using Fisher-Yates algorithm
    const shuffled = [...availableProducts];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
}

// ==================== CART FUNCTIONALITY ====================
function addToCart(productId, event) {
    event.stopPropagation();
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('ecomart_cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartPopup();
    
    flyToCart(product.image, event);
    showToast('Added to Cart', `${product.name} added to your cart`, 'success');
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

function updateCartPopup() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotal.textContent = 'Total: NPR 0.00';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">NPR ${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `Total: NPR ${total.toFixed(2)}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
        showToast('Removed from Cart', 'Item removed from your cart', 'info');
    }
    
    localStorage.setItem('ecomart_cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartPopup();
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.setItem('ecomart_cart', JSON.stringify(cart));
        updateCartBadge();
        updateCartPopup();
        showToast('Cart Cleared', 'All items removed from cart', 'info');
    }
}

// ==================== PAGINATION ====================
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = `
        <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Prev
        </button>
    `;
    
    const maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="page-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="page-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    paginationHTML += `
        <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next →
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== FILTERING & SORTING ====================
function filterByCategory(category) {
    selectedCategory = category;
    currentPage = 1;
    applyFiltersAndSort();
    
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
        if (li.dataset.category === category) {
            li.classList.add('active');
        }
    });
}

function sortProducts(sortType) {
    currentSort = sortType;
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    if (selectedCategory === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => p.category === selectedCategory);
    }
    
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-az':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-za':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            filteredProducts = [...products].filter(p => 
                selectedCategory === 'all' || p.category === selectedCategory
            );
    }
    
    renderProducts();
    renderPagination();
}

function resetFilters() {
    selectedCategory = 'all';
    currentSort = 'recommended';
    currentPage = 1;
    
    document.getElementById('sortSelect').value = 'recommended';
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
        if (li.dataset.category === 'all') {
            li.classList.add('active');
        }
    });
    
    applyFiltersAndSort();
    showToast('Filters Reset', 'All filters have been reset', 'info');
}

// ==================== SEARCH FUNCTIONALITY ====================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchButton = document.querySelector('.search-button');
    
    function performSearch(query) {
        query = query.toLowerCase().trim();
        
        if (query.length < 2) {
            searchSuggestions.style.display = 'none';
            return;
        }
        
        const results = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            searchSuggestions.innerHTML = '<div class="suggestion-item no-results">No products found</div>';
        } else {
            searchSuggestions.innerHTML = results.slice(0, 5).map(product => `
                <div class="suggestion-item" data-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                    <div class="suggestion-info">
                        <div class="suggestion-name">${product.name}</div>
                        <div class="suggestion-price">NPR ${product.price.toFixed(2)}</div>
                    </div>
                </div>
            `).join('');
            
            // Add click listeners to suggestion items
            searchSuggestions.querySelectorAll('.suggestion-item[data-product-id]').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = parseInt(item.dataset.productId);
                    const product = products.find(p => p.id === productId);
                    if (product) {
                        openProductDetail(product);
                        searchSuggestions.style.display = 'none';
                        searchInput.value = '';
                    }
                });
            });
        }
        
        searchSuggestions.style.display = 'block';
    }
    
    function filterProductsBySearch(query) {
        query = query.toLowerCase().trim();
        
        if (query.length < 2) {
            // Reset to show all products
            selectedCategory = 'all';
            applyFiltersAndSort();
            return;
        }
        
        // Filter products based on search query
        filteredProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        
        currentPage = 1;
        renderProducts();
        renderPagination();
        
        // Show toast with results count
        if (filteredProducts.length === 0) {
            showToast('No Results', 'No products found matching your search', 'info');
        } else {
            showToast('Search Results', `Found ${filteredProducts.length} product(s)`, 'success');
        }
    }
    
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.toLowerCase().trim();
            filterProductsBySearch(query);
            searchSuggestions.style.display = 'none';
            searchInput.blur();
        }
    });
    
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        filterProductsBySearch(query);
        searchSuggestions.style.display = 'none';
        searchInput.blur();
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target) && !searchButton.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
}

// ==================== PRODUCT DETAIL MODAL ====================
function openProductDetail(product, event) {
    if (event) event.stopPropagation();
    
    const modal = document.getElementById('productDetailModal');
    const content = document.getElementById('productDetailContent');
    
    // Get random products
    const randomProducts = getRandomProducts(product);
    
    // Generate specifications HTML - handle both array and object formats
    let specificationsHTML = '';
    
    if (Array.isArray(product.specifications)) {
        // New format - array of bullet points
        specificationsHTML = '<ul style="list-style: disc; padding-left: 20px; color: #666; line-height: 1.8;">';
        product.specifications.forEach(spec => {
            specificationsHTML += `<li style="margin-bottom: 8px;">${spec}</li>`;
        });
        specificationsHTML += '</ul>';
    } else if (typeof product.specifications === 'object') {
        // Old format - object with key-value pairs
        specificationsHTML = '<ul style="list-style: disc; padding-left: 20px; color: #666; line-height: 1.8;">';
        Object.entries(product.specifications).forEach(([key, value]) => {
            specificationsHTML += `<li style="margin-bottom: 8px;"><strong style="text-transform: capitalize;">${key}:</strong> ${value}</li>`;
        });
        specificationsHTML += '</ul>';
    }
    
    content.innerHTML = `
        <!-- New Layout: Image Left, Content Right -->
        <div style="display: grid; grid-template-columns: 45% 55%; gap: 40px; margin-bottom: 40px;">
            <!-- Left Side: Image with Zoom -->
            <div style="position: relative;">
                <div class="main-image-container" id="mainImageContainer" style="width: 100%; height: 500px; border-radius: 12px; overflow: hidden; background: #f9f9f9; display: flex; align-items: center; justify-content: center; position: relative;">
                    <img src="${product.images[0].src}" alt="${product.name}" class="main-product-image" id="mainProductImage" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                    <div class="zoom-lens" id="zoomLens"></div>
                </div>
                <div class="zoomed-preview" id="zoomedPreview" style="position: absolute; right: -420px; top: 0; width: 400px; height: 500px; border: 3px solid #4A7C59; border-radius: 15px; overflow: hidden; display: none; background: white; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); z-index: 100;">
                    <img src="${product.images[0].src}" alt="${product.name}" id="zoomedPreviewImage" style="position: absolute; width: auto; height: auto; min-width: 150%; min-height: 150%;">
                </div>
            </div>
            
            <!-- Right Side: Product Info -->
            <div style="display: flex; flex-direction: column;">
                <h2 style="font-size: 2rem; color: #2D5016; font-weight: 700; margin-bottom: 15px; line-height: 1.2;">${product.name}</h2>
                
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                    ${generateStars(product.rating)}
                    <span style="color: #666; font-size: 0.9rem;">(${product.reviews?.length || 0} reviews)</span>
                </div>
                
                <!-- Price Section with Save Badge on Top Right -->
                <div style="margin-bottom: 25px; position: relative;">
                    ${product.discount > 0 ? `
                        <div style="position: absolute; top: -10px; right: 0;">
                            <span style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 700; box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3); display: inline-block;">
                                Save ${product.discount}%
                            </span>
                        </div>
                        <div style="text-decoration: line-through; color: #999; font-size: 1rem; margin-bottom: 8px;">
                            NPR ${product.originalPrice.toFixed(2)}
                        </div>
                        <div style="font-size: 2rem; color: #4A7C59; font-weight: bold;">
                            NPR ${product.price.toFixed(2)}
                        </div>
                    ` : `
                        <span style="font-size: 2rem; color: #4A7C59; font-weight: bold;">NPR ${product.price.toFixed(2)}</span>
                    `}
                </div>
                
                <!-- Description -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #2D5016; margin-bottom: 12px; font-size: 1.2rem; font-weight: 600;">Description</h3>
                    <p style="color: #666; line-height: 1.8; font-size: 0.95rem;">${product.detailedDescription}</p>
                </div>
                
                <!-- Key Features -->
                <div style="margin-bottom: 25px; background: #f9f9f9; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #2D5016; margin-bottom: 12px; font-size: 1rem; font-weight: 600;">Key Features:</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="color: #666; margin-bottom: 10px; padding-left: 25px; position: relative; font-size: 0.9rem;">
                            <span style="position: absolute; left: 0; color: #4A7C59; font-weight: bold;">✓</span>
                            Eco-friendly and sustainable materials
                        </li>
                        <li style="color: #666; margin-bottom: 10px; padding-left: 25px; position: relative; font-size: 0.9rem;">
                            <span style="position: absolute; left: 0; color: #4A7C59; font-weight: bold;">✓</span>
                            High quality construction
                        </li>
                        <li style="color: #666; margin-bottom: 10px; padding-left: 25px; position: relative; font-size: 0.9rem;">
                            <span style="position: absolute; left: 0; color: #4A7C59; font-weight: bold;">✓</span>
                            Perfect for daily use
                        </li>
                    </ul>
                </div>
                
                <!-- Add to Cart Button -->
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)" ${product.stock === 'out-of-stock' ? 'disabled' : ''}
                        style="width: 100%; padding: 15px 30px; font-size: 1.1rem; margin-top: auto;">
                    ${product.stock === 'out-of-stock' ? '✕ Out of Stock' : '🛒 Add to Cart'}
                </button>
            </div>
        </div>
        
        <!-- Full Width: Specifications and Reviews -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
            <!-- Specifications -->
            <div style="background: #fafafa; padding: 25px; border-radius: 12px; border: 1px solid #e0e0e0;">
                <h3 style="color: #2D5016; margin-bottom: 20px; font-size: 1.3rem; font-weight: 600; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Specifications</h3>
                ${specificationsHTML}
            </div>
            
            <!-- Customer Reviews -->
            <div style="background: #fafafa; padding: 25px; border-radius: 12px; border: 1px solid #e0e0e0;">
                <h3 style="color: #2D5016; margin-bottom: 20px; font-size: 1.3rem; font-weight: 600; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Customer Reviews</h3>
                ${product.reviews && product.reviews.length > 0 ? `
                    ${product.reviews.slice(0, 3).map(review => `
                        <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 10px; border: 1px solid #e8e8e8;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <strong style="color: #2D5016; font-size: 0.95rem;">${review.user}</strong>
                                <span>${generateStars(review.rating)}</span>
                            </div>
                            <p style="font-size: 0.8rem; color: #999; margin-bottom: 8px;">${review.date}</p>
                            <p style="color: #666; line-height: 1.6; font-size: 0.9rem;">${review.comment}</p>
                        </div>
                    `).join('')}
                ` : '<p style="color: #999; font-style: italic;">No reviews yet</p>'}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Initialize zoom after modal is visible
    setTimeout(() => initializeImageZoom(), 100);
    
    // Close search suggestions when opening detail
    document.getElementById('searchSuggestions').style.display = 'none';
}

function closeProductModal() {
    document.getElementById('productDetailModal').style.display = 'none';
}

// ==================== IMAGE ZOOM FUNCTIONALITY ====================
function initializeImageZoom() {
    const container = document.getElementById('mainImageContainer');
    const img = document.getElementById('mainProductImage');
    const lens = document.getElementById('zoomLens');
    const result = document.getElementById('zoomedPreview');
    const resultImg = document.getElementById('zoomedPreviewImage');
    
    if (!container || !img || !lens || !result) return;
    
    const lensSize = 150;
    const zoomLevel = 1.5;
    
    lens.style.width = lensSize + 'px';
    lens.style.height = lensSize + 'px';
    
    container.addEventListener('mouseenter', () => {
        lens.style.display = 'block';
        result.style.display = 'block';
        resultImg.src = img.src;
    });
    
    container.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        result.style.display = 'none';
    });
    
    container.addEventListener('mousemove', (e) => {
        const pos = getCursorPos(e, container);
        
        let x = pos.x - (lensSize / 2);
        let y = pos.y - (lensSize / 2);
        
        if (x > container.offsetWidth - lensSize) x = container.offsetWidth - lensSize;
        if (x < 0) x = 0;
        if (y > container.offsetHeight - lensSize) y = container.offsetHeight - lensSize;
        if (y < 0) y = 0;
        
        lens.style.left = x + 'px';
        lens.style.top = y + 'px';
        
        const percentX = (pos.x / container.offsetWidth);
        const percentY = (pos.y / container.offsetHeight);
        
        const zoomedWidth = img.naturalWidth * zoomLevel;
        const zoomedHeight = img.naturalHeight * zoomLevel;
        
        resultImg.style.width = zoomedWidth + 'px';
        resultImg.style.height = zoomedHeight + 'px';
        resultImg.style.left = -(percentX * zoomedWidth - result.offsetWidth / 2) + 'px';
        resultImg.style.top = -(percentY * zoomedHeight - result.offsetHeight / 2) + 'px';
    });
}

function getCursorPos(e, container) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return {x, y};
}

// ==================== EVENT LISTENERS SETUP ====================
function setupEventListeners() {
    // Cart icon
    document.getElementById('cartIcon').addEventListener('click', (e) => {
        e.preventDefault();
        const popup = document.getElementById('cartPopup');
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
        updateCartPopup();
    });
    
    // Close modals
    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
    
    // Cart actions
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Empty Cart', 'Your cart is empty', 'error');
        } else {
            showToast('Checkout', 'Proceeding to checkout...', 'success');
        }
    });
    
    // Category filter
    document.querySelectorAll('.category-list li').forEach(li => {
        li.addEventListener('click', () => {
            filterByCategory(li.dataset.category);
        });
    });
    
    // Sort select
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });
    
    // Reset filters
    document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
    
    // View toggle
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setViewMode(btn.dataset.view);
        });
    });
    
    // Search
    setupSearch();
    
    // Close cart popup when clicking outside
    document.addEventListener('click', (e) => {
        const cartPopup = document.getElementById('cartPopup');
        const cartIcon = document.getElementById('cartIcon');
        
        if (!cartPopup.contains(e.target) && !cartIcon.contains(e.target)) {
            cartPopup.style.display = 'none';
        }
    });
    
    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
            document.getElementById('cartPopup').style.display = 'none';
        }
    });
}

// ==================== GLOBAL FUNCTIONS ====================
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.changePage = changePage;
window.openProductDetail = openProductDetail;
window.closeProductModal = closeProductModal;
window.changeMainImage = function(imageSrc) {
    const mainImg = document.getElementById('mainProductImage');
    const zoomedImg = document.getElementById('zoomedPreviewImage');
    if (mainImg) mainImg.src = imageSrc;
    if (zoomedImg) zoomedImg.src = imageSrc;
};

// ==================== INITIALIZATION ====================
console.log('EcoMart Clean Edition - All features loaded successfully! 🌿');