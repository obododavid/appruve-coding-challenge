import React from "react";
import { PricingPlanContainer } from "./style";

interface Props {
  name: string;
  price: string;
  benefits: string[];
}

const PricingPlan: React.FC<Props> = ({ name, price, benefits }) => {
  return (
    <PricingPlanContainer>
      <section className="header">
        <h1>{name}</h1>
      </section>
      <section className="pricing">
        <h1>{price}</h1>
      </section>
      <ul className="benefits">
        {benefits.map(benefit => {
          return <li key={benefit}>{benefit}</li>;
        })}
      </ul>
      <button className="button">Purchase Now</button>
    </PricingPlanContainer>
  );
};

export default PricingPlan;
