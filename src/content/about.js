import wp from "../img/laptop.jpg";
import hp from"../img/typewriter.jpg";
export default function About() {
    return (
      <div className="contents about">
      <h1>about me.......... <i class="fas fa-crow"></i></h1>
      <h3>*</h3>
        <p>
        <br></br>
        <img src={wp} alt="work" className="work-picture"/>
        <h2> work</h2>
          <br></br>
        I work full time as a manager in the homelessness department of 
        a Local Council but I'd like to change career. 
        I'm attending the web development bootcamp with Purple Beard and I'm in 
        the middle of studying part time for a BSC in Computing and IT
        with the Open University - I've completed 3 years of this.
        </p>
        <p>
        <br></br>
        <img src={hp} alt="typewriter" className="typewriter-picture"/>
        <h2>hobbies</h2>
        <br></br>
        I've got two children who take 
        up most of my free time but I like writing and spending 
        time outdoors walking.
        </p>

        

          
        
      </div>
    );
  }