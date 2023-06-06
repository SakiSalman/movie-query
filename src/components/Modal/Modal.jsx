import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='modal-wrapper'>
        
        <div className="modal-inner">
            <div className="container">
                <div className="card">
                   <div className="close-btn-wrap">
                   <span className='close-btn'>X</span>
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