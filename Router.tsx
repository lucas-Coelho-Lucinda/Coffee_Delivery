
import Shopping from "./src/pages/Shopping";
import Header from "./src/components/Header";
import LagoutDefault from "./src/pages/Default";
import { useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { RequestConcluded } from "./src/pages/RequestConcluded";

import {
  saveOrderFinished,
  commitCoffeesAndReturnValues,
  toObtainFinalRequestedValues,
  toObtainOrderAndReturnValues,
} from "./src/Backup";

function Router() {
  const location = useLocation();

  const activedBackUpOfRoot = useCallback((root: string) => {
    if (root === "/") {
      const order = toObtainOrderAndReturnValues();
      commitCoffeesAndReturnValues(order.CoffeesInTheCart, true);
    }

    if (root === "/Request") {
      const requestfineshed = toObtainFinalRequestedValues();

      saveOrderFinished(requestfineshed);
    }
  }, []);
  useEffect(() => {
    const { pathname } = location;

    activedBackUpOfRoot(pathname);
  }, [activedBackUpOfRoot, location]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<LagoutDefault />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Request" element={<RequestConcluded />} />
      </Route>
    </Routes>
  );
}

export default Router;
