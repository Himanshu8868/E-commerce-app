
    const items = [
        {
          id: 1,
          name: 'Smartphone',
          price: '$299.99',
          rating: 4.5,
          image: 'https://img.freepik.com/free-photo/top-view-smartphone-with-minimal-display_23-2149672681.jpg',
          description: 'A high-performance smartphone with a sleek design and advanced features.'
        },
        {
          id: 2,
          name: 'Laptop',
          price: '$799.99',
          rating: 4.8,
          image: 'https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg',
          description: 'Powerful laptop designed for productivity and gaming enthusiasts.'
        },
        {
          id: 3,
          name: 'Headphones',
          price: '$59.99',
          rating: 4.2,
          image: 'https://img.freepik.com/free-vector/headphones-realistic-set_1284-26322.jpg',
          description: 'Comfortable and high-quality sound headphones for music lovers.'
        },
        {
          id: 4,
          name: 'Coffee Maker',
          price: '$49.99',
          rating: 4.7,
          image: 'https://img.freepik.com/free-vector/people-making-different-coffee-methods_23-2148647071.jpg',
          description: 'Brew fresh and delicious coffee effortlessly with this modern coffee maker.'
        },
        {
          id: 5,
          name: 'Air Purifier',
          price: '$129.99',
          rating: 4.6,
          image: 'https://img.freepik.com/free-vector/modern-air-purifier-removing-dust-cleaning-air-living-room-sofa-realistic-vector-illustration_1284-68359.jpg',
          description: 'Improve air quality and breathe easier with this efficient air purifier.'
        },
        {
          id: 6,
          name: 'Gaming Console',
          price: '$499.99',
          rating: 4.9,
          image: 'https://cdn.pixabay.com/photo/2020/10/01/16/53/game-controller-5619105_1280.jpg',
          description: 'Experience next-level gaming with this advanced gaming console.'
        },
        {
          id: 7,
          name: 'Action Camera',
          price: '$199.99',
          rating: 4.4,
          image: 'https://cdn.pixabay.com/photo/2020/02/08/14/28/camera-4830248_640.jpg',
          description: 'Capture your adventures in stunning detail with this rugged action camera.'
        },
        {
          id: 8,
          name: 'Smartwatch',
          price: '$149.99',
          rating: 4.5,
          image: 'https://img.freepik.com/free-vector/isometric-smarth-watch-background_52683-1101.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Track fitness and stay connected with this stylish smartwatch.'
        },
        {
          id: 9,
          name: 'Blender',
          price: '$39.99',
          rating: 4.3,
          image: 'https://img.freepik.com/free-photo/blender-filled-fruits_23-2149058894.jpg',
          description: 'Blend smoothies and more with this powerful and easy-to-clean blender.'
        },
        {
          id: 10,
          name: 'Yoga Mat',
          price: '$19.99',
          rating: 4.1,
          image: 'https://img.freepik.com/free-photo/fitness-woman-preparing-practice-yoga-pink-mat_23-2148752161.jpg',
          description: 'Durable yoga mat with non-slip surface for all your yoga sessions.'
        },
        {
          id: 11,
          name: 'Vacuum Cleaner',
          price: '$99.99',
          rating: 4.7,
          image: 'https://img.freepik.com/free-vector/vacuum-cleaner-evolution-from-broom-robotic-appliance_1284-32868.jpg',
          description: 'Efficient vacuum cleaner with strong suction for deep cleaning.'
        },
        {
          id: 12,
          name: 'Wireless Speaker',
          price: '$79.99',
          rating: 4.6,
          image: 'https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-desk_23-2149625156.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Portable wireless speaker with rich sound and long battery life.'
        },
        {
          id: 13,
          name: 'Tablet',
          price: '$249.99',
          rating: 4.4,
          image: 'https://img.freepik.com/free-photo/outgoing-call-calling-communication-concept_53876-125180.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Lightweight and versatile tablet perfect for work and entertainment.'
        },
        {
          id: 14,
          name: 'Sneakers',
          price: '$89.99',
          rating: 4.3,
          image: 'https://img.freepik.com/free-vector/sports-shoes-set-fashion-sportwear-everyday-sneaker-footwear-clothing_1284-42113.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Comfortable and trendy sneakers for everyday wear.'
        },
        {
          id: 15,
          name: 'Bluetooth Earbuds',
          price: '$69.99',
          rating: 4.4,
          image: 'https://img.freepik.com/premium-photo/usb-flash-drive-tech-device-with-minimalist-monochrome-background-earphones_23-2150763317.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Compact and lightweight earbuds with excellent audio quality.'
        },
        {
          id: 16,
          name: 'Backpack',
          price: '$39.99',
          rating: 4.2,
          image: 'https://img.freepik.com/free-photo/selective-focus-shot-man-standing-road-with-flap-backpack-water-bottle_181624-27329.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Stylish and spacious backpack suitable for work or travel.'
        },
        {
          id: 17,
          name: 'Fiction Book',
          price: '$14.99',
          rating: 4.7,
          image: 'https://img.freepik.com/premium-photo/world-book-day-collage-design_23-2151313174.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Engaging fiction book to immerse yourself in captivating stories.'
        },
        {
          id: 18,
          name: 'Electric Kettle',
          price: '$24.99',
          rating: 4.5,
          image: 'https://img.freepik.com/premium-photo/electric-kettle-boiling-water-making-tea-table-kitchen-interior-household-kitchen-appliances-makes-hot-drinks_122732-2846.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Quickly boil water with this stylish and efficient electric kettle.'
        },
        {
          id: 19,
          name: 'Desk Lamp',
          price: '$29.99',
          rating: 4.3,
          image: 'https://img.freepik.com/premium-photo/desk-arrangement-with-lamp-plant_23-2148745817.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid',
          description: 'Modern desk lamp with adjustable brightness for optimal lighting.'
        },
        {
          id: 20,
          name: 'Kids’ Toy Set',
          price: '$19.99',
          rating: 4.8,
          image: 'https://cdn.pixabay.com/photo/2015/10/05/17/09/minion-972908_640.jpg',
          description: 'Spark your child s creativity and imagination with this colorful toy set designed for endless fun. Recommended for children aged 3 to 8 years, this educational set promotes hand-eye coordination, problem-solving, and social skills development. The 50-piece set includes stackable blocks, figures, and shapes, all made from non-toxic, BPA-free materials to ensure safe play. Comes with a convenient storage box for easy cleanup. Washable for easy maintenance, this set is perfect for both solo and group play. Available in vibrant primary colors to captivate young minds!.'
      
        },
        {
          id: 21,
          name: 'Fitness items',
          price: '$21.55',
          rating: 3.9,
          image : 'https://img.freepik.com/premium-photo/set-with-different-sports-equipment-white-background_495423-63686.jpg?ga=GA1.1.340185954.1736668339&semt=ais_hybrid' ,
          description: 'Enhance your workout routine with these essential fitness items. Perfect for home or gym use, this set includes resistance bands, a jump rope, and a pair of adjustable dumbbells. Designed to help you build strength, improve flexibility, and boost cardiovascular health, these items are made from high-quality, durable materials to withstand intense workouts. Whether you are a beginner or a fitness enthusiast, this set provides the tools you need to achieve your fitness goals.'
        },
        
          {
            "id": 22,
            "name": "Smart TV",
            "price": "$499.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/modern-smart-tv-living-room_23-2149428880.jpg",
            "description": "Enjoy a cinematic experience at home with this 4K Ultra HD smart TV featuring streaming apps and voice control."
          },
          {
            "id": 23,
            "name": "Wireless Charger",
            "price": "$29.99",
            "rating": 4.4,
            "image": "https://img.freepik.com/free-photo/smartphone-wireless-charging-pad_1232-4363.jpg",
            "description": "Fast-charging wireless charger compatible with multiple devices including smartphones and earbuds."
          },
          {
            "id": 24,
            "name": "Digital Camera",
            "price": "$349.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/close-up-digital-camera_23-2148560139.jpg",
            "description": "Capture high-resolution images and videos with this compact digital camera featuring built-in Wi-Fi."
          },
          {
            "id": 25,
            "name": "Desk Organizer Set",
            "price": "$24.99",
            "rating": 4.3,
            "image": "https://img.freepik.com/free-photo/desk-organizer-items_181624-16328.jpg",
            "description": "Keep your workspace tidy with this stylish desk organizer set featuring compartments for stationery and gadgets."
          },
          {
            "id": 26,
            "name": "Electric Scooter",
            "price": "$699.99",
            "rating": 4.8,
            "image": "https://img.freepik.com/free-photo/electric-scooter-city-street_1127-1948.jpg",
            "description": "Eco-friendly electric scooter with long battery life, ideal for commuting and urban adventures."
          },
          {
            "id": 27,
            "name": "Noise-Canceling Headphones",
            "price": "$129.99",
            "rating": 4.9,
            "image": "https://img.freepik.com/free-photo/modern-noise-canceling-headphones_23-2149096720.jpg",
            "description": "Immerse yourself in music with these premium noise-canceling headphones featuring superior sound quality."
          },
          {
            "id": 28,
            "name": "Wireless Keyboard & Mouse Combo",
            "price": "$49.99",
            "rating": 4.5,
            "image": "https://img.freepik.com/free-photo/wireless-keyboard-mouse-set_181624-15663.jpg",
            "description": "Work efficiently with this ergonomic wireless keyboard and mouse combo designed for comfort and precision."
          },
          {
            "id": 29,
            "name": "Smart Home Security Camera",
            "price": "$89.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/home-security-camera-mounted-wall_23-2149137526.jpg",
            "description": "Monitor your home with real-time video streaming and motion detection alerts using this smart security camera."
          },
          {
            "id": 30,
            "name": "Electric Toothbrush",
            "price": "$39.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/electric-toothbrush_181624-10558.jpg",
            "description": "Achieve a cleaner smile with this rechargeable electric toothbrush featuring multiple brushing modes."
          },
          {
            "id": 31,
            "name": "Gaming Mouse",
            "price": "$59.99",
            "rating": 4.8,
            "image": "https://img.freepik.com/free-photo/gaming-mouse-desk_23-2149672669.jpg",
            "description": "Ergonomic gaming mouse with customizable RGB lighting and programmable buttons for precision control."
          },
          {
            "id": 32,
            "name": "Camping Tent",
            "price": "$199.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/camping-tent-mountain-background_181624-19253.jpg",
            "description": "Spacious and weather-resistant camping tent designed for outdoor adventures with friends and family."
          },
          {
            "id": 33,
            "name": "Kitchen Knife Set",
            "price": "$79.99",
            "rating": 4.5,
            "image": "https://img.freepik.com/free-photo/kitchen-knife-set-countertop_181624-16526.jpg",
            "description": "Professional-grade stainless steel kitchen knife set for precision cutting and effortless meal preparation."
          },
          {
            "id": 34,
            "name": "Electric Grill",
            "price": "$119.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/electric-grill-kitchen_181624-12678.jpg",
            "description": "Cook delicious meals indoors with this smokeless electric grill featuring adjustable temperature settings."
          },
          {
            "id": 35,
            "name": "Portable Power Bank",
            "price": "$34.99",
            "rating": 4.4,
            "image": "https://img.freepik.com/free-photo/power-bank-charging-smartphone_1232-4144.jpg",
            "description": "Compact power bank with fast charging capabilities and high capacity for extended use."
          },
          {
            "id": 36,
            "name": "VR Headset",
            "price": "$249.99",
            "rating": 4.8,
            "image": "https://img.freepik.com/free-photo/virtual-reality-vr-glasses-wooden-background_181624-44867.jpg",
            "description": "Immerse yourself in virtual reality experiences with this advanced VR headset."
          },
          {
            "id": 37,
            "name": "Home Theater System",
            "price": "$399.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/home-theater-setup-living-room_1232-4181.jpg",
            "description": "High-quality home theater system with surround sound for an immersive audio experience."
          },
          {
            "id": 38,
            "name": "Smart Light Bulb Set",
            "price": "$49.99",
            "rating": 4.5,
            "image": "https://img.freepik.com/free-photo/smart-light-bulbs-technology-concept_23-2149078217.jpg",
            "description": "Control the ambiance of your space with this set of color-changing smart light bulbs."
          },
          {
            "id": 39,
            "name": "Air Fryer",
            "price": "$129.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/air-fryer-white-kitchen-countertop_1232-4367.jpg",
            "description": "Cook healthier meals with this versatile air fryer that requires little to no oil."
          },
          {
            "id": 40,
            "name": "Electric Scooter for Kids",
            "price": "$199.99",
            "rating": 4.3,
            "image": "https://img.freepik.com/free-photo/child-riding-electric-scooter_1232-4362.jpg",
            "description": "Fun and safe electric scooter designed specifically for kids with speed limits and safety features."
          },
          {
            "id": 41,
            "name": "Smart Door Lock",
            "price": "$179.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/smart-lock-door-home_181624-41324.jpg",
            "description": "Secure your home with this keyless smart door lock that can be controlled via a mobile app."
          },
          {
            "id": 42,
            "name": "Robot Vacuum Cleaner",
            "price": "$249.99",
            "rating": 4.8,
            "image": "https://img.freepik.com/free-photo/robot-vacuum-cleaner-white-floor_1232-4128.jpg",
            "description": "Hands-free cleaning with this robot vacuum cleaner that navigates and cleans efficiently."
          },
          {
            "id": 43,
            "name": "Smart Thermostat",
            "price": "$129.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/smart-home-thermostat-control_1232-4087.jpg",
            "description": "Optimize energy usage and comfort with this programmable smart thermostat."
          },
          {
            "id": 44,
            "name": "Massage Gun",
            "price": "$89.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/massage-gun-fitness-recovery_181624-13646.jpg",
            "description": "Relieve muscle tension and soreness with this high-performance massage gun."
          },
          {
            "id": 45,
            "name": "Smart Mirror",
            "price": "$199.99",
            "rating": 4.5,
            "image": "https://img.freepik.com/free-photo/smart-mirror-with-built-in-display_1232-4085.jpg",
            "description": "Interactive smart mirror that displays weather, time, and your daily schedule."
          },
          {
            "id": 46,
            "name": "Drone with Camera",
            "price": "$349.99",
            "rating": 4.8,
            "image": "https://img.freepik.com/free-photo/drone-hovering-clear-blue-sky_1232-4220.jpg",
            "description": "Capture stunning aerial footage with this high-tech drone equipped with a 4K camera."
          },
          {
            "id": 47,
            "name": "Electric Bike",
            "price": "$999.99",
            "rating": 4.9,
            "image": "https://img.freepik.com/free-photo/electric-bike-city_181624-12730.jpg",
            "description": "Eco-friendly electric bike with long-range battery and pedal-assist technology."
          },
          {
            "id": 48,
            "name": "Pet Feeder with Camera",
            "price": "$149.99",
            "rating": 4.6,
            "image": "https://img.freepik.com/free-photo/smart-pet-feeder-camera_1232-4121.jpg",
            "description": "Feed your pets remotely and monitor them with the built-in camera feature."
          },
          {
            "id": 49,
            "name": "Outdoor Solar Lights",
            "price": "$59.99",
            "rating": 4.5,
            "image": "https://img.freepik.com/free-photo/outdoor-solar-lights-garden-pathway_1232-4203.jpg",
            "description": "Eco-friendly outdoor solar lights that automatically turn on at night."
          },
          {
            "id": 50,
            "name": "Cordless Drill Set",
            "price": "$129.99",
            "rating": 4.7,
            "image": "https://img.freepik.com/free-photo/cordless-drill-toolbox_181624-18354.jpg",
            "description": "Versatile cordless drill set for home improvement and DIY projects."
          }
      ];

export default items
