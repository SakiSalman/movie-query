import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showFetch } from "./showsApi";
import ShowCard from "../../components/showcards/ShowCard";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const dispatch = useDispatch();
    console.log(shows);
  // fetch all data
  useEffect(() => {
    dispatch(showFetch()).then(({ payload }) => {
      setShows(payload);
    });
  }, [dispatch]);
  return (
    <>
      <div className="allshow-wrapper " style={{ height: "90vh" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">All Shows</h2>
            </div>
          </div>
          <div className="row py-5">
            {shows &&
              shows.map((data, index) => {
                return (
                  <div className="col-12 col-md-3 col-sm-12 my-3">
                    <ShowCard data={data.show}/>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shows;
