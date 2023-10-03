import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';

import Item from './Item';

function Home() {
  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1>Home</h1>
        <h3>Chimkin Numgies</h3>
        <Item title='GameScape'/>
        <Item title='Versus Games'/>
        <Item title='Game Post SF'/>
        <Item title='D20 Games Alameda'/>
      </main>
    </>
  );
}

export default Home;
