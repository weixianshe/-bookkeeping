import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const mock = new Array(1000).fill(Math.random());
  const _renderItem = ({ item }) => {
    return (
      <View style={{ height: 30 }}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList renderItem={_renderItem} data={mock}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
