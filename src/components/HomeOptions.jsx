import { Link } from "react-router-dom";

const HomeOptions = ({ subjects, optionClick }) => {
  return (
    <div>
      {/* {console.log(subjects)} */}
      {subjects.map((subject) => (
        <div key={subject.id}>
          <Link to={"/quiz"}>
            <button
              onClick={() => optionClick(subject.id)}
              key={subject.id}
              className="home--option "
            >
              <div
                className={`home--option__icon bg-[${subject.iconBoxColor}]`}
              >
                <img src={subject.icon} alt="html" />
              </div>
              <h3>{subject.title}</h3>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeOptions;
