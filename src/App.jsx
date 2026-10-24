import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Modal, Navbar } from "react-bootstrap";
import ArtCard from "./components/ArtCard";
import ArtDetail from "./components/ArtDetail";
import artworks from "./data/artworks.json";

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <Container className="py-4">
      <Row xs={1} sm={2} lg={3} className="g-4">
        {artworks.map((art) => (
          <Col key={art.id}>
            <ArtCard art={art} onView={setSelected} />
          </Col>
        ))}
      </Row>

      <Modal show={selected !== null} onHide={() => setSelected(null)} centered size="lg">
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selected.image} alt={selected.title} className="img-fluid mb-3" />
              <p className="text-muted">
                {selected.artist}, {selected.year}
              </p>
              <p>{selected.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
}

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand as={Link} to="/">
          Art Gallery
        </Navbar.Brand>
      </Navbar>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/art/:id" element={<ArtDetail />} />
      </Routes>
    </>
  );
}

export default App;