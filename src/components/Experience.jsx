export default function Experience({ experience }) {
  return (
    <div>
      {experience.length ? (
        <div className="experience">
          <h3>Experience</h3>
          {experience.map(({ year, company, role }) => {
            return (
              <div>
                <li>
                  {year} <b>{company}</b> {role}
                </li>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
