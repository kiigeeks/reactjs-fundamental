import { Nav, Navbar, Container, ButtonToolbar } from "react-bootstrap";

const Navigation = () => {
    const pathName = window.location.pathname
    return (
      <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/">DeaCourse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={ (pathName === "/") ? { color: "white", borderBottom: "2px solid"} : {} } href="/"> Home</Nav.Link>
            <Nav.Link style={ (pathName === "/albums") ? { color: "white", borderBottom: "2px solid"} : {} } href="/albums">Albums</Nav.Link>
            <Nav.Link style={ (pathName === "/posts") ? { color: "white", borderBottom: "2px solid"} : {} } href="/posts">Post</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation