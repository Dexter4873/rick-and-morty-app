import {
  API_URL_CHARACTERS,
  API_URL_EPISODES,
  API_URL_LOCATIONS,
} from './constants.js';

export async function fetchGeneralInfo() {
  let res = await Promise.all([
    fetch(API_URL_CHARACTERS),
    fetch(API_URL_LOCATIONS),
    fetch(API_URL_EPISODES),
  ]);
  res = await Promise.all(res.map((item) => item.json()));
  return {
    characters: {
      count: res[0].info.count,
    },
    locations: {
      count: res[1].info.count,
    },
    episodes: {
      count: res[2].info.count,
    },
  };
}
