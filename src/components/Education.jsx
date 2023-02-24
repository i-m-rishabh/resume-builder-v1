export default function Education({ education }) {
  return (
    <div>
      {education.length ? (
        <div className="education">
          <h3>Education</h3>
          {education.map(({ course, year, college }) => {
            return (
              <>
                <li>
                  <b>{course}</b> {"------------ "} {year} {college}
                </li>
              </>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
