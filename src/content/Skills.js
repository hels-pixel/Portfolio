export default function Skills () {
    const myskills= ["HTML", "CSS", "Javascript","React","wordpress"];

    return (
        <div className ="content skills">
            <h1>My Skills</h1>
            <br/>
            <ul>
                {myskills.map((skill)=> (<li>{skill}(</li>))}
            </ul>
        </div>
    );
}