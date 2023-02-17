import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(1);
  const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


  return (
    <View style={styles.container}>
      <Text>Galeria de imagenes</Text>
      <Image source={{uri: BASE_URL + counter + ".png"}} style={{width: 200, height:200}}/>
      <Button title="Imagen siguiente" onPress={() => setCounter(counter +1)}/>
      <Button title="Imagen anterior" onPress={()=>setCounter(counter -1)}/>
    </View>
  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


