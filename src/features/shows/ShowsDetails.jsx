import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import parse from "html-react-parser";
import { Rating } from '@smastrom/react-rating'

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
                <div className="col-md-5" data-aos={"fade-left"} data-aos-easing="ease-in-sine">
                  <div className="row">
                    <div className="col ">
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
                <div className="col-md-7" data-aos={"fade-left"} data-aos-easing="ease-in-sine">
                  <div className="row">
                    <div className="col">
                      <h3>{details?.name}</h3>
                      {parse(`${details?.summary}`)}

                      <div className="row py-2">
                        <div className="col">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">type</th>
                                <th scope="col">{details?.type}</th>
                              </tr>
                              <tr>
                                <th scope="col">
                                  Language</th>
                                <th scope="col">{details?.type}</th>
                              </tr>
                              <tr>
                                <th scope="col">Rating</th>
                                <th scope="col">{details?.rating?.average ? <Rating style={{ maxWidth: 100 }} value={parseInt((details?.rating?.average/10)*5)}
                                     readOnly
                                     /> : 'No Rattings' }</th>
                              </tr>
                              
                            </thead>
                            
                          </table>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowModal(!showModal)}
                        className="btn btn-primary btn-lg"
                      >
                        Buy Ticket
                      </button>
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
          <Form
            setModal={setShowModal}
            modal={showModal}
            movie={details?.name}
          />
        </Modal>
      )}
    </>
  );
};

export default ShowsDetails;
