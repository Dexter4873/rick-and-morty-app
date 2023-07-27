import Jumbotron from '../components/Home/Jumbotron.jsx';
import { useEffect, useState } from 'react';
import { fetchGeneralInfo } from '../apis/fetchGeneralInfo.js';
import CharacterCard from '../components/CharacterCard.jsx';
import LocationCard from '../components/LocationCard.jsx';
import EpisodeCard from '../components/EpisodeCard.jsx';
import Grid from '../components/Grid.jsx';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGeneralInfo();
      setData(res);
    };

    fetchData();
  }, []);

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
            <Grid columns={3}>
              {data.characters.results.map((item) => (
                <CharacterCard key={item.id} {...item} />
              ))}
            </Grid>
            <h1 className="title">Locations</h1>
            <Grid columns={3}>
              {data.locations.results.map((item) => (
                <LocationCard key={item.id} {...item} />
              ))}
            </Grid>
            <h1 className="title">Episodes</h1>
            <Grid columns={3}>
              {data.episodes.results.map((item) => (
                <EpisodeCard key={item.id} {...item} />
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default Home;
