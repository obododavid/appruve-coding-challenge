import React from "react";
import { AppContainer } from "./Appstyles";
import PricingPlan from "./components/pricingPlan/pricingPlan";

const Plans = [
  {
    name: "Bronze Plan",
    price: "$69.99",
    benefits: [
      "100mb Disk space",
      "Unlimited download",
      "Free one year support",
      "Free 15gb linux hosting"
    ]
  },
  {
    name: "Silver Plan",
    price: "$99.99",
    benefits: [
      "400mb Disk space",
      "Unlimited download",
      "Free four year support",
      "Free 60gb linux hosting"
    ]
  },
  {
    name: "Gold Plan",
    price: "$169.99",
    benefits: [
      "1gb Disk space",
      "Unlimited download",
      "Free ten year support",
      "Free 150gb linux hosting"
    ]
  }
];

const App = () => {
  return (
    <AppContainer>
      {Plans.map(plan => {
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
