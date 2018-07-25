import React from 'react';
import { View, FlatList, Text, TouchableHighlight, Image } from 'react-native';
// import Show from './Show';

export default class homeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    static navigationOptions = {
        title: 'HOME'
    }
    componentDidMount() {
        this.fetchapi();
    }
    fetchapi = () => {
        const URL = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a5edf88e76845559a0c7016de7150ee";
        fetch(URL,
            {
                method: 'GET'
            }).then((response) => response.json())
            .then((res) => this.setState({ data: res.articles }))
            .catch((error) => console.log('error', error))
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>

                <FlatList
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            style={{ flex: 1, height: 200, width: 100, borderWidth: 2 }}

                            onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    getImage: item.urlToImage,
                                    getDescription: item.description,
                                    getTitle: item.title,


                                });
                            }}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.urlToImage }}
                                    style={{ height: 100, width: '100%' }}
                                />
                                <Text>
                                    {item.title}
                                </Text>

                            </View>

                        </TouchableHighlight>

                    )
                    }

                    initialNumToRender={2}
                />
            </View>
        );
    }

}

