function callToApi() {
  return fetch(
    `https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json`
  ).then((response) =>
    response.json().then((json) => {
      return json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          episodes: character.episode.length,
          homePlanet: character.origin,
        };
      });
    })
  );
}

export default callToApi;