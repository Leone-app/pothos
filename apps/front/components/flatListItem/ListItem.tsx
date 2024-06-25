import { View, Text } from 'react-native';

type Props = {
  item: {
    appellation: string;
    year: number;
    quantity: number;
  };
};

export default function ListItem({ item }: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        padding: 5,
      }}
    >
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.appellation}</Text>
        <Text>{item.year}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text>{item.quantity}</Text>
      </View>
    </View>
  );
}
