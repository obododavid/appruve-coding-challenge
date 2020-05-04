import React from "react";
import { AppContainer } from "./Appstyles";
import PricingPlan from "./components/pricingPlan/pricingPlan";

const Plans = [
  {
    name: "Bronze",
    price: "$69.99",
    benefits: [
      "100mb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  },
  {
    name: "Silver",
    price: "$99.99",
    benefits: [
      "400mb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  },
  {
    name: "Gold",
    price: "$169.99",
    benefits: [
      "1gb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  }
];

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
