import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function OrderSuccess({ children, isOpen, onClose, onOpen }) {
  return (
    <>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalCloseButton />
        <ModalContent>{children}</ModalContent>
      </Modal>
    </>
  );
}
