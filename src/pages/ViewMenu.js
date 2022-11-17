import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
//import { CustomButton } from '../components/CustomButton';

const ViewMenu = (props) => {

    return(
        <View style={styles.container}>
           <TouchableOpacity 
            onPress={()=> props.navigation.navigate("ViewState")}
            style={styles.button}>
            <Text style={styles.textButton}>Mudar para ViewState</Text>
        </TouchableOpacity>
        </View>
    );
}

export default ViewMenu;

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});