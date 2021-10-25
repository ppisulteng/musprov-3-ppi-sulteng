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
    title: "Tata Tertib Musyawarah",
    link: "/documents/Tata-Tertib.txt",
  },
  {
    id: 2,
    title: "Anggaran Dasar Organisasi",
    link: "/documents/Anggaran-Dasar.txt",
  },
  {
    id: 3,
    title: "Anggaran Rumah Tangga Organisasi",
    link: "/documents/Anggaran-Rumah-Tangga.txt",
  },
  {
    id: 4,
    title:
      "Syarat dan Formulir Pendaftaran Calon Ketua Umum PPI Sulawesi Tengah",
    link: "/documents/Syarat-dan-Formulir-Pendaftaran-Ketua-PPI-Sulteng.txt",
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
