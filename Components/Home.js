// Components/Home.js
import React from 'react'
import CategoryItem from './CategoryItem'
import { GetAllCtegoriesByParent} from '../api/woocomerceDATA'


import {ActivityIndicator, StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native'
 

class Home extends React.Component {
  
/*on appel cette function quand le render est fait */
 
/*on appel cette function quand le render est fait */
componentDidMount() {
  GetAllCtegoriesByParent (0,1).then(Data => {
    this.setState({
      categories: Data,
})
})
    }


    

    /*co,structor */
constructor(props) {
    super(props)
    this.state = {
     categories: []
   }
 }

 
    render () {
        return (
            <FlatList
 data={this.state.categories}
 keyExtractor={(item) => item.id.toString()}
renderItem={({item}) => <CategoryItem category={item} />}
/>
    )
    }
}


export default Home
