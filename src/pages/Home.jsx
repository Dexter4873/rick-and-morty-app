import Jumbotron from '../components/Home/Jumbotron.jsx';
import Card from '../components/Card.jsx';
import { useEffect, useState } from 'react';
import { fetchGeneralInfo } from '../apis/fetchGeneralInfo.js';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGeneralInfo();
      setData(res);
    };
    fetchData();
  });

  return (
    <>
      {data ? (
        <div>
          <Jumbotron
            charactersCount={data.characters.count}
            locationsCount={data.locations.count}
            episodesCount={data.episodes.count}
          />
          <div className="container">
            <h1 className="title">Characters</h1>
            <Card title="Title" subtitle="subtitle">
              <p>this is a text</p>
              <p>This is another text</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor.</p>
            </Card>
            <h1 className="title">Locations</h1>
            <h1 className="title">Episodes</h1>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default Home;
