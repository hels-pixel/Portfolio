import pic from "../img/Beach.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Social from "../common/Social";

const Home =()=> {
    return <div className ="contents home">
        <img src= {pic} alt ="Devon Beach" className="display-picture"
        />
        <ReactTypingEffect className='typing-effect' text = {"Hello! I'm Helen"}/>
        <Social/>
        </div>;
};

export default Home;
