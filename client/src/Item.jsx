import { Link } from 'react-router-dom';

function Item({ title }) {
    return <div>
        {title} <Link to="/detail">Link</Link>
        
         </div>;
}


export default Item;