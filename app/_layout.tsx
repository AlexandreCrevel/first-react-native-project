import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='(quiz)/index'
        options={{ headerShown: true, headerTitle: 'Home' }}
      />
    </Stack>
  );
}
