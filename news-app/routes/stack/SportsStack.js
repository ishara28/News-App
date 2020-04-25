import { createStackNavigator } from "react-navigation-stack";
import Sports from "../../screens/Sports";

const screens = {
  Sports: {
    screen: Sports,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} headerText="Sports News" />
        ),
      };
    },
  },
};

const SportsStack = createStackNavigator(screens);

export default SportsStack;
