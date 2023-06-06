import React, { useEffect, useState } from "react";
import ShowCard from "../../components/showcards/ShowCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { showFetch } from "./showsApi";

const Shows = () => {
  const dispatch = useDispatch()
  const {shows, loader } = useSelector((state) => state.show);

  const [allshows, setAllShows] = useState([])
  // Search Movies by language
  const handleLanguageSearch = (e) => {
    
    if (e.target.value == 'all') {
        return setAllShows(shows)
    }
    const movies = shows.filter(data =>data.show.language == `${e.target.value}`)
    if (movies) {
      setAllShows([...movies])
    }

  }
  // Search by type (Realtime search)
  const handleSearch = (e) => {
    const movies = shows.filter(data => data.show.name.toLowerCase().includes(e.target.value)
    ) 
    setAllShows(movies);
  }
  useEffect(() => {
    dispatch(showFetch())
    .then(({payload}) => {
     setAllShows(payload)
    })
  }, [])
  return (
    <>
      {loader && <Loader />}
      {!loader  && allshows && (
        <div className="allshow-wrapper " style={{ height: "90vh" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 d-flex justify-content-evenly align-items-center">
                <div className="search-area">
                  <form className="d-flex">
                    <input
                    onChange={handleSearch}
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <h2 className="text-center">All Shows</h2>
                <div className="language-search">
                  <label htmlFor="#">Search By Language</label>
                 
                    <select
                   onChange={(e) => handleLanguageSearch(e)}
                     className="form-select"
                     aria-label="Default select example"
                   >
                     <option value="all">All Language</option>
                     <option value="English">English</option>
                     <option value="Korean">Korean</option>{" "}
                   </select>
                 
                </div>
              </div>
            </div>
            <div className="row py-5">
              {allshows &&
                allshows.map((data, index) => {


                  const data_aos = ["fade-up",
                  "fade-down",
                  "fade-left",
                  "fade-right"]
            
                                 
                  return (
                    <div
                      className="col-12 col-md-3 col-sm-12 my-3"
                      key={index}
                      data-aos={ data_aos[index % data_aos.length]} data-aos-easing="ease-in-sine" >
                      <ShowCard data={data.show}  />
                      
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
