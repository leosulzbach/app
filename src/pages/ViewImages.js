import React from 'react';
import {SafeAreaView, View} from 'react-native';

export const ViewImages = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <SafeAreaView>
                <Image 
                    resizeMode="contain"
                    style={{width: 200, height: 200}}
                    source = {{
                        uri: 'https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png',
                    }}>
                </Image>
            </SafeAreaView>    
        </View>
    );
}

