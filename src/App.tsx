import React from "react";
import { AppContainer } from "./Appstyles";
import PricingPlan from "./components/pricingPlan/pricingPlan";

const App = () => {
  return (
    <AppContainer>
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
    </AppContainer>
  );
};

export default App;
