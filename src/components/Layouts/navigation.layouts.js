import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
    const pathName = window.location.pathname
    return (
      <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/">DeaCourse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={ (pathName === "/") ? { color: "black", backgroundColor: "white", fontWeight: "500", borderRadius: "5px"} : {} } href="/"> Home</Nav.Link>
            <Nav.Link style={ (pathName === "/albums") ? { color: "black", backgroundColor: "white", fontWeight: "500", borderRadius: "5px"} : {} } href="/albums">Albums</Nav.Link>
            <Nav.Link style={ (pathName === "/posts") ? { color: "black", backgroundColor: "white", fontWeight: "500", borderRadius: "5px"} : {} } href="/posts">Posts</Nav.Link>
            {/* <Nav.Link style={ (pathName === "/photos") ? { color: "black", backgroundColor: "white", fontWeight: "500", borderRadius: "5px"} : {} } href="/photos">Photos</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation