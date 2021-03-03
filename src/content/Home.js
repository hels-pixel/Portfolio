import dp from "../img/portrait BW.jpg";
import ReactTypingEffect from "react-typing-effect";
import Social from "../common/Social";
const Home = () => {
   return (
     <div className="contents home">
      <h1><Social/></h1>
     <br/>
      <img src={dp} alt="helen foster" className="display-picture" />
          <ReactTypingEffect
          className="typing-effect"
          text={"helen foster" }
          />
        <i class="fas fa-crow"></i>
        <p>*</p>
        </div>
          
      );
 };

export default Home;