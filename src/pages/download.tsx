import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon, DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Syarat dan Formulir Pendaftaran Calon Ketua PPI Sulawesi Tengah",
    link: "/Pendaftaran-Calon-Ketua-PPI-Sulteng.pdf",
  },
  {
    id: 1,
    title:
      "Undangan Petunjuk Pelaksanaan dan Petunjuk Teknis Musyawarah Provinsi PPI Sulawesi Tengah",
    link: "Undangan_Juklak_Juknis_Musprov PPI ST.pdf",
  },
];

const Download = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Dokumen Pendukung Kegiatan</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Harap untuk mengunduh dokumen pendukung kegiatan dibawah ini.
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {data.map((singleData: any) => (
            <a key={singleData.id} href={singleData.link} download>
              <HStack align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={DownloadIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{singleData.title}</Text>
                </VStack>
              </HStack>
            </a>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Download;
