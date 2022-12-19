
import {
  Drawer,
  DrawerBody,
  
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function CheckoutFormModel({ children, isOpen, onClose, onOpen }) {
  
   

  return (
    <>
     
      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerBody>
           {
            children
           }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}