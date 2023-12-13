import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useStaticContext } from './StaticContext';
import { useAuthContext } from './AuthContext';

import Item from './Item';

function Home() {
  const { user } = useAuthContext();
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1>Home</h1>
        {user && <div className="mb-3">
          <Link to="/items/new">Create a new Item</Link>
        </div>}
        <div className="row">
          {data?.map((record) => (
            <div key={record.id} className="col-3">
              <Item id={record.id} title={record.Title} imageUrl={record.AttachmentsUrl} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
