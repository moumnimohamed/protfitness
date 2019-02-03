import React from 'React'
import { StyleSheet ,View,Image, Text,TouchableOpacity  } from 'react-native'


class categoryItem extends React.Component {





render (){

    const cat = this.props.category


    return (
        
        <TouchableOpacity style={styles.main_container}>
              <text>cat.name</text>
        </TouchableOpacity>
    )

}


}

const styles = StyleSheet.create({
    main_container: {
      height: 50,
       flexDirection: 'row'
    }
})
  