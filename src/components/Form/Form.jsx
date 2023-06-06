import React from "react";
import { useState } from "react";

const Form = ({ movie }) => {
  const [input, setInput] = useState({
    movie: "",
    name: "",
    email: "",
    phone: "",
  });
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Movie Name
                </label>
                <input
                  type="text"
                  name="movie"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Buy Ticket Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
