import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import MainContainer from '../../components/commons/layout/container/MainContainer';
import CustomButton from '../../components/commons/buttons/CustomButton';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { globalStyles } from '../../styles/globalStyles';
// bottom sheet
import { BottomSheetModal } from '@gorhom/bottom-sheet';

// ======= phone =======
import * as Contacts from 'expo-contacts';
// =====================

import { BottomModalHeader } from '../../components/units/BottomModalHeader';
import WeeklyCalendar from '../../components/units/WeeklyCalendar';
// =========================

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ProgressBar from '../../components/commons/progressBar/ProgressBar';

import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { useLoading } from '../../context/loadingContext';
import { getCalorieAndScore } from '../../api/calorieScoreApi';
import { getCalendarTier } from '../../api/calendarApi';
import { getStartAndEndOfWeek } from '../../utils/date';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [username, setUsername] = useState(null);
  const [recommendCal, setRecommendCal] = useState(null);
  const [remainedCal, setRemainedCal] = useState(null);
  const [calorieScore, setCalorieScore] = useState(null);
  const [calendarTierData, setCalendarTierData] = useState([]);
  // bottom sheet modal

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    handlePresentModalPress();

    // phone
    const fetchContacts = async () => {
      showLoading();
      try {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1000 + 1000),
        );
        const { start, end } = getStartAndEndOfWeek();
        const [calorieResponse, calendarResponse] = await Promise.all([
          getCalorieAndScore(),
          getCalendarTier({ start, end }),
        ]);
        setUsername(calorieResponse.name);
        setRecommendCal(calorieResponse.recommendKcal);
        setRemainedCal(calorieResponse.remainKcal);
        setCalorieScore(calorieResponse.score);
        setCalendarTierData(calorieResponse);

        // phone
        const { status } = await Contacts.requestPermissionsAsync();
        console.log('status : ');
        console.log(status);

        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
          });

          if (data.length > 0) {
            data.forEach((contact) => {
              console.log('Name:', contact.name);
              if (contact.phoneNumbers) {
                contact.phoneNumbers.forEach((phone) => {
                  console.log('Phone Number:', phone.number);
                });
              }
              console.log('-------------------------');
            });
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        hideLoading();
      }
    };
    fetchContacts();
  }, []);

  // bottom sheet modal
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['20%', '100%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    setIsModalOpen(index > 0);
  }, []);

  // progress
  const total = 2100;
  const used = 780;
  const progress = used / total;

  // chart
  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const data = {
    labels: ['11.09', '11.16', '11.23', '11.30', '12.7', '12.14'],
    datasets: [
      {
        data: [64.5, 64, 64, 63.6, 63, 65],
        strokeWidth: 4, // optional
      },
    ],
    legend: ['체중 변화'], // optional
  };

  return (
    <>
      <MainWrapper>
        <MainContainer>
          <ProgressBar total={2100} used={780} />
          <MainContainer backgroundColor="#4E5566" hasShadow={false}>
            <Text style={{ color: 'white' }}>Calorie Score | 868점</Text>
          </MainContainer>
        </MainContainer>
        <CustomButton title="메뉴 추천받기" />
        <MainContainer>
          <Text>이번주 칼로리 소비 내역</Text>
          <View>
            <WeeklyCalendar />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
            <Text>전체보기</Text>
          </TouchableOpacity>
        </MainContainer>
        <MainContainer>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={data}
            width={330}
            height={200}
            yAxisSuffix="kg"
            chartConfig={chartConfig}
            // bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </MainContainer>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={false}
          handleComponent={() => BottomModalHeader(isModalOpen)}
        >
          <View style={styles.contentContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <MainContainer>
                <ProgressBar total={2100} used={780} />
              </MainContainer>
              <Text style={styles.scrollText}>Item 2</Text>
              <Text style={styles.scrollText}>Item 3</Text>
              <Text style={styles.scrollText}>Item 4</Text>
              <Text style={styles.scrollText}>Item 5</Text>
              <Text style={styles.scrollText}>Item 6</Text>
              <Text style={styles.scrollText}>Item 7</Text>
              <Text style={styles.scrollText}>Item 8</Text>
              <Text style={styles.scrollText}>Item 9</Text>
              <Text style={styles.scrollText}>Item 10</Text>
            </ScrollView>
          </View>
        </BottomSheetModal>
      </MainWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: globalStyles.mainBackgroundColor,
  },
  scrollViewContent: {
    padding: 16,
    width: wp(100),
    paddingBottom: 100,
    alignItems: 'center',
  },
  scrollText: {
    fontSize: 50,
    marginBottom: 10,
  },
});
