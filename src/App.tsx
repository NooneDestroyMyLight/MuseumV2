// import style from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

//PAGE
// import GeneralPage from "./page/generalPage/GeneralPage";
import InteriorDesign from "./page/services/interiorDesign/InteriorDesign";
import GeneralPage from "./page/generalPage/GeneralPage";
import ConstructionAndRenovation from "./page/services/constructionAndRenovation/ConstructionAndRenovation";
import ArchitecturalDesign from "./page/services/architecturalDesign/ArchitecturalDesign";
import Review from "./page/review/Review";
import AboutUs from "./page/aboutUs/AboutUs";
import Project from "./page/project/Project";
import Service from "./page/services/Service";
import Cases from "./page/cases/Cases";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<GeneralPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route
          path="/services/construction-and-renovation"
          element={<ConstructionAndRenovation />}
        />
        <Route
          path="/services/architectural-design"
          element={<ArchitecturalDesign />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/сases" element={<Cases />} />
      </Routes>
    </main>
  );
}

export default App;
