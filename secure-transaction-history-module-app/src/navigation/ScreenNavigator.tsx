import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen  from '../screens/login/LoginScreen';
import HomeScreen  from '../screens/home/HomeScreen';
import TransactionDetailScreen  from '../screens/detail/TransactionDetailScreen';

export default function ScreenNavigator() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'My Transaction History', 
              headerTitleAlign: 'center' 
            }}/>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
          />
          <Stack.Screen 
            name="TransactionDetail" 
            component={TransactionDetailScreen} 
            options={{ 
              title: 'Transaction Details', 
              headerTitleAlign: 'center'
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}