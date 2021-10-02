import "../styles/App.scss";
import "../styles/components/header.scss";
import { useState, useEffect } from "react";
import api from "../services/callToApi";
import CharacterList from "./CharacterList";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    api().then((initialData) => {
      setData(initialData);
    });
  }, []);

  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <>
      <header className="header">
        <h1 className="header__title">Characters</h1>
        <img
          className="header__img"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Rick and Morty"
        />
      </header>
      <main className="container">
        <form className="form" action="">
          <label htmlFor="search" className="form__label">
            Buscador
          </label>
          <input
            type="text"
            id="search"
            name="search"
            className="form__input"
            placeholder="Nombre del personaje"
            value={searchName}
            onChange={handleSearchName}
          />
        </form>
        <section className="list">
          <CharacterList data={filteredData} />
        </section>
      </main>
      <footer className="footer">
        <p className="copy">&copy; Rick and Morty 2021</p>
      </footer>
    </>
  );
}

export default App;
