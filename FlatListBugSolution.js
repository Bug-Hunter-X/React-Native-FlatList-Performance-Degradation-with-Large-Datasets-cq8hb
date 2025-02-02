import React, { useMemo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  text: `Item ${i}`
}));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const FlatListBugSolution = () => {
  const memoizedData = useMemo(() => data, []); // Memoize data to prevent unnecessary re-renders

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default FlatListBugSolution;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});