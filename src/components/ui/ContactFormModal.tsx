import React from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { useModal } from '../../context/ModalContext';

const ContactFormModal: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useModal();

  return (
    <Modal
      isOpen={isContactModalOpen}
      onClose={closeContactModal}
      title="Get a Free Quote"
    >
      <ContactForm onSuccess={closeContactModal} />
    </Modal>
  );
};

export default ContactFormModal;