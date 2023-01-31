import { Text } from "react-native";

import styled from "styled-components/native";

const Settings = () => {
  return (
    <ScreenWrapper>
      <Text>Settings!</Text>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.View`
  background-color: red;
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
`;

export default Settings;
