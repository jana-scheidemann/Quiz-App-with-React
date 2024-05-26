const quizitems = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In 'Jurassic World', which company purchases InGen and creates Jurassic World?",
    correct_answer: "Masrani Global Corporation ",
    incorrect_answers: [
      "Biology Synthetics Technologies",
      "International Genetics Incorporated",
      "International Genetic Technologies",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which 90's comedy cult classic features cameos appearances from Meat Loaf, Alice Cooper and Chris Farley?",
    correct_answer: "Wayne's World",
    incorrect_answers: [
      "Bill &amp; Ted's Excellent Adventure",
      "Dumb and Dumber",
      "Austin Powers: International Man of Mystery",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "Which movie released in 2016 features Superman and Batman fighting?",
    correct_answer: "Batman v Superman: Dawn of Justice",
    incorrect_answers: [
      "Batman v Superman: Superapocalypse",
      "Batman v Superman: Black of Knight",
      "Batman v Superman: Knightfall",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the 1999 movie Fight Club, which of these is not a rule of the 'fight club'?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "In 'ALF', what was ALF's real name?",
    correct_answer: "Gordon Shumway",
    incorrect_answers: ["Gordon Milipp", "Gordon Foster", "Gordon von Gam"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "In the 'Jurassic Park' universe, when did 'Jurassic Park: San Diego' begin construction?",
    correct_answer: "1985",
    incorrect_answers: ["1988", "1986", "1993"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which one of these actors is said to be cut from the film 'E.T. the Extra-Terrestrial': Michael J. Fox, Harrison Ford, Andy Kaufman, Arnold Schwarzenegger?",
    correct_answer: "Harrison Ford",
    incorrect_answers: [
      "Michael J. Fox",
      "Andy Kaufman",
      "Arnold Schwarzenegger",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the name of the character Nicolas Cage plays in the movie 'National Treasure': Benjamin Franklin Gates, Thomas Jefferson Walker, George Washington Swanson, John Quincy Beckett?",
    correct_answer: "Benjamin Franklin Gates",
    incorrect_answers: [
      "Thomas Jefferson Walker",
      "George Washington Swanson",
      "John Quincy Beckett",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie 'Hardcore Henry'?",
    correct_answer: "Akan",
    incorrect_answers: ["Estelle", "Jimmy", "Henry"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "What is the name of the queen's pet in A Bug's Life?",
    correct_answer: "Aphie",
    incorrect_answers: ["Flik", "Hopper", "Dot"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question: "In the Friday The 13th series, what year did Jason drown in?",
    correct_answer: "1957",
    incorrect_answers: ["1955", "1953", "1959"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the name of the foley artist who designed the famous sounds of Star Wars, including Chewbacca's roar and R2-D2's beeps and whistles?",
    correct_answer: "Ben Burtt",
    incorrect_answers: ["Ken Burns", "Ralph McQuarrie", "Miranda Keyes"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What is the correct spelling of the protagonist of the book in The NeverEnding Story (1984): Atrayu, Atraiyu, Atraeyu, Atreyu?",
    correct_answer: "Atreyu",
    incorrect_answers: ["Atrayu", "Atraiyu", "Atraeyu"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which musical artist had a prominent role in the 2017 film 'Kingsman: The Golden Circle'?",
    correct_answer: "Elton John",
    incorrect_answers: ["Lady Gaga", "Rihanna", "Justin Bieber"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "Johnny Depp made his big-screen acting debut in which film?",
    correct_answer: "A Nightmare on Elm Street",
    incorrect_answers: ["My Bloody Valentine", "Halloween", "Friday the 13th"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    correct_answer: "Harry Potter",
    incorrect_answers: ["Ted", "Spy Kids", "Pirates of the Caribbean "],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "In the movie 'Spaceballs', what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "In what year was the movie 'Police Academy' released?",
    correct_answer: "1984",
    incorrect_answers: ["1986", "1985", "1983"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "According to 'Star Wars' lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the 1994 movie 'Speed', what is the minimum speed the bus must go to prevent to bomb from exploding?",
    correct_answer: "50 mph",
    incorrect_answers: ["60 mph", "40 mph", "70 mph"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "In the 1995 film 'Balto', who are Steele's accomplices?",
    correct_answer: "Kaltag, Nikki, and Star",
    incorrect_answers: [
      "Dusty, Kirby, and Ralph",
      "Nuk, Yak, and Sumac",
      "Jenna, Sylvie, and Dixie",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which town is the setting for the Disney movie The Love Bug (1968)?",
    correct_answer: "San Francisco",
    incorrect_answers: ["Los Angeles", "Sacramento", "San Jose"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "Which sci-fi cult films plot concerns aliens attempting to prevent humans from creating a doomsday weapon?",
    correct_answer: "Plan 9 from Outer Space",
    incorrect_answers: [
      "The Man from Planet X",
      "It Came from Outer Space",
      "The Day The Earth Stood Still",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "Who starred in the film 1973 movie 'Enter The Dragon'?",
    correct_answer: "Bruce Lee",
    incorrect_answers: ["Jackie Chan", "Jet Li", " Yun-Fat Chow"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "What is the species of the 'Predator' in the 1987 movie 'Predator'?",
    correct_answer: "Yautja",
    incorrect_answers: ["Xenomorph", "Praetorian", "Phocrex"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the 'Jurassic Park' universe, what is the name of the island that contains InGen's Site B?",
    correct_answer: "Isla Sorna",
    incorrect_answers: ["Isla Nublar", "Isla Pena", "Isla Muerta"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which one of these action movies are shot entirely in one take: Ip Man 2, The Bourne Legacy, Victoria, Leon: The Professional?",
    correct_answer: "Victoria",
    incorrect_answers: [
      "Ip Man 2",
      "The Bourne Legacy",
      "Leon: The Professional",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "In what year was the first Transformers movie released?",
    correct_answer: "1986",
    incorrect_answers: ["2007", "1984", "2009"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "What was the title of the first Bond movie, released in 1962?",
    correct_answer: "Dr. No",
    incorrect_answers: ["From Russia with Love", "Goldfinger", "Thunderball"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which of the following films was NOT directed by Quentin Tarantino? Jackie Brown, From Dusk till Dawn, Pulp Fiction, Reservoir Dogs",
    correct_answer: "From Dusk till Dawn",
    incorrect_answers: ["Jackie Brown", "Pulp Fiction", "Reservoir Dogs"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "What was Marilyn Monroe`s character's first name in the film 'Some Like It Hot'?",
    correct_answer: "Sugar",
    incorrect_answers: ["Honey", "Caramel", "Candy"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which actor plays the role of the main antagonist in the 2011 movie 'Tower Heist?'",
    correct_answer: "Alan Alda",
    incorrect_answers: ["Eddie Murphy", "Alec Baldwin", "Kevin Nealon"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "In Big Hero 6, what were Baymax's motions modeled after? Baby ... penguins, monkeys, ostriches, bears",
    correct_answer: "Baby penguins",
    incorrect_answers: ["Baby monkeys", "Baby ostriches", "Baby bears"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "What is the name of the supercomputer located in the control room in 'Jurassic Park' (1993)?",
    correct_answer: "Thinking Machines CM-5",
    incorrect_answers: ["Cray X-MP", "Cray XK7", "IBM Blue Gene/Q"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "In the movie 'Blade Runner', what is the term used for human-like androids?",
    correct_answer: "Replicants",
    incorrect_answers: ["Cylons", "Synthetics", "Skinjobs"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "Which animated movie was first to feature a celebrity as a voice actor?",
    correct_answer: "Aladdin",
    incorrect_answers: [
      "Toy Story",
      "James and the Giant Peach",
      "The Hunchback of Notre Dame",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "This movie contains the quote, 'Houston, we have a problem.'",
    correct_answer: "Apollo 13",
    incorrect_answers: ["The Right Stuff", "Capricorn One", "Marooned"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the 2014 film 'Birdman', what is the primary instrument in the score?",
    correct_answer: "Drums",
    incorrect_answers: ["Saxophone", "Violin", "Actual Live Birds Singing"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "The film Mad Max: Fury Road features the Dies Irae from which composer's requiem?",
    correct_answer: "Verdi",
    incorrect_answers: ["Mozart", "Berlioz", "Brahms"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the 1971 film 'Willy Wonka & the Chocolate Factory', who played Willy Wonka?",
    correct_answer: "Gene Wilder",
    incorrect_answers: ["Shia LeBouf", "Peter Ostrum", "Johnny Depp"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question:
      "In what Disney movie can you spot the character 'Pac-Man' in if you look closely enough in some scenes?",
    correct_answer: "Tron",
    incorrect_answers: ["Big Hero 6", "Fantasia", "Monsters, Inc."],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "The killer in the 1981 film 'My Bloody Valentine' wears what sort of outfit?",
    correct_answer: "Mining gear",
    incorrect_answers: ["Clown costume", "Santa suit", "Police uniform"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "Which actress danced the twist with John Travolta in 'Pulp Fiction'?",
    correct_answer: "Uma Thurman",
    incorrect_answers: ["Kathy Griffin", "Pam Grier", "Bridget Fonda"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
    correct_answer: "Highlander",
    incorrect_answers: ["Flash Gordon", "Labyrinth", "Howard the Duck"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which of the following James Bond villains is not affiliated with the SPECTRE organization: Dr. Julius No, Rosa Klebb, Emilio Largo, Auric Goldfinger?",
    correct_answer: "Auric Goldfinger",
    incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film? Strider, Tom Bombadil, Barliman Butterbur, Celeborn",
    correct_answer: "Tom Bombadil",
    incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which of these Disney classics was released in 1970? One Hundred and One Dalmatians, The Fox and the Hound, The Aristocats, The Little Mermaid",
    correct_answer: "The Aristocats",
    incorrect_answers: [
      "One Hundred and One Dalmatians",
      "The Fox and the Hound",
      "The Little Mermaid",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "What was the first feature-length computer-animated movie?",
    correct_answer: "Toy Story",
    incorrect_answers: ["Tron", "Lion king", "101 Dalmatians"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which actor plays the character 'Tommy Jarvis' in 'Friday the 13th: The Final Chapter' (1984)?",
    correct_answer: "Corey Feldman",
    incorrect_answers: ["Macaulay Culkin", "Mel Gibson", "Mark Hamill"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "In the movie 'The Iron Giant' this character is the protagonist.",
    correct_answer: "Hogarth Hughes",
    incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"],
  },
];

export default quizitems;
