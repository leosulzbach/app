
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';


const {width} = Dimensions.get('window')
const widthDefault = width * 0.5

function ViewEffect() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("renderizou pela primeira vez")
  }, [])

  useEffect(() => {
    console.log("RENDERIZAR SEMPRE")
  })

  useEffect(() => {
    console.log("Renderizou porque o Count mudou")
  }, [count])

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <View>

            <Text
              style={{ color: '#D6D58E', fontSize: 24, textAlign: "center", marginBottom: 24 }}>
              Contador: {count}
            </Text>
            <Text style={{ color: '#D92525', marginHorizontal: 64, textAlign: "center" }}>
              Clique para acrescentar +1 ou precione para diminuir +1
            </Text>

            
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ViewEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#D6D58E',
    backgroundColor: '#591C21',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24


  },

  containerUser: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: "#D6D58E",
    border: "solid #D6D58E",
    marginBottom: 24
  },
});