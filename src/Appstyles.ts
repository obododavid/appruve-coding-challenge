import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9faff;

  @media (max-width: 765px) {
    flex-direction: column;
  }
`;
