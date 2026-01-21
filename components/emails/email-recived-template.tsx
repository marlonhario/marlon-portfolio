import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  firstname: string;
  lastname: string;
  email: string;
  service: string;
  message: string;
  phone?: string | undefined;
}

export const EmailReceived = (data: EmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white font-linear">
        <Preview>
          {data.firstname} {data.lastname}
        </Preview>
        <Container className="mx-auto my-0 max-w-[560px] px-0 pt-5 pb-12">
          {/* <Heading className="text-[24px] tracking-[-0.5px] leading-[1.3] font-normal text-[#484848] pt-[17px] px-0 pb-0">
            Your login code for Linear
          </Heading> */}
          <Section className="py-[27px] px-0"></Section>
          <Text className="mb-[15px] mx-0 mt-0 leading-[1.4] text-[15px] text-[#3c4149]">
            email: {data.email};
          </Text>
          <Text className="mb-[15px] mx-0 mt-0 leading-[1.4] text-[15px] text-[#3c4149]">
            phone: {data.phone};
          </Text>
          <Text className="mb-[15px] mx-0 mt-0 leading-[1.4] text-[15px] text-[#3c4149]">
            service: {data.service};
          </Text>
          <Text className="mb-[15px] mx-0 mt-0 leading-[1.4] text-[15px] text-[#3c4149]">
            message: {data.message};
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
