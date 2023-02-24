import PersonelInfo from "./components/PersonelInfo";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
function Resume({
  details: {
    phone = "",
    email = "",
    name,
    dob = "",
    experience = [],
    education = [],
    skills = []
  }
}) {
  return (
    <div>
      <Header />
      <PersonelInfo name={name} phone={phone} email={email} />
      {/* have to change map functionality. keep it simple in below 3 will deal later */}
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
}
export default Resume;
