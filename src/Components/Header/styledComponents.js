import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
`;

export const Heading = styled.p`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 700;
  color: #25282b;
  text-align: left;
  letter-spacing: 0px;
  line-height: 32px;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-left: 30px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 40%;
  align-items: center;
  background-color: #fdc435;
`;

// eslint-disable-next-line no-undef
export const Navigation = styled(Link)`
  height: 69px;
  width: 28px;
  margin-left: 30px;
  margin-right: 10px;
  gap: 2px;
  font-size: 13px;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-left: 50px;
    margin-right: 22px;
  }
`;
