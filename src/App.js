import Pic from './images/ProfilePic.jpg';
import './App.css';
import Profile from './Profile/Profile';
function App() {
  const styleObject = {color:"blue",textAlign: 'center'}
  return (
    <div style={styleObject} >
      <Profile FullName="Momar Madia Thiam"
       bio="jeune entrepeneur diplomé de l'école supérieure polytechnique de Dakar en tant qu'ingenieur en génie éléctrique option électronique et systeme des telecommunications. Toujours à la quette du savoir je suis aussi diplomé de Gomycode une prestigieuse école de formation en tant que developpeur fullstack en javascript. "
      profession="Ingénieur de conception chez Tesla Motor">
        {Pic}
      
      </Profile>
      
      
    </div>
    
    
  );
  
}



export default App;
