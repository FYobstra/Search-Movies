import { Navigate , Route, Routes } from "react-router-dom";
import { MainWrapper } from "./Layouts"
import { publicRoutes } from "./Pages";

function App() {

  return (
    <div>
     <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      {publicRoutes.map((data,index) => (
        <Route exact={true} path={data.path} key={index} element={<MainWrapper component={data.element} />} />
      ))}
     </Routes>
    </div>
  )
}

export default App
