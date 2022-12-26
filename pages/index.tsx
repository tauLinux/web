import { Col, Container, Row, Text, Button, Spacer } from "@nextui-org/react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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
            the next generation of systems. Coming soon!
          </Text>
          <Container gap={0} display="flex" css={{ gap: 10 }}>
            <Button
              rounded
              color="primary"
              as="a"
              //@ts-ignore
              href="https://cdn.forms-content.sg-form.com/a03c8cea-beb2-11ec-9291-6a630c659945
              "
            >
              Subscribe for Updates
            </Button>
            <Button.Group css={{ m: 0 }} rounded flat color="secondary">
              <Button icon={<FontAwesomeIcon icon={faGithub} />} title="GitHub" href="https://github.com/tau-OS" as="a" />
              <Button icon={<FontAwesomeIcon icon={faTwitter} />} title="Twitter" href="https://twitter.com/tauOS_" as="a" />
              <Button icon={<FontAwesomeIcon icon={faDiscord} />} title="Discord" href="https://discord.gg/5fdPuxTg5Q" as="a" />
              <Button icon={<FontAwesomeIcon icon={faBook} />} title="Documentation" href="https://docs.tauos.co/" as="a" />
              <Button icon={<FontAwesomeIcon icon={faCode} />} title="Developer Information" href="https://developers.tauos.co/" as="a" />
            </Button.Group>
          </Container>
        </Col>
        <Col>
          <img src="/hero.png" alt="Desktop Preview" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
