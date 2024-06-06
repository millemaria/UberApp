import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react'


const data = [
  {
    id: "123",
    title: "Get a ride",
    Image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    Image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item}) => (
      <TouchableOpacity>
        style={tw``}
        <View>
        <Image
        style={{ width: 120, height: 120, resizeMode: "contain"}}
        source={{ uri: item.Image}}
        />
        <Text>{item.title}</Text>
        </View> 
      </TouchableOpacity>
  )}
    />
  );
};

export default NavOptions;