import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import artworks from "../data/artworks.json";

function ArtDetail() {
  const { id } = useParams();
  const art = artworks.find((a) => a.id === Number(id));

  if (!art) {
    return (
      <Container className="py-4">
        <p>Artwork not found.</p>
        <Link to="/">Back to gallery</Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Link to="/" className="btn btn-outline-secondary btn-sm mb-3">
        &larr; Back to gallery
      </Link>
      <Row className="g-4">
        <Col md={8}>
          <img src={art.image} alt={art.title} className="img-fluid rounded" />
        </Col>
        <Col md={4}>
          <h2>{art.title}</h2>
          <p className="text-muted">
            {art.artist}, {art.year}
          </p>
          <p>{art.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ArtDetail;