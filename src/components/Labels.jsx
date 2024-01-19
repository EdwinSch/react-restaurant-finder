const Labels = ({ labels }) => {
  return (
    <div className="labels-wrapper">
      {labels.map((label, index) => {
        return (
          <p className="label" key={index}>
            {label}
          </p>
        );
      })}
    </div>
  );
};

export default Labels;
