import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartupScreen from "../screens/StartupScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import DashboardScreen from "../screens/DashboardScreen";
import NaverWebView from "../screens/Naver/NaverWebView";
import KakaoWebView from "../screens/Kakao/KakaoWebView";
import Weather from "../screens/Weather/Weather";
import CalendarPage from "../screens/Calendar/CalendarPage";

const MainNavigator = createSwitchNavigator({
  CalendarPage: CalendarPage,
  Startup: StartupScreen,
  Authentication: AuthenticationScreen,
  Dashboard: DashboardScreen,
  NaverWebView: NaverWebView,
  KakaoWebView: KakaoWebView,
  Weather: Weather,
});

export default createAppContainer(MainNavigator);
