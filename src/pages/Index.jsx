import { useState } from 'react';
import {
  Container,
  VStack,
  Input,
  Button,
  Textarea,
  Box,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react';

const Index = () => {
  const [contentDetails, setContentDetails] = useState('');
  const [transactionData, setTransactionData] = useState('');
  const [invoicePreview, setInvoicePreview] = useState('');
  const toast = useToast();

  const handleGenerateInvoice = () => {
    if (!contentDetails || !transactionData) {
      toast({
        title: 'Error',
        description: "Please fill in all fields to generate the invoice.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const preview = `Invoice Details:\nContent: ${contentDetails}\nTransactions: ${transactionData}`;
    setInvoicePreview(preview);
    toast({
      title: 'Invoice Generated',
      description: "Invoice has been successfully generated.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Invoice Generator</Heading>
        <Text fontSize="md">Fill in the details below to generate your invoice.</Text>
        <Box>
          <Text mb={2}>Content Details:</Text>
          <Textarea
            placeholder="Enter content details"
            value={contentDetails}
            onChange={(e) => setContentDetails(e.target.value)}
          />
        </Box>
        <Box>
          <Text mb={2}>Transaction Data:</Text>
          <Textarea
            placeholder="Enter transaction data"
            value={transactionData}
            onChange={(e) => setTransactionData(e.target.value)}
          />
        </Box>
        <Button colorScheme="blue" onClick={handleGenerateInvoice}>Generate Invoice</Button>
        {invoicePreview && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">Invoice Preview:</Text>
            <Text whiteSpace="pre-wrap">{invoicePreview}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;