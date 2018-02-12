const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err)
    return;
  }

  const db = client.db('data');


  db.collection('words').drop();
  db.collection('maths').drop();


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
    },

    //test file
    {
      word: "test",
      category: "test",
      image: "/images/test/test.svg"
    }
  ]
)
db.collection('maths').insert([
  {
    problem: "1 + 1",
    solution: "2",
    category: "add",
    image1: "/images/maths/one.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/one.svg",
    image4: "/images/maths/two.svg"
  },
  {
    problem: "2 + 2",
    solution: "4",
    category: "add",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "5 + 5",
    solution: "10",
    category: "add",
    image1: "/images/maths/five.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/five.svg",
    image4: "/images/maths/ten.svg"
  },
  {
    problem: "6 / 2",
    solution: "3",
    category: "divide",
    image1: "/images/maths/six.svg",
    image2: "/images/maths/division.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/three.svg"
  },
  {
    problem: "10 - 1",
    solution: "9",
    category: "minus",
    image1: "/images/maths/ten.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/one.svg",
    image4: "/images/maths/nine.svg"
  },
  {
    problem: "8 - 4",
    solution: "4",
    category: "minus",
    image1: "/images/maths/eight.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "2 x 2",
    solution: "4",
    category: "times",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/times.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "7 + 2",
    solution: "9",
    category: "add",
    image1: "/images/maths/seven.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/nine.svg"
  },
  {
    problem: "5 - 4",
    solution: "1",
    category: "minus",
    image1: "/images/maths/five.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/one.svg"
  },
  {
    problem: "3 + 3",
    solution: "6",
    category: "add",
    image1: "/images/maths/three.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/three.svg",
    image4: "/images/maths/six.svg"
  },
  {
    problem: "6 + 4",
    solution: "10",
    category: "add",
    image1: "/images/maths/six.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/ten.svg"
  },
  {
    problem: "10 - 9",
    solution: "1",
    category: "minus",
    image1: "/images/maths/ten.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/nine.svg",
    image4: "/images/maths/one.svg"
  },
  {
    problem: "2 plus 2 is 4. Minus 1 that's 3, quick maths",
    category: "bigshaq",
    solution: "3",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/minus.svg",
    image5: "/images/maths/one.svg",
    image6: "/images/maths/three.svg"
  },

  //test file
  {
    word: "test",
    category: "test",
    image: "/images/test/test.svg"
  }

])
});
