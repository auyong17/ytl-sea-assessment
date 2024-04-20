import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen  from '../screens/LoginScreen';
import HomeScreen  from '../screens/HomeScreen';
import TransactionDetailScreen  from '../screens/TransactionDetailScreen';
import TransactionHistoryScreen  from '../screens/TransactionHistoryScreen';

export default function ScreenNavigator() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen}/>
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}