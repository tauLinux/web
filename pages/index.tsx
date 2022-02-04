import {
  Col,
  Container,
  Row,
  Text,
  Button,
  Spacer,
  Spinner,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = () => {
  const router = useRouter();

  return (
    <Container css={{ padding: 40, minHeight: "100vh" }} display="flex">
      <Head>
        <title>tauOS</title>
      </Head>
      <Row align="center">
        <Col>
          <Text
            weight="bold"
            h1
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
              lineHeight: "$sm",
            }}
            size={80}
          >
            Form.
          </Text>
          <Text
            weight="bold"
            h1
            css={{
              textGradient: "45deg, $purple500 -20%, $pink500 100%",
              lineHeight: "$sm",
            }}
            size={80}
          >
            Function.
          </Text>
          <Text
            weight="bold"
            h1
            css={{
              textGradient: "45deg, $red500 -20%, $blue500 100%",
              lineHeight: "$sm",
            }}
            size={80}
          >
            Elegance.
          </Text>
          <Spacer />
          <Text style={{ marginBottom: "2rem", width: 500 }}>
            Introducting tauOS, the modern operating system for creators,
            developers, gamers, and everyone else. Upgrade your experience with
            the next generation of systems.
          </Text>
          <Container gap={0} display="flex" css={{ gap: 10 }}>
            <Button rounded color="primary">
              Learn More
            </Button>
            <Button
              rounded
              color="secondary"
              onClick={() => router.push("/download")}
            >
              Install Now
            </Button>
          </Container>
        </Col>
        <Col>
          <img src="/hero.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
