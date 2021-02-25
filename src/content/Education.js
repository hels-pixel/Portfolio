import Widecard from "../common/Widecard";

export default function Education() {
    return (
        <div className="contents">
            <h1>My Education</h1>
            <br/>
            <Widecard
            title="BA (Hons) Housing Studies" 
            desc="Sheffield Hallam University"
            from ="1994"
            to ="1998"
            />
        </div>
    );
}