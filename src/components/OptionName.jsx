const OptionName = ({ subjects, newId }) => {
  return (
    <>
      {subjects.map((subject) =>
        subject.id == newId ? (
          <div key={subject.id} className="option--name">
            <div className="option--name__img">
              <img src={subject.icon} alt="accessibility" />
            </div>
            <h2>{subject.title}</h2>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default OptionName;
