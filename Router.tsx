import { Routes, Route } from "react-router-dom";
import Shopping from "./src/pages/Shopping";
import Header from "./src/components/Header";
import LagoutDefault from "./src/pages/Default";
import { RequestConcluded } from "./src/pages/RequestConcluded";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<LagoutDefault />}/>
        <Route path="/Shopping" element={<Shopping />}/>
         <Route path="/Request" element={<RequestConcluded />}/>
      </Route>
    </Routes>
  );
}

export default Router;
