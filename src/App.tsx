// import style from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//PAGE
// import GeneralPage from "./page/generalPage/GeneralPage";
import InteriorDesign from "./page/services/interiorDesign/InteriorDesign";
import GeneralPage from "./page/generalPage/GeneralPage";
import ConstructionAndRenovation from "./page/services/constructionAndRenovation/ConstructionAndRenovation";

// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstra  p.min.css";
//<Button>Bootstap Button</Button>

function App() {
  return (
    <main>
      {/* <GeneralPage /> */}
      {/* <InteriorDesign /> */}
      <ConstructionAndRenovation />
    </main>
  );
}

export default App;
