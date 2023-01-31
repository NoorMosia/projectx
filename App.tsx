import styled from "styled-components/native";

import Drawer from "./navigation/drawer";

const App: React.FC = () => {
  return <Drawer></Drawer>;
};

// 18 - 17 - 1

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default App;
