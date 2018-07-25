import React from 'react';
import { Text, View, Button, Image } from 'react-native';


export default class DetailProduct extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('getTitle')


        }
    }
    render() {
        const { navigation } = this.props;

        const itemImage = navigation.getParam('getImage');
        const itemdescription = navigation.getParam('getDescription', 'NO-ID');
        const itemTitle = navigation.getParam('getTitle');
        return (
            <View style={style.design}>
                <Image
                    source={{ uri: itemImage }}
                    style={{ height: 200, width: 200, marginBottom: 20 }}
                />
                <Text style={{ fontSize: 18 }}>
                    {itemTitle}
                </Text>
                <Text style={{ textAlign: 'center', marginBottom: 9 }}>
                    {itemdescription}
                </Text>


                <Button
                    title="clickme"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </ View>

        );
    }
}

const style = {
    design: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    }
}