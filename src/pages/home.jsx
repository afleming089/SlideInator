function Home() {
  return (
    <>
      <form>
        <span>
          <label for="topic-query">Search Select Create</label>
        </span>
        <input type="text" id="topic-query" name="topic-query"></input>
        <button type="submit">Search</button>
      </form>

      <article>
        <h2>How it works...</h2>
        <p>
          SlideInator is a free, open-source software that allows you to search
          for a topic, select the websites you want as sources for your
          presentation, and then, after you hit 'create', it will scrape each of
          your source websites and automatically create a slideshow
          presentation.
        </p>
      </article>
    </>
  );
}

export default Home;
