import { Text, View } from "react-native";

import styled from "styled-components/native";

const HorizontalListing = () => {
  return (
    <HorizontalList>
      <View>
        <Text>Furnisher</Text>
      </View>
      <View>
        <View>
          <Text>car</Text>
          {/* img */}
        </View>
      </View>
    </HorizontalList>
  );
};

export default HorizontalListing;

const HorizontalList = styled.View`
  height: 200px;
`;

const ScrollableItems = styled.FlatList`
  background-color: blue;
`;
