import React from "react";
import { PricingPlanContainer } from "./style";

const PricingPlan: React.FC = () => {
  return (
    <PricingPlanContainer>
      <section className="header">
        <h1>Bronze plan</h1>
      </section>
      <section className="pricing">
        <img src="" alt="" />
        <h1>$69.99</h1>
      </section>
      <ul className="benefits">
        <li>100mb Disk space</li>
        <li>Unlimited download</li>
        <li>Free one year support</li>
        <li>Free 15gb linux hosting</li>
      </ul>
      <button className="button">Purchase Now</button>
    </PricingPlanContainer>
  );
};

export default PricingPlan;
