async function sayJoke(apiUrl, jokeId) {
  try {
    const response = await fetch(apiUrl);
    const { jokes } = await response.json();

    if (!jokes) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = jokes.find(({ id }) => id === jokeId);

    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    joke.saySetup = function () {
      return this.setup;
    };

    joke.sayPunchLine = function () {
      return this.punchLine;
    };

    return joke;
  } catch (err) {
    throw err;
  }
}
