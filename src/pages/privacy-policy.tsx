import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
  return (
    <Box maxW="800px" m="auto" mt="4" p={6}>
      <Heading as="h1" size="xl" mb={6}>
        Privacy Policy
      </Heading>
      <Text>
        Overal-X is committed to protecting and respecting your privacy. This
        Privacy Policy outlines how we collect, use, and safeguard your personal
        information when you visit our website overal-x.org or use our services.
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Information We Collect
      </Heading>
      <Text>
        We may collect and process the following data:
        <ul>
          <li>
            Personal information such as your name, email address, phone number,
            and other contact details when you voluntarily provide it to us.
          </li>
          <li>
            Information related to your use of our services, including but not
            limited to log data, IP addresses, browser type, and access times.
          </li>
          <li>
            Any other information that you choose to provide to us when
            interacting with our website or services.
          </li>
        </ul>
      </Text>

      <Heading as="h2" size="lg" my={6}>
        How We Use Your Information
      </Heading>
      <Text>
        We may use the information we collect from you for the following
        purposes:
        <ul>
          <li>To provide and maintain our services to you.</li>
          <li>
            To personalize your experience and improve our website based on your
            feedback.
          </li>
          <li>To respond to your inquiries, questions, and requests.</li>
          <li>
            To send you promotional and marketing communications that we believe
            may be of interest to you.
          </li>
          <li>
            To analyze and improve the performance and functioning of our
            website and services.
          </li>
        </ul>
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Data Security
      </Heading>
      <Text>
        We are committed to ensuring that your information is secure. We have
        implemented suitable physical, electronic, and managerial procedures to
        safeguard and secure the information we collect online.
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Information Sharing
      </Heading>
      <Text>
        We may share your information with third parties only in the following
        circumstances:
        <ul>
          <li>
            When required to do so by law or in response to a valid legal
            request.
          </li>
          <li>
            With trusted third-party service providers who assist us in
            operating our website, conducting our business, or servicing you, as
            long as those parties agree to keep this information confidential.
          </li>
        </ul>
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Your Rights
      </Heading>
      <Text>
        You have the right to:
        <ul>
          <li>Request access to the personal information we hold about you.</li>
          <li>
            Request correction of the personal information that we hold about
            you.
          </li>
          <li>Request the erasure of your personal information.</li>
          <li>Object to the processing of your personal information.</li>
          <li>
            Request the restriction of processing of your personal information.
          </li>
          <li>
            Request the transfer of your personal information to another party.
          </li>
        </ul>
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Changes to This Privacy Policy
      </Heading>
      <Text>
        We reserve the right to update this Privacy Policy at any time. We will
        notify you of any changes by posting the new Privacy Policy on this
        page. You are advised to review this Privacy Policy periodically for any
        changes.
      </Text>

      <Heading as="h2" size="lg" my={6}>
        Contact Us
      </Heading>
      <Text>
        If you have any questions about this Privacy Policy or our practices
        regarding your personal information, please contact us at{" "}
        <a href="mailto:hello@overal-x.org">hello@overal-x.org</a>.
      </Text>
    </Box>
  );
};

export default PrivacyPolicyPage;
