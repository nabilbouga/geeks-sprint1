const blogs = [
  {
    id: 1,
    title: "Exploring the Hidden Beaches of Morcco",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Discover the secluded paradise beaches that most tourists never see. Learn about local gems and insider tips for your next adventure.",
    content: "Morocco is home to some of the most beautiful beaches in the world, but many travelers only visit the popular spots. In this blog post, we'll explore several hidden beaches that offer pristine sands, crystal-clear waters, and fewer crowds...",
    author: "Sarah Johnson",
    date: "May 25, 2025",
    reactions: {
      like: 24,
      love: 18,
      wow: 7,
      laugh: 3,
    },
    comments: [
      {
        id: 101,
        user: "TravelFan22",
        text: "I visited Morocco last year and it was exactly as you described - paradise!",
        date: "May 26, 2025",
      },
      {
        id: 102,
        user: "BeachExplorer",
        text: "Are there accommodations near these beaches or are they a day-trip destinations?",
        date: "May 27, 2025",
      }
    ]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Morocco Train Travel",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Everything you need to know about navigating Morocco by Train. From North to South, plan your perfect train adventure.",
    content: "Traveling through Morocco by train is not just a mean of transportation; it's an experience in itself. The extensive Train network connects major cities and small villages alike, offering travelers a chance to see the landscape change in one day",
    author: "Mark Davies",
    date: "May 22, 2025",
    reactions: {
      like: 42,
      love: 29,
      wow: 11,
      laugh: 0,
    },
    comments: [
      {
        id: 201,
        user: "AfricaExplorer",
        text: "The routes are absolutely worth the extra cost!",
        date: "May 23, 2025",
      },
      {
        id: 202,
        user: "BudgetTraveler",
        text: "Has anyone tried the night trains to save on accommodation?",
        date: "May 24, 2025",
      }
    ]
  },
  {
    id: 3,
    title: "Culinary Adventures: Street Food Around Morocco",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "From bessara in Tanger City to boubouch in Marrakesh, discover the best street food destinations and must-try dishes in each location.",
    content: "Street food is the heart and soul of a city's culinary identity. It represents authentic local flavors, cooking techniques passed down through generations, and the vibrant culture of everyday life...",
    author: "Elena Rodriguez",
    date: "May 20, 2025",
    reactions: {
      like: 67,
      love: 45,
      wow: 23,
      laugh: 8,
    },
    comments: [
      {
        id: 301,
        user: "FoodieForever",
        text: "The CousCous with the 7 vegetables changed my life! Definitely a must-try.",
        date: "May 21, 2025",
      },
      {
        id: 302,
        user: "TravelChef",
        text: "Any recommendations for vegetarian street food options?",
        date: "May 22, 2025",
      }
    ]
  },
  {
    id: 4,
    title: "Sustainable Tourism: How to Travel Responsibly",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Learn how to minimize your environmental impact while maximizing your travel experiences. Tips and destinations for the eco-conscious explorer.",
    content: "As global tourism continues to grow, so does our responsibility to protect the places we visit. Sustainable tourism is about finding the balance between enjoying your travels and preserving destinations for future generations...",
    author: "David Chen",
    date: "May 18, 2025",
    reactions: {
      like: 89,
      love: 76,
      wow: 14,
      laugh: 0,
    },
    comments: [
      {
        id: 401,
        user: "EcoTraveler",
        text: "I've been using the refillable water bottle tip for years. It makes such a difference!",
        date: "May 19, 2025",
      },
      {
        id: 402,
        user: "GreenExplorer",
        text: "Any recommendations for eco-friendly tour operators in the South of Morocco?",
        date: "May 20, 2025",
      }
    ]
  },
  {
    id: 5,
    title: "Solo Female Travel: Safety Tips and Amazing Destinations",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sbyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Practical advice and inspiring destinations for women traveling alone. Empower yourself to explore Morocco with confidence.",
    content: "Solo travel as a woman can be one of the most rewarding and transformative experiences. It offers independence, confidence, and the freedom to design your perfect trip. However, it's also natural to have concerns about safety...",
    author: "Jessica Kim",
    date: "May 15, 2025",
    reactions: {
      like: 130,
      love: 98,
      wow: 27,
      laugh: 5,
    },
    comments: [
      {
        id: 501,
        user: "SoloAdventurer",
        text: "Your tip about sharing your itinerary with someone back home is so important!",
        date: "May 16, 2025",
      },
      {
        id: 502,
        user: "FirstTimeTraveler",
        text: "Would you recommend Merzouga as a first solo destination?",
        date: "May 17, 2025",
      }
    ]
  }
];

export default blogs;
