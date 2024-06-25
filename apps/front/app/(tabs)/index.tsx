import { View, Text, FlatList } from 'react-native';
import data from '@/assets/data/seed.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ListItem from '@/components/flatListItem/ListItem';
import Separator from '@/components/flatListItem/Separator';

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingTop: insets.top,
      }}
    >
      <FlatList
        contentContainerStyle={{
          alignItems: 'stretch',
          padding: 10,
        }}
        data={data}
        renderItem={ListItem}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}
