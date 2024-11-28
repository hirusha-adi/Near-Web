
const Collapsible = ({ title, children }) => {
  return (
    <>
      <div className="collapse collapse-plus border-base-300 bg-base-200 border">
        <input type="checkbox" />
        <div
          className="collapse-title text-lg font-medium">
          {title.split(' ').map((word, index) =>
            word.startsWith('/') ? (
              <span key={index} className="code"> {word}</span>
            ) : (
              <span key={index}> {word} </span>
            )
          )}
        </div>
        <div
          className="collapse-content">
          <p>{children}</p>
        </div>
      </div>
    </>
  );
}

export { Collapsible }