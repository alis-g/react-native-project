import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import CartScreen from "../screens/MyHikesScreen";
import Ionicons from '@react-native-vector-icons/ionicons';
import StartHikeScreen from "../screens/StartHikeScreen";
import LoginRegisterScreen from "../screens/LoginRegisterScreen";

export default function TabsNavigation() {
    const Tabs = createBottomTabNavigator()
    return(
        <Tabs.Navigator>
            <Tabs.Screen 
            name="HomeTab" 
            component={HomeScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="walk-outline" color={color} size={size} />}}
            />
            <Tabs.Screen 
            name="Info" 
            component={InfoScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="information" color={color} size={size} />}}
            />

                <Tabs.Screen 
            name="Start Hike" 
            component={StartHikeScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="information" color={color} size={size} />}}
            />
            
            <Tabs.Screen 
            name="My Hikes" 
            component={CartScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="footsteps-outline" color={color} size={size} />}}
            />
             <Tabs.Screen 
            name="Login" 
            component={LoginRegisterScreen}
            options={{
                tabBarIcon : ({color, size}) => <Ionicons name="footsteps-outline" color={color} size={size} />}}
            />
        </Tabs.Navigator>
     );
}