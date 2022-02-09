import {
  Col,
  Container,
  Row,
  Text,
  Button,
  Spacer,
  Modal,
  Input,
} from "@nextui-org/react";
import Head from "next/head";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const submit = useCallback(async () => {
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [email]);

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Subscribe to our newsletter
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<FontAwesomeIcon icon={faEnvelope} />}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button auto onClick={() => submit()}>
            Subscribe
          </Button>
        </Modal.Footer>
      </Modal>

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
              developers, gamers, and everyone else. Upgrade your experience
              with the next generation of systems. Coming soon!
            </Text>
            <Container gap={0} display="flex" css={{ gap: 10 }}>
              <Button rounded color="primary" onClick={() => setOpen(true)}>
                Subscribe for Updates
              </Button>
            </Container>
          </Col>
          <Col>
            <img src="/hero.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
