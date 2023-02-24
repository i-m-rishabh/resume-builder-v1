export default function Skills({ skills }) {
  return (
    <div>
      {skills.length ? (
        <div className="skills">
          <h3>skills</h3>
          {skills.map((skill) => {
            return (
              <div>
                <li>{skill}</li>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
