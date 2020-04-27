import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messagesToast: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messagesToast }) => {
  return (
    <Container>
      {messagesToast.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
