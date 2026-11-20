import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";

export default function RootNavigator() {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={TabsNavigation} />
        </Stack.Navigator>
     );
}