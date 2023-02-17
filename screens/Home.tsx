import styled from "styled-components/native";
import HorizontalListing from "../components/HorizontalListing";

const Home = () => {
  return (
    <ScreenWrapper>
      <HorizontalListing></HorizontalListing>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.View`
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
`;
export default Home;
