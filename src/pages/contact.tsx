import {
  ArrowForwardIcon,
  CalendarIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [sendContactMessage, setSendContactMessage] = useState({
    isLoading: false,
  });

  const handleSubmit = async () => {
    setSendContactMessage({ isLoading: true });
    // Send contact message logic here
    setSendContactMessage({ isLoading: false });
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos, fugiat maiores non facere error recusandae.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos, fugiat maiores non facere error recusandae.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos, fugiat maiores non facere error recusandae.",
    },
  ];

  return (
    <VStack gap="10" mt={["10", "0"]} p={["6", "20"]}>
      <Center flexDirection={["column", "row"]} alignItems="flex-start" gap={8}>
        <VStack
          w={{ base: "full", sm: "3/5" }}
          py={10}
          px={6}
          spacing={3}
          bg="blackAlpha.200"
          shadow="lg"
          alignItems="flex-start"
        >
          <Text fontSize="3xl" fontWeight="semibold">
            Contact Us
          </Text>
          <Text>
            If you have any questions or inquiries, please don't hesitate to
            reach out to us.
          </Text>

          <VStack gap={2} alignItems="flex-start">
            {[
              {
                title: "Chat with us",
                value: "reach out to us at hello@overal-x.org",
                icon: <EmailIcon fontSize="2xl" />,
              },
              {
                title: "Call us",
                value: "Ring us on +234 81 6991 9049",
                icon: <PhoneIcon fontSize="2xl" />,
              },
              {
                title: "Our office",
                value: "Ibadan, Oyo State, Nigeria",
                icon: <CalendarIcon fontSize="2xl" />,
              },
            ].map((item, i) => (
              <HStack key={i} spacing={2}>
                <Box color="white" p="3" bg="blue.300" rounded="full">
                  {item.icon}
                </Box>
                <VStack alignItems="flex-start">
                  <Text fontSize="xl" fontWeight="medium">
                    {item.title}
                  </Text>
                  <Text color="GrayText">{item.value}</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>

        <VStack w="full" p={6}>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              value={form.fullname}
              name="fullname"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={form.email} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" value={form.phone} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              className="sm:col-span-2"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading={sendContactMessage.isLoading}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </VStack>
      </Center>

      <Box display="none">
        <Text
          fontSize="2xl"
          color="primary"
          fontWeight="medium"
          textAlign="center"
        >
          Frequently Asked Questions
        </Text>

        <VStack gridTemplateColumns={{ sm: "repeat(2, 1fr)" }} gridGap={6}>
          <Accordion w="full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i}>
                <AccordionButton>
                  <Text flex="1" textAlign="left">
                    {faq.question}
                  </Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text>{faq.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ContactPage;
