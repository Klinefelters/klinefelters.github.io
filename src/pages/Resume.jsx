import { Document, Page } from 'react-pdf';
import { Box, Flex, useMediaQuery, IconButton, Heading } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Footer from '../components/Footer';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Resume() {
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

    return (
        <Box overflowY="auto" h="100%" sx={{
            '&::-webkit-scrollbar': {
                display: 'auto',
            },
            'msOverflowStyle': 'auto',
            'scrollbarWidth': 'auto',
        }}
        >
            <Flex justifyContent="center" alignItems="center" m="2em">
                <Heading as="h1">
                    Resume
                    <IconButton as="a" href="/resume.pdf" download m="2" icon={<DownloadIcon />} variant="unstyled" />
                </Heading>

            </Flex>
            <Flex justifyContent="center" alignItems="center" m="2em">
                <Document file="/resume.pdf">
                    <Page scale={isSmallerScreen ? .5 : 1} pageNumber={1} />
                </Document>
            </Flex>
            <Footer />
        </Box>
    );
}