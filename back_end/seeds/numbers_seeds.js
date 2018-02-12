const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err)
    return;
  }

  const db = client.db('maths');

  db.collection('maths').drop();

  db.collection('maths').insert([
    //foods
    {
      problem: "1 + 1",
      category: "add",
      image: "/images/math/apple.svg"
      image: "/images/math/apple.svg"
      image: "/images/math/apple.svg"
    },
    {
      problem: "2 + 2",
      category: "add",
      image: "/images/math/banana.svg"
      image: "/images/math/banana.svg"
      image: "/images/math/banana.svg"
    },
    {
      problem: "5 + 5",
      category: "add",
      image: "/images/math/bread.svg"
      image: "/images/math/bread.svg"
      image: "/images/math/bread.svg"
    },
    {
      problem: "6 / 2",
      category: "divide",
      image: "/images/math/burger.svg"
      image: "/images/math/burger.svg"
      image: "/images/math/burger.svg"
    },
    {
      problem: "10 - 1",
      category: "minus",
      image: "/images/math/carrot.svg"
      image: "/images/math/carrot.svg"
      image: "/images/math/carrot.svg"
    },
    {
      problem: "8 - 4",
      category: "minus",
      image: "/images/math/cheese.svg"
      image: "/images/math/cheese.svg"
      image: "/images/math/cheese.svg"
    },
    {
      problem: "2 x 2",
      category: "times",
      image: "/images/math/egg.svg"
      image: "/images/math/egg.svg"
      image: "/images/math/egg.svg"
    },
    {
      problem: "7 + 2",
      category: "add",
      image: "/images/math/lemon.svg"
      image: "/images/math/lemon.svg"
      image: "/images/math/lemon.svg"
    },
    {
      problem: "5 - 4",
      category: "minus",
      image: "/images/math/orange.svg"
      image: "/images/math/orange.svg"
      image: "/images/math/orange.svg"
    },
    {
      problem: "3 + 3",
      category: "add",
      image: "/images/math/pizza.svg"
      image: "/images/math/pizza.svg"
      image: "/images/math/pizza.svg"
    },
    {
      problem: "6 + 4",
      category: "add",
      image: "/images/math/strawberry.svg"
      image: "/images/math/strawberry.svg"
      image: "/images/math/strawberry.svg"
    },
    {
      problem: "10 - 9",
      category: "minus",
      image: "/images/math/tomato.svg"
      image: "/images/math/tomato.svg"
      image: "/images/math/tomato.svg"
    },
    {
      problem: "2 plus 2 is 4. Minus 1 that's 3, quick maths",
      category: "add",
      image: "/images/math/tomato.svg"
      image: "/images/math/tomato.svg"
      image: "/images/math/tomato.svg"
    }
  ]

)
});
