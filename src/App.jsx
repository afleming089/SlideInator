import { BasicForm } from "./components/form";
import { TitleBar } from "./components/headers";
import "./App.css";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href=".src/index.css" />
      <TitleBar></TitleBar>
      <BasicForm></BasicForm>
    </>
  );
}

export default App;
