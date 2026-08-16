export default function Header() {
  return (
    <header className="site-header">
      <div className="government-bar" aria-label="Barra institucional Brasil">
        <div className="container government-bar__inner">
          <span className="brand-flag">BRASIL</span>
          <nav aria-label="Links governamentais">
            <a href="#conteudo">Ir para o conteúdo</a>
            <a href="#menu">Ir para o menu</a>
            <a href="#busca">Ir para a busca</a>
          </nav>
        </div>
      </div>

      <div className="portal-header">
        <div className="container portal-header__inner">
          <div>
            <p>Campus Guarulhos</p>
            <strong>Instituto Federal de São Paulo</strong>
            <span>MINISTÉRIO DA EDUCAÇÃO</span>
          </div>
          <form className="portal-search" role="search">
            <label className="sr-only" htmlFor="portal-search">
              Buscar no portal
            </label>
            <input id="portal-search" type="search" placeholder="Buscar no portal" />
            <button type="submit" aria-label="Buscar">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <nav id="menu" className="main-nav" aria-label="Menu principal">
        <div className="container main-nav__inner">
          <a href="#conteudo">Acesso à informação</a>
          <a href="#contato">Contato</a>
          <a href="#localizacao">Localização</a>
          <a href="#ouvidoria">Ouvidoria</a>
          <a href="#servicos">Serviços e sistemas</a>
        </div>
      </nav>
    </header>
  );
}
