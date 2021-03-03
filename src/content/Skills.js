export default function Skills() {
    const myskills = ["HTML", "CSS", "JavaScript", "React", "Python","Java","Linux Command Line"];
    return (
      <div className="contents skills">
        <h1>skills..........<i class="fas fa-crow"></i></h1>
        <h2>*</h2>
        <br />
        <ul>
          {myskills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  