import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './components/Modal';
import Button from './components/button';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <Modal {...{ isOpen, setIsOpen }} />,
          document.body
        )}
      <Button onClick={() => setIsOpen(true)}>INSCRIPCIÓN GRATIS</Button>
    </>
  );
};

export default App;
