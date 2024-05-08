import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "src/components/Button";
import { Navbar } from "src/components/Navbar/Navbar";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main>
      <Navbar />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div>
        <Button text="Go Back" onClick={() =>navigate(-1)} />
        <Button text="Go Home" onClick={() =>navigate("/")}/>
        </div>
      </div>
    </main>
  );
};
