import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ViewState() {


    const [count, setCont] = useState(0);
    const [user, setUser] = useState({
      name: "Leonardo",
      age: 19,
      city: "Sulzbach"
    })
  
    function increment() {
      setCont(count + 1)
  
    }
  
    function desincrement() {
      setCont(count - 1)
  
    }
  
    return (
      <View style={styles.container}>
        <SafeAreaView >
          <View style={{flex:1, justifyContent:'space-evenly'}}>
            <View style={styles.containerUser}>
            <Text
              style={{ fontSize: 24 }}
            >Name: {user.name}</Text>
            <Text
              style={{ fontSize: 24 }}
            >Age: {user.age}</Text>
            <Text
              style={{  fontSize: 24 }}
            >City: {user.city}</Text>
            <TouchableOpacity
              style={styles.button} onPress={() => setUser({ ...user, age: user.age + 1 })}
            >
              <Text>
                Make BirthDay
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{ color: '#D6D58E', fontSize: 24 }}>
              Contador: {count}
            </Text>
            <TouchableOpacity
              style={styles.button} onPress={() => increment()}
            >
              <Text>
                + 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button} 
              onPress={() => desincrement()}
            >
              <Text>
                -1
              </Text>
            </TouchableOpacity>
            <StatusBar
              backgroundColor='#042940'
              translucent={false}
              style='light'
            />
          </View>
          </View>
          
  
        </SafeAreaView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: '#D6D58E',
      backgroundColor: '#042940',
      justifyContent: 'center',
      alignItems: 'center',
      gap:24
  
  
    },
    button: {
      marginTop: 24,
      borderRadius: 8,
      backgroundColor: '#DBF227',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
  },
    containerUser: {
      borderRadius: 8,
      padding: 24,
      backgroundColor: "#D6D58E",
      border: "solid #D6D58E",
      marginBottom: 24
    },
  });
  