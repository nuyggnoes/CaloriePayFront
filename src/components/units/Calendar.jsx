import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const CalendarComponent = () => {
  const posts = [
    {
      id: 1,
      title: '제목입니다.',
      contents: '내용입니다.',
      date: '2024-08-25',
      color: 'red',
    },
    {
      id: 2,
      title: '제목입니다2.',
      contents: '내용입니다2.',
      date: '2024-08-02',
      color: '#00B2FF',
    },
  ];
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {
      marked: true,
      dotColor: current.color,
      selected: formattedDate === selectedDate,
      selectedColor: current.color,
    };
    console.log(acc);
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  const selectedPost = posts.find((post) => post.date === selectedDate);

  return (
    <View>
      <Calendar
        theme={{
          selectedDayBackgroundColor: selectedPost
            ? selectedPost.color
            : 'black',
          //   arrowColor: 'black',
          //   dotColor: 'blue',
          //   todayTextColor: 'red',
        }}
        markedDates={markedSelectedDates}
        monthFormat={'M월'}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
      />
      <View>
        {selectedPost ? (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{selectedPost.title}</Text>
            <Text style={styles.postContents}>{selectedPost.contents}</Text>
          </View>
        ) : (
          <Text>선택한 날짜에 포스트가 없습니다.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContents: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default CalendarComponent;
