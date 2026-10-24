import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ArtCard({ art, onView }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={art.image}
        alt={art.title}
        loading="lazy"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{art.title}</Card.Title>
        <Card.Text className="text-muted">
          {art.artist}, {art.year}
        </Card.Text>
        <div className="mt-auto d-flex gap-2">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => onView(art)}
          >
            Quick view
          </button>
          <Link className="btn btn-primary btn-sm" to={`/art/${art.id}`}>
            Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;