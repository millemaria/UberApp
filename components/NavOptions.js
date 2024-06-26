import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { useDeviceContext } from 'twrnc';

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
  const navigation = useNavigation ();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate (item.screen)}
        style={tw`p-10 pl-6 pb-8 pt-4 bg-gray-200 m-13 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.Image }}
            />
            <Text style={tw`mt-2 text-lg`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white" 
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
