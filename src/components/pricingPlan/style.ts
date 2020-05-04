import styled from "styled-components";

export const PricingPlanContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  padding-bottom: 30px;

  .header {
    padding: 20px 0;
    background-color: blue;

    h1 {
      color: #fff;
    }
  }

  .pricing {
  }

  .benefits {
    list-style: none;
    padding: 0 20px;

    li {
      border-bottom: 1px solid black;
    }
  }

  .button {
    color: #000;
    background-color: #fff;
    border: 2px solid;
    border-color: blue;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: blue;
      color: #fff;
    }
  }
`;
