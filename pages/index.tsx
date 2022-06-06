import {
  Col,
  Container,
  Row,
  Text,
  Button,
  Spacer,
  Input,
  styled,
  Link,
  Card,
  Grid,
  Image,
} from "@nextui-org/react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ButtonBar = styled("div", {
  display: "flex",
  gap: 10,
  justifyContent: "center",
});

const NavLinks = styled("div", {
  display: "flex",
  gap: 20,
});

const SocialLinks = styled("div", {
  display: "flex",
  gap: 10,
  fontSize: "1.25rem",
});

const Home = () => {
  return (
    <Container
      css={{
        minHeight: "100vh",
        flexDirection: "column",
      }}
      display="flex"
    >
      <Head>
        <title>tauOS</title>
      </Head>

      <Spacer y={3} />

      <Row
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text weight="bold" size="1.5rem">
          tauOS
        </Text>

        <NavLinks>
          <Link href="#" color="text">
            News
          </Link>
          <Link href="#" color="text">
            Downloads
          </Link>
          <Link href="#" color="text">
            Developers
          </Link>
        </NavLinks>

        <SocialLinks>
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
        </SocialLinks>
      </Row>

      <Spacer y={3} />

      <Row css={{ textAlign: "center" }}>
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            maxW: 750,
            mx: "auto",
            justifyContent: "center",
          }}
        >
          <Text h1 css={{ lineHeight: "$xs" }} weight="black" size="3.75rem">
            Create faster.
          </Text>
          <Spacer y={1.1} />
          <Text css={{ maxW: 550 }}>
            tauOS is the operating system built to help you make your best work.
            Seamless sync, elegant design, and a workflow that just gets out of
            your way, all out of the box.
          </Text>
          <Spacer y={1} />
          <ButtonBar>
            <Button>Stay Updated</Button>
            <Button flat color="secondary">
              Test the Alpha
            </Button>
          </ButtonBar>
        </Col>
      </Row>

      <Spacer y={3} />
      {/* 
      <Row
        css={{
          textAlign: "center",
        }}
      >
        <Col>
          <div>
            <Text size="3rem" weight="bold">
              All of your things, at once, in one place
            </Text>
            <Text>
              Imagine all of your files, settings, apps, passwords, accounts,
              all synced on all of your devices. Now stop imagining, we have it.
            </Text>
          </div>
        </Col>
      </Row> */}

      <Row
        css={{
          textAlign: "center",
        }}
      >
        <Col>
          <div>
            <Text size="3rem" weight="bold">
              Modern and elegant design, for a modern workflow
            </Text>
            <Text>
              Imagine all of your files, settings, apps, passwords, accounts,
              all synced on all of your devices. Now stop imagining, we have it.
            </Text>
          </div>
        </Col>
      </Row>

      {/* <Image
          src="/designs/Lumiere.png"
          containerCss={{
            flex: 1,
          }}
        />
        <Image src="/designs/Victrola.png" /> */}
      {/* <Grid.Container justify="center" gap={3}>
        <Grid>
          <Card cover>
            <Card.Image src="/designs/Lumiere.png" />
          </Card>
        </Grid>
        <Grid>
          <Card cover css={{ h: "100%" }}>
            <Card.Image src="/designs/Victrola.png" width="100%" />
          </Card>
        </Grid>
      </Grid.Container> */}
      {/* <Grid.Container justify="center" gap={3}>
        <Grid>
          <Card cover>
            <Card.Image width="100%" src="/designs/Notejot.png" />
          </Card>
        </Grid>

        <Grid>
          <Card cover>
            <Card.Image width="100%" src="/designs/Vasari.png" />
          </Card>
        </Grid>
      </Grid.Container> */}
      {/* <Row
        css={{
          textAlign: "center",
        }}
      >
        <Col>
          <div>
            <Text size="3rem" weight="bold">
              Ready for developers, amnd more ready
            </Text>
            <Text>
              Imagine all of your files, settings, apps, passwords, accounts,
              all synced on all of your devices. Now stop imagining, we have it.
            </Text>
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;
