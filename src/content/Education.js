import WideCard from "../common/WideCard.js";

export default function Education() {
  return (
    <div className="contents education">
      <h1> education..............<i class="fas fa-crow"></i></h1>
      <p1>*</p1>
      <br></br>
      <WideCard
        title="BA (Hons) Housing Studies"
        desc="Sheffield Hallam University"
        from="1994"
        to="1998"
      />
      <WideCard title="Certificate of Higher Education Computing and IT" desc="Open University"
       from="2017" to="2019"
       />

      <WideCard
        title="BSC (Hons) Computing and IT"
        desc="Open University"
        from="2017"
        to="2023"
        />
    </div>
  );
}
