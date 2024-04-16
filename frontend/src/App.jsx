import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Search from "./component/search";
import Genre from "./component/Genre";
import Pagination from "./component/Pagination";

const App = () => {
  const [movie, setmovie] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [genre, setgenre] = useState("All");
  const [limit, setlimit] = useState(5);
  const [total, settotal] = useState();

  useEffect(() => {
    const getmovie = async () => {
      try {
        const url = `/api/movies?genre=${genre}&page=${page}&search=${search}&limit=${limit}`;

        const { data } = await axios.get(url);
        setmovie(data.movi);
        settotal(data.total);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(total);

    getmovie();
  }, [genre, limit, search, page]);

  return (
    <section className="  w-full  flex justify-center h-screen   items-center">
      <div className=" flex flex-col overflow-y-auto border-2 border-black  rounded-md w-8/12 max-sm:w-full max-sm:h-full">
        <div className=" bg-black flex items-center justify-between  p-3">
          <h1 className="text-5xl max-sm:text-2xl font-bold rounded-md  bg-yellow-500 p-2 text-black ">
            IMBD
          </h1>
          <Search setSearch={setSearch} setgenre={setgenre} />
        </div>
        <div className="flex ">
          <div className="   border-r-2 bg-green-500 border-black w-1/5  max-sm:w-2/5   ">
            <Genre setgenre={setgenre} genre={genre} />
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="flex justify-center items-center p-2 text-2xl font-bold border-b-2 border-black w-3/5 ">
                <h1>Title</h1>
              </div>
              <div className="flex p-2 text-2xl font-bold border-b-2 border-black items-center justify-center  w-1/4">
                <h1>Genre</h1>
              </div>
              <div className="flex p-2 text-2xl font-bold border-b-2 border-black  w-1/6 items-center  ">
                <h1>Rating</h1>
              </div>
            </div>
            <div className="flex flex-col h-[500px]  bg-green-300 gap-2 p-4">
              {movie?.map((item, index) => (
                <div className="w-full flex">
                  <div className="flex items-center w-3/5 " key={index}>
                    <div className="flex  items-center gap-4">
                      <img src={item.img} alt="" className="h-20 w-20" />
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <h1>{item.genre}</h1>
                  </div>
                  <div className="flex items-center justify-center w-1/6">
                    <h1>{item.rating}</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative  w-full border-t-2 border-black justify-center items-end bg-green-500 ">
              <Pagination
                page={page}
                limit={limit}
                total={total}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
