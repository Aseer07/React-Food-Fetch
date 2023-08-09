import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";
import './Components/style.css';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Meal />} />
    <Route exact path="/:recipeId" element={<Recipe />} />
    </Routes>
      
    </div>
  )
}

export default App