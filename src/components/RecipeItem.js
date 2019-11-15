import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card from './common/Card'
import Button from './common/Button'

export default class RecipeItem extends Component {
    goToDetails = () => {
        const { navigation, item } = this.props
        navigation.navigate('Details', { item })
    }

    render() {
        const { item } = this.props
        return (
            <Card>
                <Image style = {{height: 200, flex: 1, borderRadius: 5}} resizeMode="cover" source = {{uri: item.image_url}}/>
                <View style={styles.recipedesc}>
                    <Text style={{fontWeight: '500', fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Name -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.title}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: '500', fontSize: 14, color: '#4F4E4E'}}>
                        Recipe Publisher -
                        <Text style={{color: '#FC6B6B'}}>
                            {item.publisher}
                        </Text>
                    </Text>
                </View>
                <Button onPressButton={this.goToDetails} title={'View Details'}/>
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
