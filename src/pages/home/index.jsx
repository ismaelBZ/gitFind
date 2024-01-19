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
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState(null)

  const handleGetData = async () => {

    const getUserData = await fetch(`https://api.github.com/users/${user}`);
    const userData = await getUserData.json()

    if (userData.name) {
      
      const { avatar_url, name, login, bio: description } = userData;
      setCurrentUser({avatar_url, name, login, description});
    }

    const getRepositoriesData = await fetch(userData.repos_url);
    const repositoriesData = await getRepositoriesData.json();
    
    if (repositoriesData.length) {
      
      const newRepositories = repositoriesData.map(({name, description}) => { 
        return { name, description}
      })
      setRepositories(newRepositories);
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
            onClick={handleGetData}
          >
            Buscar
          </button>
        </section>
        <section className="profile-wrapper"> 
          { currentUser?.name ?  
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
            { repositories?.length ?
              repositories.map(({name, description}, index) => {
                return (
                  <li key={index}>
                    <RepositoryItem nomeDoRepositorio={name} descicao={description} />
                  </li>
                );
              })
              : <>
                  <li>
                    <RepositoryItem nomeDoRepositorio="Repositorie 1" descicao="
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi.
                    "/>
                  </li>
                  <li>
                    <RepositoryItem nomeDoRepositorio="Repositorie 2" descicao="
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolore doloremque quia soluta enim neque aperiam molestiae amet maiores non temporibus omnis. Cumque, repellendus ipsum quisquam voluptatem possimus nesciunt eligendi.
                    "/>
                  </li>
              </>
            } 
            </ul>
        </section>
      </main>
    </div>
  );

}

export default App;