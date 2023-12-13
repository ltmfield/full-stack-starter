import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <main className="container">
      <h1>{data?.Title}</h1>
      <img src={data?.Attachments}></img>
      <h3>{data?.Website}</h3>
    </main>
  );
}

export default Detail;
