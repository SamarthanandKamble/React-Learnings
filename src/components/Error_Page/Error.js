import { useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1>
        {error.status} : {error.statusText}
      </h1>
      <h2>Oops something went wrong!!!</h2>
    </div>
  );
};

export default Error;
