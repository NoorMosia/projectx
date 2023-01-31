import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Wrapper>
  );
};

export default App;
