import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxW="1300px"
      display="flex"
      h="100vh"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack height="350px" justify="space-around" mt={{ base: "8", md: "0" }}>
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as="h1">
          Get Crypto Related Knowledge
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          as="p"
          maxW={{ base: "100%", md: "80%" }}
        >
          Cryptocurrency markets are decentralised, which means they are not issued or backed by a central authority such as a government. Instead, they run across a network of computers. However, cryptocurrencies can be bought and sold via exchanges and stored in 'wallets' .
        </Text>
        <Box>
          <Button colorScheme="orange">Check Posts</Button>
          
          
        </Box>
      </Stack>
      <Flex mt={{ base: "8", md: "0" }} justifyContent="center">
        <Image
          width={{ base: "70%", md: "auto" }}
          mr="4"
          src="/images/img.png"
        />
      </Flex>
    </Container>
  );
};

export default Hero;
