import React from "react";
import { Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";
const CalendarPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Calendar
        onDayPress={(day) => {
          console.warn("selecasdsadated day", day);
        }}
        theme={{
          "stylesheet.calendar.header": {
            dayTextAtIndex0: {
              color: "red",
            },
            dayTextAtIndex6: {
              color: "blue",
            },
          },
        }}
        markingType={"custom"}
        markedDates={{
          "2021-07-15": {
            level: "메롱",
            color: "#64A8CC",
            textColor: "#fff",
          },
          "2021-07-21": {
            customStyles: {
              container: {
                backgroundColor: "green",
              },
              text: {
                color: "black",
                fontWeight: "bold",
              },
            },
          },
          "2021-07-19": {
            customStyles: {
              container: {
                backgroundColor: "red",
                elevation: 2,
              },
              text: {
                color: "green",
              },
            },
          },
        }}
      />
    </View>
  );
};

export default CalendarPage;
