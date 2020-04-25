import { createStackNavigator } from "react-navigation-stack";
import Weather from "../../screens/Weather";

const screens = {
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="Weather News" />
        ),
      };
    },
  },
};

const WeatherStack = createStackNavigator(screens);

export default WeatherStack;
