import React from 'react'; 
import { Button, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pantalla1Sc = ({ navigation }: any) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image 
        source={{ uri: 'actividad/assets/movi.png' }} 
        style={{ width: 200, height: 200 }} 
      />
      <Button
        title="Acceder"
        onPress={() => navigation.navigate('Pantalla2')}
      />
    </View>
  );
};
