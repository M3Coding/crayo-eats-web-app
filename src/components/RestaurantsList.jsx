const restaurantsList = [
  {
    id: 1,
    image: "/images/auntieannes.jpg",
    name: "Auntie Annie's",
    description: "Satisfy your cravings with a freshly-made and baked soft pretzel and thirst-quenching lemonade.",
    order: [
      {
        meal: "Original Pretzel",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1604908177522-0400e7b9b2e1?w=400"
      },
      {
        meal: "Cinnamon Sugar Pretzel",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1610484826967-09f1b4d6d6ad?w=400"
      },
      {
        meal: "Pretzel Nuggets",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1615484477778-ca3b6ef0c8d9?w=400"
      },
      {
        meal: "Fresh Lemonade",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400"
      }
    ]
  },
  {
    id: 2,
    image: "/images/burger-king.png",
    name: "Burger King",
    description: "Choose from hamburgers, fries, and more at this famous American fast food chain.",
    order: [
      {
        meal: "Whopper",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400"
      },
      {
        meal: "Chicken Fries",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400"
      },
      {
        meal: "Impossible Whopper",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400"
      },
      {
        meal: "Onion Rings",
        price: 3.29,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400"
      }
    ]
  },
  {
    id: 3,
    image: "/images/greatamericanbagel.jpg",
    name: "Great American Bagel",
    description: "The ideal stop for breakfast or lunch, offering specialty bagels, sandwiches, and coffees.",
    order: [
      {
        meal: "Everything Bagel with Cream Cheese",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1586449480578-1a6d7a6d3b28?w=400"
      },
      {
        meal: "Bacon Egg & Cheese Bagel",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1603048297172-c4f9b64cdb3f?w=400"
      },
      {
        meal: "Turkey Club Bagel",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400"
      },
      {
        meal: "Fresh Brewed Coffee",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
      }
    ]
  },
  {
    id: 4,
    image: "/images/leopold.jpg",
    name: "Leopold's Ice Cream",
    description: "Indulge in a classic, sweet treat from this famous Savannah ice cream shop.",
    order: [
      {
        meal: "Single Scoop Ice Cream",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400"
      },
      {
        meal: "Double Scoop Ice Cream",
        price: 6.49,
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400"
      },
      {
        meal: "Ice Cream Sundae",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400"
      },
      {
        meal: "Milkshake",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400"
      }
    ]
  },
  {
    id: 5,
    image: "/images/pga.jpg",
    name: "PGA Tour Grill",
    description: "Sit down and enjoy classic Southern cuisine before you take off.",
    order: [
      {
        meal: "Classic Cheeseburger",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"
      },
      {
        meal: "Southern Fried Chicken Sandwich",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1606755962773-d324e2dea5f7?w=400"
      },
      {
        meal: "Loaded Fries",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400"
      },
      {
        meal: "Sweet Tea",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400"
      }
    ]
  },
  {
    id: 6,
    image: "/images/servicestation.jpg",
    name: "Service Station Bar",
    description: "Enjoy craft beers on tap, specialty cocktails, and a selection of wines before taking off on your next adventure with Savannah’s own Service Station.",
    order: [
      {
        meal: "Craft Beer Pint",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400"
      },
      {
        meal: "Signature Burger",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
      },
      {
        meal: "Chicken Wings",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400"
      },
      {
        meal: "Loaded Nachos",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1599785209707-28d16c0f4fef?w=400"
      }
    ]
  },
  {
    id: 7,
    image: "/images/starbucks.jpg",
    name: "Starbucks",
    description: "Enjoy genuine service, an inviting atmosphere and a superb cup of expertly roasted and richly brewed coffee while you wait for takeoff!",
    order: [
      {
        meal: "Caramel Macchiato",
        price: 5.95,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400"
      },
      {
        meal: "Pike Place Roast",
        price: 3.45,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
      },
      {
        meal: "Bacon, Gouda & Egg Sandwich",
        price: 6.45,
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400"
      },
      {
        meal: "Chocolate Croissant",
        price: 3.95,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
      }
    ]
  },
  {
    id: 8,
    image: "/images/stella.png",
    name: "The Stella Bar",
    description: "Kick back at The Stella Bar, featuring Stella Artois beer and a variety of other drink and food options.",
    order: [
      {
        meal: "Stella Artois Pint",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400"
      },
      {
        meal: "Cheese Plate",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400"
      },
      {
        meal: "Flatbread Pizza",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
      },
      {
        meal: "Charcuterie Board",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400"
      }
    ]
  },
  {
    id: 9,
    image: "/images/torn.jpg",
    name: "Torn Basil Pizzeria",
    description: "Grab a slice on the fly with Torn Basil Pizzeria individual pizzas.",
    order: [
      {
        meal: "Pepperoni Slice",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
      },
      {
        meal: "Cheese Slice",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1548365328-5f04c1a0f2f7?w=400"
      },
      {
        meal: "Margherita Pizza",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1604068549290-dea0f0a57f34?w=400"
      },
      {
        meal: "Garlic Knots",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1619740455993-9e4eac8be668?w=400"
      }
    ]
  }
];

export default restaurantsList;
