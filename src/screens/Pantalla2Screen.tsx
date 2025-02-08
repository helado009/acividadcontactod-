import React, { useState } from 'react';
import { Button, Text, View, Alert } from 'react-native'; 
import { styles } from '../theme/appTheme'; 
import { InputComponent } from '../components/inputcomponents'; 


export const Pantalla2Sc: React.FC = () => {
  //para guardar los campos del formulario
   const [num1, setNum1] = useState<string>(''); 
  const [num2, setNum2] = useState<string>(''); 
   const [resultado, setResultado] = useState<string>(''); 

  // Función que maneja la lógica de la división
  const handleDivision = (): void => {
    // Convierte los valores de los campos de entrada a números flotantes
    const numero1: number = parseFloat(num1); 
    const numero2: number = parseFloat(num2); 

    // Verifica si los valores ingresados son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      // isNaN verifica si el valor NO es un número (Not-a-Number)
        setResultado('Ingrese números válidos'); 
       return;
    }

    // Verifica si el segundo número es cero
    if (numero2 === 0) {
      if (numero1 === 0) {
        // Si ambos números son cero, la división es indeterminada
        //ste para que se muestre a lado del resultado
        setResultado('INDETERMINACIÓN'); 
        //para que salga en la pantalla el mesaje 
        Alert.alert('Error', 'INDETERMINACIÓN'); 
      } else {
        // Si solo el segundo número es cero, la división no existe
        setResultado('NO EXISTE DIVISIÓN PARA CERO'); 
        Alert.alert('Error', 'NO EXISTE DIVISIÓN PARA CERO'); 
      }
    } else {
      // Si los números son válidos, realiza la división
      const resultadoDivision: string = (numero1 / numero2).toString(); // Realiza la división y convierte el resultado a texto
      setResultado(resultadoDivision); // Actualiza el estado con el resultado
      Alert.alert('Resultado', `El resultado es: ${resultadoDivision}`); // Muestra una alerta con el resultado
    }
  };


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>División de Números</Text>
      <InputComponent
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1} 
        keyboardType="numeric" 
      />

      
      <InputComponent
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2} 
        keyboardType="numeric" 
      />

      
      <Button title="Dividir" onPress={handleDivision} />

      
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};