import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import LogoCrieTi from '../../assets/logo-crie-ti.svg';

const ViewImages = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#8A2BE2', alignItems: 'center'}}>
            <SafeAreaView>

                <LogoCrieTi width="200" height="200" />
            </SafeAreaView>    
        </View>
    );
}

export default ViewImages;


