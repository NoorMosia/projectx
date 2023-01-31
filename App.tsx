import styled from "styled-components/native";

import Tab from "./navigation/tab";

const App: React.FC = () => {
  return <Tab></Tab>;
};

// 18 - 17 - 1

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default App;
