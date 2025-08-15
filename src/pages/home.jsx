import homeStyles from "../css/home.module.css";
function Home() {
  return (
    <div className={homeStyles.centerDiv}>
      <div>
        <form>
          <div className={homeStyles.formGroup}>
            <label for="topic-query">Search Select Create</label>
            <div>
              <input type="text" id="topic-query" name="topic-query"></input>
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
        <article>
          <h3>How it works...</h3>
          <p>
            SlideInator is a free, open-source software that allows you to
            search for a topic, select the websites you want as sources for your
            presentation, and then, after you hit 'create', it will scrape each
            of your source websites and automatically create a slideshow
            presentation.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
