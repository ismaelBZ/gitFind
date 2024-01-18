import './styles.css';

const User = ({avatar_url, name, login, description}) => {

  return (
    <>
      <img className="developer-image" src={avatar_url} alt="" /> 
      <div className="developer-info">
        <h2 className="developer-name">{name}</h2> 
        <a href="https://github.com" target="_blank" rel="noreferrer">{login}</a>
        <p className="developer-description">{description}</p>
      </div>
    </>
  )
}

export { User };
