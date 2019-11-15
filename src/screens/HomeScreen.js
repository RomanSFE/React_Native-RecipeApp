import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import RecipeItem from '../components/RecipeItem';

const DATA = [
    {
        publisher: 'Village Food',
        f2f_url: 'http://food2fork.com/view/47319',
        title: 'Village food items',
        source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
        recipe_id: '47519',
        image_url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        social_rank: '190',
        publisher_url: 'http://thepioneerwoman.com',
    },
    {
        publisher: 'Local Food',
        f2f_url: 'http://food2fork.com/view/47319',
        title: 'Local food items',
        source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
        recipe_id: '47318',
        image_url: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        social_rank: '129',
        publisher_url: 'http://thepioneerwoman.com',
    },
    {
        publisher: 'Biranny House',
        f2f_url: 'http://food2fork.com/view/47319',
        title: 'Chicken Biranny',
        source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
        recipe_id: '47319',
        image_url: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        social_rank: '180',
        publisher_url: 'http://thepioneerwoman.com',
    },
    {
        publisher: 'Mother Language Day',
        f2f_url: 'http://food2fork.com/view/47319',
        title: 'Crash Hot Potatoes Special Item',
        source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
        recipe_id: '473144',
        image_url: 'https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        social_rank: '128',
        publisher_url: 'http://thepioneerwoman.com',
    },
    {
        publisher: 'The Pioneer Woman',
        f2f_url: 'http://food2fork.com/view/47024',
        title: 'Perfect ice Coffee',
        source_url: 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
        recipe_id: '47024',
        image_url: 'http://static.food2fork.com/icedcoffee5766.jpg',
        social_rank: '100',
        publisher_url: 'http://thepioneerwoman.com',
    },
    {
        publisher: 'Hello Bangladesh',
        f2f_url: 'http://food2fork.com/view/47319',
        title: 'Crash Hot Potatoes',
        source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
        recipe_id: '47319',
        image_url: 'http://static.food2fork.com/CrashHotPotatoes5736.jpg',
        social_rank: '120',
        publisher_url: 'http://thepioneerwoman.com',
    },
        
];

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Recipe List",
        headerStyle: {
            backgroundColor: '#FF6D6D',
        },
        headerTintColor: '#E7E4E4',
        headerTitleStyle: {
        fontWeight: 'bold',
        },   
    }
    renderRecipeItem = ({ item, index}) => {
        const { navigation} = this.props
        return (
            <RecipeItem navigation = {navigation} item = {item} />
        )
    }
    render() {
        return (
            <View>
                <FlatList 
                    data = {DATA}
                    renderItem = {this.renderRecipeItem}
                    keyExtractor = {(item, index) => item.publisher}
                    contentContainerStyle = {{ marginTop: 20 }}
                />
            </View>
        )
    }
}
