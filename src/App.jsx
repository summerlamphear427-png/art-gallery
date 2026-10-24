import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArtCard from "./components/ArtCard";
import artworks from "./data/artworks.json";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Art Gallery</h1>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {artworks.map((art) => (
          <Col key={art.id}>
            <ArtCard art={art} onView={setSelected} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;