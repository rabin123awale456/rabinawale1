import React from 'react';
import {
    Text, FlatList, View, TouchableHighlight
} from 'react-native';

const Show = (props) => {

    const rabin = props.navigates;
    return (
        <View>
            <FlatList
                data={props.sendData}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableHighlight style={{ flex: 1, height: 100, width: 100, borderWidth: 2 }}
                        onPress={(rabin)} >
                        <View>
                            <Text>
                                {item.title}
                            </Text>

                        </View>

                    </TouchableHighlight>

                )}

                initialNumToRender={2}
            />
        </View>

    )
}

export default Show;