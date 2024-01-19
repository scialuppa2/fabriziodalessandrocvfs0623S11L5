import { useSelector } from "react-redux";
import AlbumGallery from "./AlbumGallery";
import { FaHeart } from "react-icons/fa";

const YourLibrary = () => {
  const savedSongs = useSelector((state) => state.fav.savedFavSongs);

  return (
    <div className="favouriteSongs">
      {savedSongs.length > 0 ? (
        <AlbumGallery title="Your favorite songs" songs={savedSongs} />
      ) : (
        <div className="text-center">
          <h1>No saved songs yet!</h1>
          <h4>Click the <FaHeart className="heart-icon" /> next to a song you like to save it.</h4>
        </div>
      )}
    </div>
  );
};

export default YourLibrary;
