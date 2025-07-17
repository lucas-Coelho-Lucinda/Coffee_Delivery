import styled from "styled-components";

export const BackgroundHeader = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 60rem;
  padding: 1.25rem;
  margin: 0rem 4.375rem;
  background-color: ${(props) => props.theme["background"]};

  @media ((max-width: 1400px) and (max-width: 1300px)) {
    gap: 45rem;
  }

  @media ((max-width: 1200px) and (max-width: 1100px)) {
    gap: 40rem;
  }

  @media ((max-width: 1000px) and (max-width: 900px)) {
    gap: 30rem;
  }

  @media ((max-width: 900px) and (max-width: 700px)) {
    gap: 20rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const CardImge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Boxaddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;
  border-radius: 8px;
  padding: 0.625rem;
  background: ${(props) => props.theme["purple-100"]};
`;
export const TextNameAndStateAcronym = styled.p`
  font-family: "Roboto", sans-serif;
  word-break: break-word;
  overflow-wrap: break-word;
  color: ${(props) => props.theme["purple-300"]};
`;

export const Boxkindness = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0.313rem;
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme["yellow-100"]};
`;

export const DivCount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%); /* Mantém a posição dinâmica */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; /* Mantém o contador sobre os outros elementos */
  background-color: ${(props) => props.theme["yellow-300"]};
  border-radius: 50%;
  padding: 0.25rem;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
`;

export const DivShoppingCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
`;

export const Countekindness = styled.span`
  font-size: 14px;
  padding: 0.25rem;
  width: 1.063rem;
  height: 0.938rem;
  border-radius: 15px;
  text-align: center;
  z-index: 9999;
  color: ${(props) => props.theme["white"]};
  font-family: "Roboto Condensed", sans-serif;
  background: ${(props) => props.theme["yellow-300"]};
`;
