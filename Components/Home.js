// Components/Home.js
import React from 'react'
import categoryItem from './categoryItem'
import GetAllCtegoriesByParent from '../api/woocomerceDATA'


import {ActivityIndicator, StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native'
 

class Home extends React.Component {
  
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
     categories: [],
    
   }
 }

 
    render () {
        return (
        
            <FlatList
 
 data={this.state.categories}
 keyExtractor={(Catitem) => Catitem.id.toString()}
renderItem={({Catitem}) => <categoryItem category={Catitem} />}
/>
    )
    }


}