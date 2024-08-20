import { Text, View, StyleSheet, ScrollView } from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import MainContainer from '../../components/commons/layout/container/MainContainer';
import CustomButton from '../../components/commons/buttons/CustomButton';
import CalendarStrip from 'react-native-calendar-strip';
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

export default function HomeScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // bottom sheet modal
  useEffect(() => {
    handlePresentModalPress();

    // phone
    const fetchContacts = async () => {
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

  // calendar
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = [
    { date: '2024-08-22', title: 'Event 1' },
    { date: '2024-08-24', title: 'Event 2' },
  ];

  const markedDates = events.map((event) => ({
    date: event.date,
    dots: [{ color: 'red', selectedDotColor: 'blue' }],
  }));

  return (
    <>
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
            <WeeklyCalendar />
          </View>
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
              <Text style={styles.scrollText}>Item 1</Text>
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
    alignItems: 'center',
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 100,
  },
  scrollText: {
    fontSize: 50,
    marginBottom: 10,
  },
});
