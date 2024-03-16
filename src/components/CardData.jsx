import "./CardData.css";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const CardData = ({ photo }) => {
  const { toggleLike } = useContext(PhotoContext);
  return (
    <Card key={photo.id} onClick={() => toggleLike(photo.id)}>
      <div className="badge">
        {photo.liked ? <IconHeart filled /> : <IconHeart />}
      </div>
      <Card.Img className="img" src={photo.src.medium} alt={photo.title} />
      <Card.Body>
        <Card.Title>{photo.alt}</Card.Title>
        <Card.Text>Author: {photo.alt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardData;
