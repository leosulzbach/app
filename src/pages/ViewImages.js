import React from 'react';
import {SafeAreaView, View} from 'react-native';

export const ViewImages = () => {
    return (
        <View style={{ flex: 1}}>
            <SafeAreaView>
                <Text>Tela de Imagens</Text>

                <Image 
                    source = {require('../../assets/favicon.png')}>
                </Image>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: 50,
        height: 50
    }
})