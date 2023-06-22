import React, { useState } from 'react';
import './MainPage.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-left">Left Content</div>
        <div className="header-center">Center Content</div>
        <div className="header-right">
          <button className="hamburger" onClick={openModal}>
            ☰
          </button>
          {showModal && (
            <div className="modal">
              <button className="close" onClick={closeModal}>
                ×
              </button>
              Modal Content
            </div>
          )}
        </div>
      </div>
      <div className="main">Main Content</div>
      <div className="footer">Footer Content</div>
    </div>
  );
}

export default App;
