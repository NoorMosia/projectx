import { Text } from "react-native";

import styled from "styled-components/native";

const Notifications = () => {
  return (
    <ScreenWrapper>
      <Text>Home!</Text>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.View`
  background-color: red;
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
`;

export default Notifications;
