import React from 'react';

const Modal = ({closeModal, enlargeItem}) => (
    <div className="modal">
        <button className="non-border modal-text" onClick={closeModal}>CLOSE</button>
        <div className={enlargeItem.portrait ? 'modal-image-container-port' : 'modal-image-container'}>
          <img src={ enlargeItem.item } alt="largeImage"/>
          <p className="modal-text">{ enlargeItem.about }, { enlargeItem.type }</p>
          <p className="modal-text">{ enlargeItem.description }</p>
        </div>
    </div>
)

export default Modal