import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card from '../components/common/Card'

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: "Recipe Details",
        headerStyle: {
            backgroundColor: '#FF6D6D',
        },
        headerTintColor: '#E7E4E4',
        headerTitleStyle: {
        fontWeight: 'bold',
        },   
    }
    render() {
        const { navigation } = this.props
        const item = navigation.getParam('item', {})
        return (
            <Card>
                <Image style = {{height: 200, flex: 1, borderRadius: 5}} resizeMode="cover" source = {{uri: item.image_url}}/>
                <View style={styles.recipedesc}>
                    <Text style={{fontWeight: '500', marginTop: 10, fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Name -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.title}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: '500', marginTop: 10, fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Publisher -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.publisher}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: '500', marginTop: 10, fontSize: 14, color: '#4F4E4E'}}>
                        Recipe ID -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.recipe_id}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: '500', marginTop: 10, fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Social Rank -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.social_rank}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: '500', marginTop: 10, fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Publishar Url -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.publisher_url}
                        </Text>
                    </Text>
                </View>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    recipedesc: {
      margin: 15,
      marginBottom: 20,
      marginHorizontal: 20
    },
  });
