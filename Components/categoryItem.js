import React from 'React'
import { StyleSheet ,View,Image, Text,TouchableOpacity  } from 'react-native'
import { GetAllCtegoriesByParent } from '../api/woocomerceDATA'

class CategoryItem extends React.Component {

    _DisplaySubcategories1() {
            
        /*my error at first :) */
        /*return (
             {this.state.subcategories1.map((ca)=> <Text>{ca.id}</Text>}
          )
          )*/


          return this.state.subcategories1.map((data) => {
            return (
            <Text>{data.id}</Text>
            )
          })


      }


 /*return sub caterories first level */
 _GetSubCtegoriesLEVEL1 () {
    GetAllCtegoriesByParent (this.props.category.id,1).then(Data => {
      this.setState({
        subcategories1: Data,
  })
  })
      }

      /*co,structor */
 constructor (props) {
    super(props)
    this.state = {
       subcategories1:[],  
     }
}


render (){

    const category = this.props.category

    return (
       <View>
        <TouchableOpacity style={styles.main_container} onPress={GetSubCtegoriesLEVEL1 ()}>
              
              <Image
              resizeMode="contain"
        style={styles.image}
        //source={{uri:category.image.src}}
        source={{uri:(((category || {}).image || []) || {}).src || "https://samanthasteele.files.wordpress.com/2010/07/file-not-found.jpg"}}
      />
        </TouchableOpacity>
        <TouchableOpacity>
            {this._DisplaySubcategories1()}
        </TouchableOpacity>
        </View>
    )

}


}

const styles = StyleSheet.create({
    main_container: {
      height: 140,
       flexDirection: 'row',
       margin: 5,
       
    },
    image :{
     flex:1,
     height: undefined,
     width: undefined,
   
    }
})
  

export default CategoryItem