export default function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#home">Bilim<span>Hub</span></a>
      <nav aria-label="Негізгі мәзір">
        <a href="#home">Басты бет</a>
        <a href="#about">Біз туралы</a>
        <a href="#services">Курстар</a>
        <a className="nav-button" href="#contact">Байланыс</a>
      </nav>
    </header>
  );
}