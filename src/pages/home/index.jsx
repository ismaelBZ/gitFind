//Styles
import './styles.css';

// Imgs
import background from './../../imgs/background.png'
import avatar from './../../imgs/avatar.png'

// Components
import { RepositoryItem } from './../../components/RepositoryItem/'

function App() {
  return (
    <div className="App">
      <img src={background} className="background" alt="" />
      <header className="header">
        <h1 className="gitFind" >GitFind</h1>
      </header>
      <main>
        <section className="search-wrapper">
          <input name="user" className="search-input" type="text" placeholder="@usuário" />
          <button className="search-button" type="submit">
            Buscar
          </button>
        </section>
        <section className="profile-wrapper">
          <img className="developer-image" src={avatar} alt="" />
          <div className="developer-info">
            <h2 className="developer-name">DeveloperName</h2>
            <a href="https://github.com" target="_blank" rel="noreferrer">@dev</a>
            <p className="developer-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique amet distinctio necessitatibus.</p>
          </div>
        </section>
        <section className="repositories-wrapper">
          <h2>Repositórios</h2>
          <ul class="repositories-list">
            <li>
              <RepositoryItem nomeDoRepositorio={"Exemplo 1"} descicao="
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus, doloribus dignissimos quod recusandae, maiores veritatis quos vel labore odit laborum iste similique doloremque, voluptatem molestias ipsa omnis fuga optio.
              "/>
              <RepositoryItem nomeDoRepositorio={"Exemplo 2"} descicao="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi.
              "/> 
              <RepositoryItem nomeDoRepositorio={"Exemplo 3"} descicao="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi.
              "/>
              <RepositoryItem nomeDoRepositorio={"Exemplo 4"} descicao="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi.
              "/>
              <RepositoryItem nomeDoRepositorio={"Exemplo 5"} descicao="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi."/>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
