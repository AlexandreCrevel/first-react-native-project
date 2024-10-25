import Card from '@/components/Card';
import users from '@/data/users.json';
import { FlatList, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <FlatList
        style={{
          width: '100%',
          display: 'flex',
          gap: 15,
        }}
        keyExtractor={(item) => item.id.toString()}
        data={users}
        renderItem={({ item }) => <Card user={item} key={item.id} />}
      />
    </View>
  );
}
