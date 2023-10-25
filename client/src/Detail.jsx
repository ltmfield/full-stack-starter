import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';

function Detail(){
const { id } = useParams();
const [data, setData] = useState();

useEffect(() => {
const token = 'patfI4PZyTzjTqtSc.7b910194617fafd73695e89f6bb31c842090fe6b0d8e004b3c7860f0b8907c35';
  const url = 'https://api.airtable.com/v0/appHBW4OWD4DfQ5Xz/Stores?view=Grid%20view';
  fetch(url, {
    headers: {Authorization: `Bearer ${token}`}
  })
  .then((response) => response.json())
  .then((data)=> setData(data));
 }, [id]);

    return (
    <main>
<div className="container detailView my-5">
      <div className="card row flex-row">
      <div className="col-lg-8 card-body">
        <h1 className="card-title">Versus Games</h1>
        <img src="https://cdn.glitch.global/235ab3c1-7563-4560-aea3-8a01b896903c/VersusGames2.webp?v=1691525145400" alt="StoreFront"/>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Phone Number</li>
            <li className="list-group-item">Regular Drafts?</li>
            <li className="list-group-item">Buys singles?</li>
            <li className="list-group-item">Sells singles?</li>
            <li className="list-group-item">Open Tables?</li>

          </ul>

      </div>
      </div>
      </div>

        </main>
        );
    
    
}

export default Detail;