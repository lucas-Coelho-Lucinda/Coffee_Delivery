import styled from "styled-components";

export const GuidanceResquest = styled.div`
  position: absolute;
  top: 300px;
  right: 0px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 10px;
`;

export const OrderTitleAndSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleOfConcluidedOrder = styled.h1`
  position: relative;
  top: -120px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["yellow-300"]};
`;

export const SubTitleOfConcluidedOrder = styled.h3`
  position: relative;
  top: -120px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["gray-1000"]};
`;

export const OrderInfosOfRequest = styled.div`
  position: relative;
  top: -100px;
  padding: 20px;
  width: 526px;
  height: 270px;
  border-radius: 12px 20px 12px 20px;
  z-index: 0;
  //width: 450px;
  //height: 200px;
  //max-width: 400px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px; /* espessura da borda */
    background: linear-gradient(135deg, #dbac2c, #c47f17, #8047f8, #4b2995);
    border-radius: 12px 50px 12px 50px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const IconAndTextsInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextInfo = styled.h3`
  font-family: "Baloo 2", sans-serif;
  word-break: normal;
  white-space: normal;
  font-weight: normal;
`;
export const InforMark = styled.strong`
  color: ${(props) => props.theme["gray-800"]};
`;

interface PropsIconCard {
  color: string;
}

export const IconCard = styled.div<PropsIconCard>`
  width: fit-content;
  height: 15px;
  border-radius: 15px;
  padding: 0.375rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme[props.color]};
`;
