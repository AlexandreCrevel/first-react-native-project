import Quiz from '@/components/QuizComponents/Quiz';
import datas from '@/data/datas.json';
import { View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Quiz datas={datas} />
    </View>
  );
}
