import { Link } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function Item({ id, title, imageUrl }) {
  const { user } = useAuthContext();

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" />
      {id}: {title} <Link to={`/detail/${id}`}>View More</Link>
      {user && <Link to={`/items/${id}/edit`}>Edit</Link>}
    </div>
  );
}

export default Item;
