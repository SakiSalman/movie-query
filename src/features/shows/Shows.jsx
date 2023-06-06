import React from "react";

import ShowCard from "../../components/showcards/ShowCard";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

const Shows = () => {
  const { shows, loader } = useSelector((state) => state.show);

  console.log(shows);
  const [allshows, setAllshows] = useState( shows)
  // Search Movies by language
  const handleLanguageSearch = (e) => {
    console.log(e.target.value);
    const movies = shows.filter(data =>data.show.language == `${e.target.value}`)
     if (movies) {
      setAllshows([...movies])
     }

  }
console.log(allshows);
  return (
    <>
      {loader && <Loader />}

      {!loader && (
        <div className="allshow-wrapper " style={{ height: "90vh" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 d-flex justify-content-evenly align-items-center">
                <div className="search-area">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-primary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <h2 className="text-center">All Shows</h2>
                <div className="language-search">
                  <label htmlFor="#">Search By Language</label>
                  <select
                  onChange={handleLanguageSearch}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>{" "}
                  </select>
                </div>
              </div>
            </div>
            <div className="row py-5">
              {allshows &&
                allshows.map((data, index) => {
                  return (
                    <div
                      className="col-12 col-md-3 col-sm-12 my-3"
                      key={data.id}
                    >
                      <ShowCard data={data.show} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shows;
