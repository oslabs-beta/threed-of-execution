import React, { useState } from 'react';
import Modal from 'react-modal';
import { apiKeyModalStyle as styleObj } from '../Constants/inlineComponentStyle';

const APIModal = (props) => {
  const { modalOptions, setModalOptions } = props;

  const [apiTextValue, setApiTextValue] = useState('');
  const [headerValue, setHeaderValue] = useState('');

  const openModal = () => {
    setModalOptions({
      ...modalOptions,
      isModalOpen: true,
    });
  };

  const closeModal = () => {
    // console.log('close modal happened');
    setModalOptions({
      ...modalOptions,
      newHeadersKey: headerValue.trim(),
      newAPIKey: apiTextValue.trim(),
      isModalOpen: false,
    });
  };

  const styleComponent = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#31708b',
      width: '200px',
      borderRadius: '5px',
    },
  };

  return (
    <section id="API-key-modal">
      <button type="button" onClick={() => openModal()} id="API-button">
        Submit
        <br />
        API Key
      </button>
      <Modal
        isOpen={modalOptions.isModalOpen}
        //   onAfterOpen={this.afterOpenModal}
        onRequestClose={() => closeModal()}
        style={styleComponent}
        contentLabel="API Key"
      >

        <p id="modal-instructions">If your endpoint requires an API key, please enter it here.</p>
        <br />
        <form id="api-key-form">
          <label>
            Headers Key:
            <input
              type="text"
              id="headers-key-field"
              onChange={(e) => {
                const header = e.target.value;
                setHeaderValue(header);
              }}
            />
          </label>
          <label>
            API Key:
            <input
              type="text"
              id="api-key-field"
              onChange={(e) => {
                const api = e.target.value;
                setApiTextValue(api);
              }}
            />
          </label>
          <button type="button" id="modal-submit-button" onClick={() => closeModal()}>Add</button>
        </form>
      </Modal>
    </section>
  );
};

// this is supposed to be down here, but it looks weird. commented out for now
// Modal.setAppElement('#root');


export default APIModal;
