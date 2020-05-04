import React, { useState, useEffect } from "react";
import { AppContainer } from "./Appstyles";
import PricingPlan from "./components/pricingPlan/pricingPlan";
import fetchPlans from "./mocks/pricingPlan";

const App = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans().then(res => setPlans(res.data.plans));
  }, []);
  return (
    <AppContainer>
      {plans.map(plan => {
        const { name, price, benefits } = plan;
        return (
          <PricingPlan
            key={name}
            name={name}
            price={price}
            benefits={benefits}
          />
        );
      })}
    </AppContainer>
  );
};

export default App;
