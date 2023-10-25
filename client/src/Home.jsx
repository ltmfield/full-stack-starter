import {useEffect} from 'react';
import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';

import Item from './Item';

function Home() {

const [data, setData] = useState();

  useEffect(() => {
  const token = 'patfI4PZyTzjTqtSc.7b910194617fafd73695e89f6bb31c842090fe6b0d8e004b3c7860f0b8907c35';
  const url = 'https://api.airtable.com/v0/appHBW4OWD4DfQ5Xz/Stores?view=Grid%20view';
  fetch(url, {
    headers: {Authorization: `Bearer ${token}`}
  })
  .then((response) => response.json())
  .then((data)=> setData(data));
   }, []);

  
  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1>Home</h1>
        {data?.records.map((record) => <Item key={record.id} imgHolder ={record.fields.frontOfStore[0].url} title={record.fields.nameOfStore} />)}
        
      </main>
    </>
  );
}

export default Home;
