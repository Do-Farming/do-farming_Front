import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CenteredView,
  CloseButton,
  ModalText,
  ModalView,
} from './CustomModal.styled';

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  text: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  text,
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}
      onRequestClose={onClose}
    >
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose}>
            <Icon name="close" size={20} color="#000" />
          </CloseButton>
          <ModalText>{text}</ModalText>
          {children}
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default CustomModal;
