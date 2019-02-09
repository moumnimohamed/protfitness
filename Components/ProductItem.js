import  React from 'React'
import { StyleSheet ,View,Image, Text,TouchableOpacity  } from 'react-native'



class ProductItem extends React.Component {
  
   
  render() {
    /*es6 permet de rasemblir les propr dans un contant */
    const ProductDetail = this.props.displayDetailForproduct
    const prod = this.props.produit
    //const {prod, ProductDetail}  = this.props


  // (((prod || {}).images || [])[0] || {}).src || "https://samanthasteele.files.wordpress.com/2010/07/file-not-found.jpg"
    return (
      <TouchableOpacity style={styles.main_container}  onPress={() => ProductDetail(prod.id)}>
      <Image
        style={styles.image}
        //source={{uri:prod.images[0].src}}
        source={{uri:(((prod || {}).images || [])[0] || {}).src || "https://samanthasteele.files.wordpress.com/2010/07/file-not-found.jpg"}}
      />
      <View style={styles.content_container}>
        <View style={styles.header_container} >
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>{prod.description}</Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date_text}>Sorti le {prod.date_created}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )
}}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
     flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: '#000'
 },
 content_container: {
    flex: 1,
    margin: 5,
 backgroundColor: 'yellow'
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
     backgroundColor: 'magenta'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
     backgroundColor: 'white'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 6,
     backgroundColor: 'green'

  },
  description_text: {
    fontStyle: 'italic',
    color: '#fff'
  },
  date_container: {
    flex: 1,
    backgroundColor:'blue'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default ProductItem
