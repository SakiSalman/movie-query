import React from "react";
import { useState } from "react";
import createToast from "../../utility/toast";

const Form = ({ movie, modal, setModal }) => {
  const [input, setInput] = useState({
    movie: movie || "",
    name: "",
    email: "",
    phone: "",
  });

  //   handle input change
  console.log(input);
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // send data to localStorage
  const handleSubmit = (e) => {
    // stop auto loadinf form behavior
    e.preventDefault();

    // checking if any field is empty
    if (!input.movie || !input.name || !input.email || !input.phone) {
      return createToast('error', "All Fields Are Required!")
    }
    // checking if localstorage has items
    const storage = localStorage.getItem("booked_Ticket");

    if (!storage) {
      localStorage.setItem("booked_Ticket", JSON.stringify([]));
      localStorage.setItem("booked_Ticket", JSON.stringify([input]));

      setInput({name: "", email: "", phone: "" });
      setModal(!modal)
      return createToast('success', "Ticket is booked Successfully!")
     
    }
    // getting data into pare
    const data = JSON.parse(storage);
    // sending data to storage
    localStorage.setItem("booked_Ticket", JSON.stringify([...data, input]));
    setModal(!modal)
   setInput({name: "", email: "", phone: "" });
   return createToast('success', "Ticket is booked Successfully!")
  };
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
                  value={input.movie}
                  type="text"
                  name="movie"
                  disabled
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
                  onChange={handleInputChange}
                  value={input.name}
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
                  onChange={handleInputChange}
                  value={input.email}
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
                  onChange={handleInputChange}
                  value={input.phone}
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
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
