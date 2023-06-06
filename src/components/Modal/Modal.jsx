import React from 'react'

const Modal = ({children, modal, setModal}) => {
  return (
    <div className='modal-wrapper'>
        
        <div className="modal-inner">
            <div className="container">
                <div className="card">
                   <div className="close-btn-wrap">
                   <span className='close-btn' onClick={() => {
                    setModal(!modal)
                   }}>X</span>
                   </div>
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal