import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="error-message">
      <h1>
        <i>Oops!</i>
      </h1>
      <h1 className="error-text">{status}</h1>
      <h1>
        <i>{statusText}</i>
      </h1>
    </div>
  );
};

export default Error;