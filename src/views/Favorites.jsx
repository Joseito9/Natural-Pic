import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import CardData from "../components/CardData";
import empty from "../assets/icons/giphy.gif";

const Favorites = () => {
  const { liked, toggleLike } = useContext(PhotoContext);
  if (liked && liked.length > 0) {
    return (
      <div className="gallery grid-columns-5 p-3">
        {liked.map((photo) => (
          <CardData
            key={photo.id}
            photo={photo}
            onClick={() => toggleLike(photo.id)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p className="empty">No tienes fotos favoritas 😢</p>
        <img className="empty-img" src={empty} alt="john-travolta-empty" />
      </div>
    );
  }
};
export default Favorites;
