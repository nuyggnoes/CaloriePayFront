import CalendarStrip from 'react-native-calendar-strip';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { tierColors } from '../../utils/tierColors';

export default function WeeklyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = [
    {
      id: 1,
      memberId: 1,
      date: '2024-08-22',
      tier: 'A',
    },
    {
      id: 3,
      memberId: 1,
      date: '2024-08-24',
      tier: 'C',
    },
    {
      id: 3,
      memberId: 1,
      date: '2024-08-25',
      tier: 'S',
    },
    {
      id: 3,
      memberId: 1,
      date: '2024-08-19',
      tier: 'D',
    },
  ];

  const markedDates = events.map((event) => ({
    date: event.date,
    dots: [
      {
        color: tierColors[event.tier] || 'gray',
      },
    ],
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
