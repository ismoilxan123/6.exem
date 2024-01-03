import HomeOptions from "../components/HomeOptions";

const Home = ({ subjects, setSubjects, optionClick }) => {
  return (
    <div>
      <div className="home--hero">
        <div className="home--text">
          <h2>Welcome to the</h2>
          <h1>Frontend Quiz!</h1>
          <i>Pick a subject to get started.</i>
        </div>
        <div className="home--options">
          <HomeOptions
            subjects={subjects}
            setSubjects={setSubjects}
            optionClick={optionClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
