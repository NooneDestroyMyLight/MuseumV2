// import style from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//PAGE
// import GeneralPage from "./page/generalPage/GeneralPage";
import InteriorDesign from "./page/services/interiorDesign/InteriorDesign";
import GeneralPage from "./page/generalPage/GeneralPage";
import ConstructionAndRenovation from "./page/services/constructionAndRenovation/ConstructionAndRenovation";
import ArchitecturalDesign from "./page/services/architecturalDesign/ArchitecturalDesign";
import Review from "./page/review/Review";
import AboutUs from "./page/aboutUs/AboutUs";

function App() {
  return (
    <main>
      {/* <GeneralPage /> */}
      {/* <InteriorDesign /> */}
      {/* <ConstructionAndRenovation /> */}
      {/* <ArchitecturalDesign /> */}
      {/* <Review /> */}
      <AboutUs />
    </main>
  );
}

export default App;
