import { Container, Row } from "react-bootstrap";
import SidebarVertical from "./SidebarVertical";
import Main from "./Main";

export default function OuterContainer() {
  return (
    <Container fluid>
      <Row>
        <SidebarVertical />
        <Main />
      </Row>
    </Container>
  );
}
