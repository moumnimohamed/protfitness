import React from 'React'
import { StyleSheet ,View,Image, Text,TouchableOpacity  } from 'react-native'


class CategoryItem extends React.Component {





render (){

    
     
    const catt = this.props.category
    return (
        
        <TouchableOpacity style={styles.main_container}>
              <Text>{catt.id}</Text>
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
  

export default CategoryItem