import { Text, View } from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import MainContainer from '../../components/commons/layout/container/MainContainer';
import CustomButton from '../../components/commons/buttons/CustomButton';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import { useState } from 'react';
import { format } from 'date-fns';

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  return (
    <MainWrapper>
      <MainContainer>
        <Text>|</Text>
        <Text>|</Text>
        <Text>|</Text>
        <Text>|</Text>
        <Text>|</Text>
        <Text>|</Text>
      </MainContainer>
      <CustomButton title="메뉴 추천받기" />
      <MainContainer>
        <Text>이번주 칼로리 소비 내역</Text>
        <View>
          <CalendarStrip
            selectedDate={selectedDate}
            onPressDate={(date) => {
              setSelectedDate(date);
            }}
            markedDate={[
              '2024-08-04',
              '2024-08-05',
              '2024-08-14',
              '2024-08-24',
            ]}
            weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
          />
        </View>
      </MainContainer>
    </MainWrapper>
  );
}
