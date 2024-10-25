import users from '@/data/users.json';
import React from 'react';
import { FlatList, View } from 'react-native';
import Card from './Card';

const UserList = () => {
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
};

export default UserList;
