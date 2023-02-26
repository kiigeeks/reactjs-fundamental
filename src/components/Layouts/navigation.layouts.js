import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
    const pathName = window.location.pathname;

    console.log(pathName);
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">ReactJS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link style={pathName === "/" ? { color: "white", borderBottom: "2px solid white" } : {}} href="/">
                            {" "}
                            Home
                        </Nav.Link>
                        <Nav.Link style={pathName === "/albums" ? { color: "white", borderBottom: "2px solid white" } : {}} href="/albums">
                            Albums
                        </Nav.Link>
                        <Nav.Link style={pathName === "/posts" ? { color: "white", borderBottom: "2px solid white" } : {}} href="/posts">
                            Posts
                        </Nav.Link>
                        <Nav.Link style={pathName === "/photos" ? { color: "white", borderBottom: "2px solid white" } : {}} href="/photos">
                            Photos
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
