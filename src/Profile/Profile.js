import PropTypes from "prop-types"
import FunctionClick from './FunctionClick';
//  import './Profile/Profile.css';
const Profile = props => {
    function clickHandler(e){
        e.preventDefault();
        alert("")
    
      }  
      console.log(props)
        return (

      <div>
        <div> {props.FullName} </div>
        <div>  {props.bio}  </div>
        <div>   {props.profession} </div>
        <img src={props.children} atl="profileImage"/> <br/>
        <FunctionClick Name={props.FullName}
        />
    </div>
        )
    ;
    

        
};


Profile.defaultProps = {
    FullName: "Alassane LY",
    bio: "scientifique toujours à la quette du savoir",
    profession: "Ingenieur de conception"
};
Profile.propTypes = {
    FullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}


export default Profile;
