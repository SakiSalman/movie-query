import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCard = ({data}) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <img
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          src={data?.image?.original}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="row">
            <div className="col-md-6">
              <p>Premwired : {data.premiered}</p>
            </div>
            <div className="col-md-6">
              <p>Rattings : {data.rating.average} Star</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => navigate(`/${data.id}`)}>View Details</button>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
