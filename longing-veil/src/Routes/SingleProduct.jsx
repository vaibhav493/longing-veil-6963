import { useContext, useEffect } from "react";
import { Link} from 'react-router-dom'
import { productContext } from "../Context/ProductContext";
import React from "react";
import Loading from "../Other/Loading";
import "../Styles/singleProduct.css";
import { CartContext } from "../Context/CartContext";
// import singleProduct_question from "../Other/singleProduct_question";
import Footer from "../Components/Footer";
import {
  Box,
  Flex,
  Grid,
  Image,
  GridItem,
  Button,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineStar, AiFillGift } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdReplay30 } from "react-icons/md";
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function SingleProduct() {
  const { updateCartData } = useContext(CartContext);

  let color = ` linear-gradient(
    -225deg,
    #ff057c 0%,
    #8d0b93 50%,
    #27f1ff 100%
  )`;
  const { allProducts } = useContext(productContext);
  const { single_product_loading, single_product, curr_category } = allProducts;

  if (single_product_loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#EDF2F7" }}>
        <div className="main_container_breadCrumbs">
          <Breadcrumb ml='3%' separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/products">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color={"red"} as={Link} to="/single_product">
                product view
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Flex
          // border="1px solid red"
          gap="20px"
          margin="auto"
          ml="3%"
          width="70%"
          bg={'white'}
          // h="85vh"
        >
          {/* for product Image */}
          <Box mt="30px" w="20%" h="95%">
            <Grid>
              <GridItem h="300px">
                <Image ml="34%" h="100%" src={single_product.productImage} />
              </GridItem>
            </Grid>
          </Box>

          {/* //for product details */}
          <Box w="40%" h="90%">
            <Box
              pr="10px"
              pb="5px"
              borderBottomWidth="3px"
              borderBottomColor="#ECC94B"
              color={"blackAlpha.300"}
              float="left"
            >
              <h1
                style={{
                  fontFamily: "Cormorant SC, serif",
                  color: "#2D3748",
                  fontSize: "19px",
                  fontWeight: "bolder",
                }}
              >
                {single_product.productName}
              </h1>
            </Box>
            <br />
            <br />

            <Box
              pr="5px"
              pb="5px"
              borderBottomWidth="3px"
              borderBottomColor="#ECC94B"
              ml="5px"
              float="left"
            >
              <p
                style={{
                  textAlign: "start",
                  fontFamily: "Cormorant SC, serif",
                  fontWeight: "bold",
                  color: "#4A5568",
                  fontSize: "17px",
                }}
              >
                {single_product.productCategory}
              </p>
            </Box>
            <br />
            <br />

            <Flex mt="5px" gap="5px">
              <AiTwotoneStar size="19px" />
              <AiTwotoneStar size="19px" />
              <AiTwotoneStar size="19px" />
              <AiTwotoneStar size="19px" />
              <AiOutlineStar size="20px" />
            </Flex>

            <Center
              bg="white"
              border={"2px solid #2D3748"}
              borderRadius="6px"
              mt="7px"
              px="16px"
              float="left"
            >
              <p>$ {single_product.productPrice}</p>
            </Center>
            <br />

            <Box mt="20px">
              <p
                style={{
                  textAlign: "start",
                  fontFamily: "Cormorant SC, serif",
                  fontWeight: "bold",
                  color: "#4A5568",
                  fontSize: "14px",
                }}
              >
                {single_product.productOffer}
              </p>
            </Box>

            <Box
              bg={"#BEE3F8"}
              borderRadius="6px"
              mt="12px"
              px="13px"
              float="left"
            >
              <p>Unique product id : {single_product.id + "xzvy"}</p>
            </Box>
            <br />
            <br />
            <Box
              bg={"#BEE3F8"}
              borderRadius="6px"
              mt="12px"
              px="13px"
              float="left"
            >
              <p>Available stock : {single_product.ratingCount}</p>
            </Box>
            <br />
            <br />

            <Button
              onClick={() => updateCartData({ ...single_product, quantity: 1 })}
              float="left"
              mt="26px"
              color="white"
              bg="#2D3748"
              colorScheme="#BEE3F8"
              w="200px"
              h="33px"
              leftIcon={<FaCartArrowDown color="white" size="15px" />}
            >
              {"  Add to cart  "}
            </Button>
            <br />
            <br />
            <br />
            <Button
              float="left"
              mt="18px"
              outlineColor="#2D3748"
              color="#2D3748"
              bg="white"
              colorScheme="#BEE3F8"
              w="200px"
              h="30px"
              leftIcon={<BsHeartFill size="15px" />}
            >
              {"  Add to Wishlist  "}
            </Button>
            <br />
            <br />
            <br />

            <div>
              <p
                style={{
                  // border:'1px solid',
                  textAlign: "start",
                  fontFamily: "Cormorant SC, serif",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  color: "#4A5568",
                  fontSize: "16px",
                }}
              >
                'Above & Beyond' is a lavish masculine perfume which is warm and
                embracing. With the power of Patchouli and Lavender, it draws
                the wearer into a sense of piquant enchantment. Adding a hint to
                your sensuality; Above & Beyond is royal with a definite modern
                edge.ipsum. Sunt, id non. Natus quis dolor voluptatem ab!
                Possimus?
              </p>
            </div>

            <br />
            <Flex pb="30px" gap="25px">
              <Center
                w="40px"
                h="40px"
                borderRadius="10px"
                border="2px solid #2D3748"
              >
                <TbTruckDelivery size="24px" />
              </Center>
              <Center
                w="40px"
                h="40px"
                borderRadius="10px"
                border="2px solid #2D3748"
              >
                <AiFillGift size="24px" />
              </Center>
              <Center
                w="40px"
                h="40px"
                borderRadius="10px"
                border="2px solid #2D3748"
              >
                <MdOutlineSecurity size="24px" />
              </Center>
              <Center
                w="40px"
                h="40px"
                borderRadius="10px"
                border="2px solid #2D3748"
              >
                <MdReplay30 size="24px" />
              </Center>
            </Flex>
          </Box>
        </Flex>
      </div>
      <Footer />
    </>
  );
}

// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { MdLocalShipping } from "react-icons/md";

// export default function Simple() {
//   const { updateCartData } = useContext(CartContext);

//  let color = ` linear-gradient(
//     -225deg,
//     #ff057c 0%,
//     #8d0b93 50%,
//     #27f1ff 100%
//   )`;
//     const { allProducts } = useContext(productContext);
//     const {single_product_loading, single_product , curr_category } = allProducts;

//     if (single_product_loading){

//         return (
//           <div>
//             <Loading />
//           </div>
//         );
//     }
//     // const checkAndUpadateCart = (data) =>{

//     //      let isAvailable = updateCartData(data);

//     // }
//       return (
//         <>
//           <Container
//             ml="40px"
//             className="container_single_product"
//             width="70%"
//             maxW={"7xl"}
//           >
//             <Flex
//               gap="0"
//               columns={{ base: 1, lg: 2 }}
//               spacing={{ base: 1, md: 2 }}
//               py={{ base: 18, md: 7 }}
//             >
//               <Box mt="50px" w="50%">
//                 <Image
//                   rounded={"md"}
//                   alt={"product image"}
//                   src={single_product.productImage}
//                   m="auto"
//                   align={"center"}
//                   w={"80%"}
//                   // border='1px'

//                   // h={{ base: "100%", sm: "400px", lg: "500px" }}
//                 />
//               </Box>
//               <Stack
//                 borderLeft="1px solid grey"
//                 padding="20px"
//                 spacing={{ base: 6, md: 10 }}
//               >
//                 <Box as={"header"}>
//                   <Heading lineHeight={1.1} fontWeight={500}>
//                     {single_product.productName}
//                   </Heading>
//                   <Text color={"red"} fontWeight={300} fontSize={"2xl"}>
//                     {"$" + " " + single_product.productPrice}
//                   </Text>
//                 </Box>

//                 <Stack
//                   //   border={'2px dashed'}
//                   spacing={{ base: 2, sm: 6 }}
//                   direction={"column"}
//                   divider={<StackDivider borderColor={"red"} />}
//                 >
//                   <VStack spacing={{ base: 2, sm: 3 }}>
//                     <Text className="Single_product_text">
// 'Above & Beyond' is a lavish masculine perfume which is
// warm and embracing. With the power of Patchouli and
// Lavender, it draws the wearer into a sense of piquant
// enchantment. Adding a hint to your sensuality; Above &
// Beyond is royal with a definite modern edge.
//                     </Text>
//                   </VStack>
//                   <Box>
//                     <Text
//                       fontSize={{ base: "16px", lg: "18px" }}
//                       color={"red"}
//                       fontWeight={"500"}
//                       textTransform={"uppercase"}
//                       mb={"2"}
//                     >
//                       More Details
//                     </Text>

//                     <SimpleGrid columns={{ base: 1, md: 1 }} spacing={1}>
//                       <List className="single_product_fontstyle" spacing={1}>
//                         <ListItem>Parabeem Free</ListItem>
//                         <ListItem> Clinically Certified</ListItem>{" "}
//                         <ListItem>All natural</ListItem>
//                       </List>
//                       <List className="single_product_fontstyle" spacing={1}>
//                         <ListItem>
//                           {"category :" + single_product.productCategory}
//                         </ListItem>
//                         <ListItem>
//                           {" "}
//                           unique product Id :{" " + single_product.ratingCount}
//                         </ListItem>
//                         <ListItem>Long Lasting</ListItem>
//                       </List>
//                     </SimpleGrid>
//                   </Box>
//                   <Box>
//                     <Text
//                       fontSize={{ base: "16px", lg: "18px" }}
//                       color={"yellow.300"}
//                       fontWeight={"500"}
//                       textTransform={"uppercase"}
//                       mb={"2"}
//                     >
//                       Product Details
//                     </Text>

//                     <List spacing={1}>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Between lugs:
//                         </Text>{" "}
//                         20 mm
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Bracelet:
//                         </Text>{" "}
//                         soft plastic
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Case:
//                         </Text>{" "}
//                         pastic
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Case diameter:
//                         </Text>{" "}
//                         42 mm
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Dial color:
//                         </Text>{" "}
//                         Black
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Crystal:
//                         </Text>{" "}
//                         Domed, scratch‑resistant sapphire crystal with
//                         anti‑reflective treatment inside
//                       </ListItem>
//                       <ListItem>
//                         <Text as={"span"} fontWeight={"bold"}>
//                           Water resistance:
//                         </Text>{" "}
//                         5 bar (50 metres / 167 feet){" "}
//                       </ListItem>
//                     </List>
//                   </Box>
//                 </Stack>

//                 <Button
//                   onClick={() => updateCartData({...single_product,quantity:1})}
//                   rounded={"none"}
//                   w={"full"}
//                   mt={8}
//                   size={"lg"}
//                   py={"7"}
//                   bg={color}
//                   color="white"
//                   // bg={useColorModeValue("gray.900", "gray.50")}
//                   // color={useColorModeValue("white", "gray.900")}
//                   textTransform={"uppercase"}
//                   _hover={{
//                     transform: "translateY(3px)",
//                     boxShadow: "lg",
//                   }}
//                 >
//                   Add to cart
//                 </Button>

//                 <Stack
//                   direction="row"
//                   alignItems="center"
//                   justifyContent={"center"}
//                 >
//                   <p>
//                     Stock available product :{" " + single_product.ratingCount}
//                   </p>
//                 </Stack>
//               </Stack>
//             </Flex>
//           </Container>

//           <div>{/* <singleProduct_question /> */}</div>
//         </>
//       );
// }
