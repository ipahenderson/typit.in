const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err)
    return;
  }

  const db = client.db('words');

  db.collection('words').drop();

  db.collection('words').insert([
    //foods
    {
      word: "apple",
      category: "food",
      image: "/images/food/apple.svg"
    },
    {
      word: "banana",
      category: "food",
      image: "/images/food/banana.svg"
    },
    {
      word: "bread",
      category: "food",
      image: "/images/food/bread.svg"
    },
    {
      word: "burger",
      category: "food",
      image: "/images/food/burger.svg"
    },
    {
      word: "carrot",
      category: "food",
      image: "/images/food/carrot.svg"
    },
    {
      word: "cheese",
      category: "food",
      image: "/images/food/cheese.svg"
    },
    {
      word: "egg",
      category: "food",
      image: "/images/food/egg.svg"
    },
    {
      word: "lemon",
      category: "food",
      image: "/images/food/lemon.svg"
    },
    {
      word: "orange",
      category: "food",
      image: "/images/food/orange.svg"
    },
    {
      word: "pizza",
      category: "food",
      image: "/images/food/pizza.svg"
    },
    {
      word: "strawberry",
      category: "food",
      image: "/images/food/strawberry.svg"
    },
    {
      word: "tomato",
      category: "food",
      image: "/images/food/tomato.svg"
    },
    //colours
    {
      word: "yellow",
      category: "colour",
      image: "/images/colours/yellow.svg"
    },
    {
      word: "red",
      category: "colour",
      image: "/images/colours/red.svg"
    },
    {
      word: "green",
      category: "colour",
      image: "/images/colours/green.svg"
    },
    {
      word: "blue",
      category: "colour",
      image: "/images/colours/blue.svg"
    },
    {
      word: "pink",
      category: "colour",
      image: "/images/colours/pink.svg"
    },
    {
      word: "orange",
      category: "colour",
      image: "/images/colours/orange.svg"
    },
    {
      word: "white",
      category: "colour",
      image: "/images/colours/white.svg"
    },
    {
      word: "purple",
      category: "colour",
      image: "/images/colours/purple.svg"
    },
    {
      word: "black",
      category: "colour",
      image: "/images/colours/black.svg"
    },
    {
      word: "brown",
      category: "colour",
      image: "/images/colours/brown.svg"
    },

    //animals
    {
      word: "cat",
      category: "animal",
      image: "/images/animals/cat.svg"
    },
    {
      word: "dog",
      category: "animal",
      image: "/images/animals/dog.svg"
    },

    {
      word: "elephant",
      category: "animal",
      image: "/images/animals/elephant.svg"
    },

    {
      word: "fish",
      category: "animal",
      image: "/images/animals/fish.svg"
    },

    {
      word: "hedgehog",
      category: "animal",
      image: "/images/animals/hedgehog.svg"
    },

    {
      word: "horse",
      category: "animal",
      image: "/images/animals/horse.svg"
    },

    {
      word: "parrot",
      category: "animal",
      image: "/images/animals/parrot.svg"
    },

    {
      word: "pig",
      category: "animal",
      image: "/images/animals/pig.svg"
    },

    {
      word: "rabbit",
      category: "animal",
      image: "/images/animals/rabbit.svg"
    },

    {
      word: "sheep",
      category: "animal",
      image: "/images/animals/sheep.svg"
    },

    //clothing

    {
      word: "coat",
      category: "clothing",
      image: "/images/clothing/coat.svg"
    },
    {
      word: "gloves",
      category: "clothing",
      image: "/images/clothing/gloves.svg"
    },
    {
      word: "hat",
      category: "clothing",
      image: "/images/clothing/hat.svg"
    },
    {
      word: "scarf",
      category: "clothing",
      image: "/images/clothing/scarf.svg"
    },
    {
      word: "shirt",
      category: "clothing",
      image: "/images/clothing/shirt.svg"
    },
    {
      word: "shoe",
      category: "clothing",
      image: "/images/clothing/shoe.svg"
    },
    {
      word: "skirt",
      category: "clothing",
      image: "/images/clothing/skirt.svg"
    },
    {
      word: "socks",
      category: "clothing",
      image: "/images/clothing/socks.svg"
    },
    {
      word: "tie",
      category: "clothing",
      image: "/images/clothing/tie.svg"
    },
    {
      word: "trousers",
      category: "clothing",
      image: "/images/clothing/trousers.svg"
    }
  ]

)
});
