import styled from "styled-components";

export const PricingPlanContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  padding-bottom: 30px;
  flex: 1;
  margin-right: 80px;

  &:last-child {
    margin-right: 0;
  }

  .header {
    padding: 20px 0;
    background-color: #1d74eb;

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
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
  }

  .button {
    color: #000;
    background-color: #fff;
    border: 2px solid;
    border-color: #1d74eb;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #1d74eb;
      color: #fff;
    }
  }
`;
