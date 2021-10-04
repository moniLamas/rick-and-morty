import "../styles/components/header.scss";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
        alt="Rick and Morty"
      />
    </header>
  );
}

export default Header;