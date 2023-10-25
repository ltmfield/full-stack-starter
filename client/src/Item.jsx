import { Link } from 'react-router-dom';


function Item({ title, imgHolder, id}) {
    return <div className='container'>
        <div className='row'>
        <div className="col-xl-4 justify-content-center">
            <div className="card">
                <img className='cardImage' src={imgHolder}/>
            <div className='card-body'>
            <h4 className='card-title generalText'>
                {title} <Link to={`/detail/${id}`}>View More</Link>
            </h4>
            </div>
            </div>

                </div>
            </div>
         </div>;
}


export default Item;