import { Rating } from "@smastrom/react-rating";
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
          <div className="col-12 d-flex">
              <p>Rattings :</p>
              <div>{data?.rating?.average ? <Rating style={{ maxWidth: 100 }} value={parseInt((data?.rating?.average/10)*5)}
                                     readOnly
                                     /> : 'No Rattings' }</div>
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
