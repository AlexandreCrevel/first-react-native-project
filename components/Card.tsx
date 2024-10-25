import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const PORTRAIT_SIZE = 70;

type User = {
  id: number;
  name: string;
  description: string;
  email: string;
  image: string;
};

const Card = ({ user }: { user: User }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.image }}
        style={{
          width: PORTRAIT_SIZE,
          height: PORTRAIT_SIZE,
          borderRadius: 50,
        }}
      />
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.description}>{user.description}</Text>
      <Button
        title='Press me'
        onPress={() => {
          alert('Hey you !');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    height: 200,
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Card;
