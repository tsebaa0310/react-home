const MoviesListData = [
  {
    id: 1,
    title: "Venom: Let There Be Carnage",
    genre: "Action",
    description:
      "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
    year: 2021,
    director: "Andy Serkis",
    poster:
      "https://c4.wallpaperflare.com/wallpaper/266/85/309/venom-wallpaper-preview.jpg",
    score: 5.9,
  },
  {
    id: 2,
    title: "Insidious: The Last Key",
    genre: "Horror",
    description:
      "Parapsychologist Dr. Elise Rainier faces her most fearsome and personal haunting yet, as she is drawn back to her ghostly childhood home where the terror began.",
    year: 2008,
    director: "Adam Robitel",
    poster:
      "https://posterspy.com/wp-content/uploads/2017/12/Insidious-The-Lasy-Key-alternative-movie-poster-illustration-V2no-frame-web.jpg",
    score: 5.7,
  },
  {
    id: 3,
    title: "Squid Game",
    genre: "Action",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.",
    year: 2021,
    director: "Hwang Dong-hyuk",
    poster:
      "https://i.pinimg.com/736x/5b/58/68/5b5868c52057d2a1ba26f560438a9274.jpg",
    score: 8.0,
  },
  {
    id: 4,
    title: "Deadpool 2",
    genre: "Action",
    description:
      "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with abilities from the brutal, time-traveling cyborg Cable.",
    year: 2018,
    director: "David Leitch",
    poster:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bbf076d-4798-4c53-acde-f5a2a84db4aa/db28lnd-be3b3f61-8812-4a58-98ef-4e1708d0d87b.jpg/v1/fit/w_800,h_1113,q_70,strp/deadpool_2_movie_poster_by_prabhatking01_db28lnd-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExMyIsInBhdGgiOiJcL2ZcLzRiYmYwNzZkLTQ3OTgtNGM1My1hY2RlLWY1YTJhODRkYjRhYVwvZGIyOGxuZC1iZTNiM2Y2MS04ODEyLTRhNTgtOThlZi00ZTE3MDhkMGQ4N2IuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sEZW5y5bTvDNZnFKFKqhpFPHRdg_BVbULcQYBDn4Fy0",
    score: 7.6,
  },
  {
    id: 5,
    title: "The Green Knight",
    genre: "Adventure",
    description:
      "A fantasy retelling of the medieval story of Sir Gawain and the Green Knight.",
    year: 2021,
    director: "David Lowery",
    poster:
      "https://www.cinelinx.com/wp-content/uploads/2020/12/the-green-knight-poster.jpeg",
    score: 6.6,
  },
  {
    id: 6,
    title: "Oppenheimer",
    genre: "Drama",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    year: 2023,
    director: "Christopher Nolan",
    poster:
      "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
    score: 8.3,
  },
  {
    id: 7,
    title: "John Wick: Chapter 2",
    genre: "Action",
    description:
      "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
    year: 2017,
    director: "Chad Stahelski",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
    score: 7.4,
  },
  {
    id: 8,
    title: "Pearl",
    genre: "Horror",
    description:
      "In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm.",
    year: 2022,
    director: "Ti West",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Q5MDU3MzItMGJiNC00NzA2LWJhZGEtOTU0ZWUwNzk5YzBlXkEyXkFqcGc@._V1_.jpg",
    score: 7.0,
  },
  {
    id: 9,
    title: "Tomb Raider",
    genre: "Fantasy",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father, Lord Richard Croft disappeared.",
    year: 2018,
    director: "Roar Uthaug",
    poster:
      "https://c4.wallpaperflare.com/wallpaper/230/997/118/tomb-raider-2018-alicia-vikander-lara-croft-tomb-raider-wallpaper-preview.jpg",
    score: 6.3,
  },
  {
    id: 10,
    title: "Pirates of the Caribbean",
    genre: "Action",
    description:
      "Captain Jack Sparrow searches for the Trident of Poseidon to rule the sea while being pursued by old rival Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle.",
    year: 2017,
    director: "Joachim Rønning",
    poster:
      "https://w0.peakpx.com/wallpaper/375/340/HD-wallpaper-pirates-of-caribbean-art-fantasy-johnny-depp-pirates-of-the-caribbean-sea-war.jpg",
    score: 6.5,
  },
  {
    id: 11,
    title: "Joker",
    genre: "Crime",
    description:
      "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos in Gotham City.",
    year: 2019,
    director: "Todd Phillips",
    poster:
      "https://c1.wallpaperflare.com/preview/620/74/344/thejoker-action-batman-movie.jpg",
    score: 8.4,
  },
  {
    id: 12,
    title: "Suicide Squad",
    genre: "Adventure",
    description:
      "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
    year: 2016,
    director: "David Ayer",
    poster: "https://cdn.wallpapersafari.com/9/26/aLY2yg.jpg",
    score: 5.9,
  },
  {
    id: 13,
    title: "Rumble",
    genre: "Comedy",
    description:
      "In a world where monster wrestling is a global sport and monsters are superstar athletes, teenage Winnie seeks to follow in her father's footsteps by coaching a loveable underdog monster into a champion.",
    year: 2021,
    director: "Hamish Grieve",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWIxYzU5NzMtNDk3MC00NTE5LWIwNDMtOWYwMTQzODAwMTM5XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    score: 5.9,
  },
  {
    id: 14,
    title: "Kung Fu Panda 4",
    genre: "Adventure",
    description:
      "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.",
    year: 2024,
    director: "Mike Mitchell",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTI0NmE3ODMtMTdmMC00MzY5LWJlODctNDZiNmI1ZmZkMTYxXkEyXkFqcGc@._V1_.jpg",
    score: 6.3,
  },
  {
    id: 15,
    title: "Inside Out 2",
    genre: "Animation",
    description:
      "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
    year: 2024,
    director: "Kelsey Mann",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmRiZTUxMWItMmU0Yy00MmZkLThjYzQtNmU4MmNmN2I3M2UyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    score: 7.7,
  },
  {
    id: 16,
    title: "Hotel Transylvania",
    genre: "Comedy",
    description:
      "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
    year: 2012,
    director: "Genndy Tartakovsky",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_.jpg",
    score: 7.0,
  },
  {
    id: 17,
    title: "The Roundup: Punishment",
    genre: "Action",
    description:
      "Detective Ma Seok-do joins the Cyber Investigation Team to nab Baek Chang-ki, a former mercenary and the head of an online gambling organization.",
    year: 2024,
    director: "Heo Myeong-haeng",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDIwZDU1ZTMtYWFjNC00Njg2LWEyNjQtMjBjODVjMzJhNWRmXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
    score: 6.7,
  },
  {
    id: 18,
    title: "Start-Up",
    genre: "Comedy",
    description:
      "Two boys are becoming real adults during a turbulent time as they experience a world that doesn't go their way.",
    year: 2019,
    director: "Jeong-Yeol Choi",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTI1YjUwZmMtYTRmZS00MmNiLWFiZjEtYTcwMmVjNzQ5NWE5XkEyXkFqcGdeQXVyMjU0ODQ5NTA@._V1_.jpg",
    score: 6.5,
  },
  {
    id: 19,
    title: "Crash Landing on You",
    genre: "Romance",
    description:
      "The absolute top secret love story of a chaebol heiress who made an emergency landing in North Korea because of a paragliding accident and a North Korean special officer who falls in love with her and who is hiding and protecting her.",
    year: 2018,
    director: "Hyun BinSon",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzRiZWUyN2YtNDI4YS00NTg2LTg0OTgtMGI2ZjU4ODQ4Yjk3XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    score: 8.7,
  },
  {
    id: 20,
    title: "Start-Up",
    genre: "Comedy",
    description:
      "Young entrepreneurs aspiring to launch virtual dreams into reality compete for success and love in the cutthroat world of Korea's high-tech industry.",
    year: 2020,
    director: "Bae Suzy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmI0OTYzNjItNjU1My00NjNhLTkyNjgtYjMzOThjMzA3OTMxXkEyXkFqcGc@._V1_.jpg",
    score: 8.0,
  },
];

export default MoviesListData;
