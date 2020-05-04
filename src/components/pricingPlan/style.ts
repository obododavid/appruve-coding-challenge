import styled from "styled-components";

export const PricingPlanContainer = styled.div`
  box-shadow: 1px 1px 5px 0px black;
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
    margin-bottom: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h1 {
      color: #fff;
    }
  }

  .pricing {
    margin-bottom: 40px;
  }

  .benefits {
    list-style: none;
    padding: 0 20px;
    margin-bottom: 40px;

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
