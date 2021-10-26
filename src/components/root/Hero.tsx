import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex flex={1}>
        <div className="mx-10">
          <Image
            alt={"LOGO PPI"}
            objectFit={"cover"}
            src={"/assets/LogoPPI.png"}
          />
        </div>
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Musyawarah Provinsi
            </Text>
            <br />
            <Text color={"green.500"} as={"span"}>
              Purna Paskibaraka Indonesia
            </Text>
            <br />
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Sulawesi Tengah
            </Text>
            
           <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
Waktu : Tanggal 30 Oktober - 1 November 2021
             </Text>
             <br/>
             <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
Lokasi : Sutan Raja Hotel, Kota Palu, Sulawesi Tengah</Text>
            
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            BERDAYA SAING - KREATIF - MANDIRI
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Selengkapnya
            </Button>
            <Link href="/download" passHref>
              <Button rounded={"full"}>Dokumen</Button>
            </Link>
            <Link href="https://twb.nz/musprov-2021" passHref>
              <Button rounded={"full"}>Tunjukkan Dukunganmu!</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Hero;
