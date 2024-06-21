import { View, Text, FlatList } from 'react-native';
import data from '@/assets/data/seed.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.appellation}</Text>}
      />
    </View>
  );
}
