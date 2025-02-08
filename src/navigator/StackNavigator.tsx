import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Sc } from '../screens/Pantalla1Screen';
import { Pantalla2Sc } from '../screens/Pantalla2Screen';

export type RootStackParams = {
  Pantalla1: undefined;
  Pantalla2: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pantalla1"
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 7,
        },
      }}
    >
      <Stack.Screen name="Pantalla1" options={{ title: 'Bienvenido' }} component={Pantalla1Sc} />
      <Stack.Screen name="Pantalla2" options={{ title: 'División' }} component={Pantalla2Sc} />
    </Stack.Navigator>
  );
};
