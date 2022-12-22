import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";

export default function Login() {
  const redirect = useNavigate();
  const { Login } = useContext(AuthContext);
  const triggerAlert = () => {
    toast.success("Login Successfully! Redirected to home product page", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  };

  const handleSubmit = () => {
    Login();
  };
  let color = ` linear-gradient(
    -225deg,
    #ff057c 0%,
    #8d0b93 50%,
    #27f1ff 100%
  )`;

  return (
    <>
      <Flex mt="30px" w="100%" justifyContent="center">
        <Stack
          //   border='1px solid red'
          w="30%"
          mt="10px"
          float="left"
          spacing={5}
          mx={"auto"}
          py={12}
          px={6}
          margin="0"
        >
          <Box
            rounded={"lg"}
            borderColor={color}
            w="100%"
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={color}
                  onClick={() => {
                    triggerAlert();
                    handleSubmit();
                    setTimeout(() => {
                       redirect("/products");
                      
                    }, 1000);

                  }}
                  color={"white"}
                  _hover={{
                    bg: "pink",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Box mt="15px">
          <Image src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=360" />
        </Box>
      </Flex>
      <Footer />
      <ToastContainer />
    </>
  );
}
