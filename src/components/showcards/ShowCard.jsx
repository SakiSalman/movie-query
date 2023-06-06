import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCard = ({data}) => {
    const navigate = useNavigate()
  return (
    <>
      <div class="card">
        <img
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
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
