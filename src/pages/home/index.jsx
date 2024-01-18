// React
import { useState } from 'react';

//Styles
import './styles.css';

// Imgs
import background from './../../imgs/background.png';
import avatar from './../../imgs/avatar.png';

// Components
import { RepositoryItem } from './../../components/RepositoryItem/';
import { User } from './../../components/User'

function App() {

  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState('');
  const [repositories, setRepositories] = useState(null)

  const handleGetData = async () => {

    const getUserData = await fetch(`https://api.github.com/users/${user}`);
    const userData = await getUserData.json()

    if(userData.name) {
      
      const { avatar_url, name, login, bio: description } = userData;
      setCurrentUser(avatar_url, name, login, description);

    }
    
  }
  
  return (
    <div className="App">
      <img src={background} className="background" alt="" />
      <header className="header">
        <h1 className="gitFind" >GitFind</h1>
      </header>
      <main>
        <section className="search-wrapper">
          <input 
            name="user" 
            className="search-input" 
            type="text" 
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="@usuário" />
          <button 
            className="search-button"
            onClick={handleGetData}>
            Buscar
          </button>
        </section>
        <section className="profile-wrapper"> 
         { currentUser.name ?  
          <User 
            avatar_url = {currentUser.avatar_url} 
            name = {currentUser.name}
            login = {currentUser.login}
            description = {currentUser.description}
          />
         : 
          <User 
            avatar_url = {avatar} 
            name = "DeveloperName"
            login = "@dev"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto similique amet distinctio necessitatibus."
            />
         } 
        </section>
        <section className="repositories-wrapper">
          <h2>Repositórios</h2>
          <ul class="repositories-list">
            <li>
              <RepositoryItem nomeDoRepositorio={"name"} descicao="
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus, doloribus dignissimos quod recusandae, maiores veritatis quos vel labore odit laborum iste similique doloremque, voluptatem molestias ipsa omnis fuga optio.
              "/>
              <RepositoryItem nomeDoRepositorio={"description"} descicao="
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
