import CalendarStrip from 'react-native-calendar-strip';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = [
    { date: '2024-08-22', title: 'Event 1' },
    { date: '2024-08-24', title: 'Event 2' },
  ];

  const markedDates = events.map((event) => ({
    date: event.date,
    dots: [{ color: 'red' }],
  }));

  return (
    <CalendarStrip
      leftSelector={[]}
      rightSelector={[]}
      selectedDate={selectedDate}
      onDateSelected={(date) => setSelectedDate(date)}
      calendarHeaderStyle={{ display: 'none' }}
      locale={{
        name: 'ko',
        config: {
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split(
            '_',
          ),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        },
      }}
      markedDates={markedDates}
      highlightDateNameStyle={{ color: globalStyles.mainColor }}
      highlightDateNumberStyle={{ color: globalStyles.mainColor }}
      dateNameStyle={{ color: 'black' }}
      dateNumberStyle={{ color: 'black' }}
    />
  );
}
