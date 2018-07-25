import React from 'react';
import { Button, Text, View } from 'react-native';
const Hello = (props) => {
    return (
        <View>
            <Button
                title={props.heading}
                color='red'
            />

        </View>
    )
}
export default Hello;