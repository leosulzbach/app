import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from '../components/CustomButton';

const ViewMenu = (props) => {
    return(
        <View style={styles.container}>
            <CustomButton
             onPress={()=> props.navigation.navigate("ViewState")}
             label="Navegar para ViewState"/>
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