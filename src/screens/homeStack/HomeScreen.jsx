import { Text, View, StyleSheet, ScrollView } from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import MainContainer from '../../components/commons/layout/container/MainContainer';
import CustomButton from '../../components/commons/buttons/CustomButton';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { globalStyles } from '../../styles/globalStyles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
// bottom sheet

// ======= phone =======
import * as Contacts from 'expo-contacts';
// =====================

// ======= calendar =======
import { CalendarList, Calendar } from 'react-native-calendars';
// =========================

export default function HomeScreen() {
  // bottom sheet modal
  useEffect(async () => {
    handlePresentModalPress();

    // phone
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
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

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['20%', '100%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // bottom sheet modal

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
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
            {/* <CalendarStrip
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
          /> */}
          </View>
        </MainContainer>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={false}
          handleComponent={renderCustomHandle}
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
const renderCustomHandle = () => (
  <View style={styles.customHandle}>
    <Text style={styles.customHandleText}>Daily Report</Text>
  </View>
);
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: globalStyles.mainBackgroundColor,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  customHandle: {
    width: '100%',
    height: 70,
    backgroundColor: globalStyles.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  customHandleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  scrollText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
