import { FaStar } from "react-icons/fa";

const movieData = [
  {
    title: "Blade Runner 2049",
    year: 2017,
    duration: 164, // in minutes
    dir: "Denis Villeneuve",
    rating: 8.0, // user rating out of 10
    totalRatings: 515000, // total number of ratings
    censor: "R", // censor rating
    poster: "posters/bladerunner.jpg"
  },
  {
    title: "Fight Club",
    year: 1999,
    duration: 139,
    dir: "David Fincher",
    rating: 8.8,
    totalRatings: 2100000,
    censor: "R",
    poster: "posters/fightclub.jpg"

  },
  {
    title: "Incendies",
    year: 2010,
    duration: 131,
    dir: "Denis Villeneuve",
    rating: 8.3,
    totalRatings: 160000,
    censor: "R",
    poster: "posters/incendies.jpg"
  },
  {
    title: "The Iron Giant",
    year: 1999,
    duration: 86,
    dir: "Brad Bird",
    rating: 8.1,
    totalRatings: 230000,
    censor: "PG",
    poster: "posters/irongiant.jpg"
  },
  {
    title: "Joker",
    year: 2019,
    duration: 122,
    dir: "Todd Phillips",
    rating: 8.4,
    totalRatings: 1300000,
    censor: "R",
    poster: "posters/joker.jpg"
  },
  {
    title: "Oppenheimer",
    year: 2023,
    duration: 180,
    dir: "Christopher Nolan",
    rating: 8.9,
    totalRatings: 550000,
    censor: "R",
    poster: "posters/oppenhiemer.jpg"
  },
];

function App() {
  return (
    <>
      <Header />
      <Movies />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="flex flex-col w-full justify-center h-[200px] items-center">
      <h1 className="text-6xl text-[#EEEEEE] font-bowlby  mb-[15px]">
        Movie Picks
      </h1>
      <p className="font-mono text-[#DC5F00]">
        Illuminating truths we may never have considered
      </p>
    </div>
  );
}

function Movies() {
  return(
    <div className="grid grid-cols-3 w-full gap-10 justify-items-center">
      {movieData.map((ele) => (<Movie movie={ele}/>))}
    </div>
  )
}

function Movie({movie}) {

  console.log(movie.poster);


  

  return (
    <div className="flex flex-row w-[440px] h-[240px] p-[20px]  rounded-2xl shadow shadow-transparent hover:shadow-black hover:scale-105 transition ease-in-out delay-150">
      <div className="w-[200px] h-[200px]">
        <img
          src={movie.poster}
          alt="bladerunner"
          style={{ objectFit: "contain" , width:"200px", height:"190px"}}
        />
      </div>
      <div className="w-[200px] h-[200px] flex p-4 text-[#eeeeee]">
        <ul className="w-[150px]">
          <li className="my-5">{movie.title}</li>
          <div className="flex align-middle justify-between my-5 ">
            <li>{movie.year}</li>
            <li>{movie.duration + "m"}</li>
            <li>{movie.censor}</li>
          </div>
          <li className="my-5">
            <div className="flex flex-row  items-center text-[#DC5F00]">
              <FaStar className="mr-2" />
              {movie.rating}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-center text-[#DC5F00]  p-2">
      <h1>Empowering creativity and connection through the art of cinema.</h1>
    </div>
  );
}

export default App;
