import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import CartScreen from "../screens/CartScreen";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function TabsNavigation() {
    const Tabs = createBottomTabNavigator()
    return(
        <Tabs.Navigator>
            <Tabs.Screen 
            name="HomeTab" 
            component={HomeScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="home" color={color} size={size} />}}
            />
            <Tabs.Screen 
            name="Info" 
            component={InfoScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="information" color={color} size={size} />}}
            />
            <Tabs.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="cart" color={color} size={size} />}}
            />
        </Tabs.Navigator>
     );
}