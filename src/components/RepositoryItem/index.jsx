import './styles.css';

const RepositoryItem = ({nomeDoRepositorio, descicao}) => {
  

  return (
    <div class="repository-wrapper">
      <h3 className="repository-name">
        {nomeDoRepositorio}
      </h3>
      <p className="reposity-description">
        {descicao}
      </p>
    </div>
  )
}

export { RepositoryItem };