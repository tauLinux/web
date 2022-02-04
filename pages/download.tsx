import {
  Container,
  Text,
  Row,
  Col,
  Card,
  Button,
  Spacer,
} from "@nextui-org/react";

const Download = () => {
  return (
    <Container
      css={{
        padding: 40,
        minHeight: "100vh",
        flexDirection: "column",
        gap: 25,
        justifyContent: "center",
      }}
      display="flex"
    >
      <Row>
        <Col>
          <Text h1 css={{ textAlign: "center" }}>
            Download the{" "}
            <Text
              css={{ textGradient: "45deg, $blue500 -20%, $pink500 50%" }}
              span
            >
              Future
            </Text>
          </Text>
          <Text css={{ textAlign: "center" }}>
            Try out tauOS, or keep it. No matter what it is, Tau is free
            forever.
          </Text>
        </Col>
      </Row>
      <Row css={{ gap: 20 }} justify="center">
        <Col css={{ width: "25rem" }}>
          <Card hoverable>
            <Card.Body>
              <Text size={30} weight="bold">
                Desktop
              </Text>
              <Text>
                A desktop setup for all, whether you're an experienced user or
                just starting out, our desktop is the perfect place to get
                started.
              </Text>
            </Card.Body>
            <Card.Footer css={{ display: "flex", gap: 10 }}>
              <Button rounded auto css={{ flex: 1 }}>
                Download
              </Button>
              <Button rounded flat auto color="secondary">
                Remixes
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col css={{ width: "25rem" }}>
          <Card hoverable css={{ width: "25rem" }}>
            <Card.Body>
              <Text size={30} weight="bold">
                Server
              </Text>
              <Text>
                1:1 binary compatible with RHEL, tauOS server gives you a stable
                and powerful platform to run any workload with confidence.
              </Text>
            </Card.Body>
            <Card.Footer css={{ display: "flex", gap: 10 }}>
              <Button rounded auto css={{ flex: 1 }}>
                Download
              </Button>
              <Button rounded flat auto color="secondary">
                Cloud Deploy
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col css={{ width: "25rem" }}>
          <Card hoverable>
            <Card.Body>
              <Text size={30} weight="bold">
                Forward
              </Text>
              <Text>
                Feel like living on the edge? tauOS forward gives you the power
                to try out the latest features before they hit desktop.
                Stability not guaranteed.
              </Text>
            </Card.Body>
            <Card.Footer css={{ display: "flex", gap: 10 }}>
              <Button rounded auto css={{ flex: 1 }}>
                Download
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
