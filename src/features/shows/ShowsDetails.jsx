import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import parse from "html-react-parser";
const ShowsDetails = () => {
  const { id } = useParams();
  const { shows } = useSelector((state) => state.show);
  const [details, setDrails] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const singelData = shows.find((data) => data.show.id == id);
    if (singelData) setDrails(singelData.show);
  }, [shows]);
  return (
    <>
      <div
        className="allshow-wrapper py-5 d-flex justify-content-center align-items-center"
        style={{ height: "auto" }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h3 className="text-center">Show Details</h3>
            </div>
          </div>
          <div className="card p-md-5 mx-auto">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "90%",
                          objectFit: "cover",
                        }}
                        src={details?.image?.original}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col">
                      <h3>{details?.name}</h3>
                      {parse(`${details?.summary}`)}
                      <button 
                      
                        onClick={() => setShowModal(!showModal)}
                      className="btn btn-primary btn-lg">
                        Buy Ticket
                      </button>

                      <div className="row">
                        <div className="col">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {showModal && (
        <Modal setModal={setShowModal} modal={showModal}>
          <Form setModal={setShowModal} modal={showModal} movie={details?.name} />
        </Modal>
      )}
    </>
  );
};

export default ShowsDetails;
