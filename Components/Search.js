// Components/Search.js
import React from 'react'
import ProductItem from './ProductItem'
import {ActivityIndicator, StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native'
import { getProducts  } from '../api/woocomerceDATA' 

class Search extends React.Component {

  
/*function */
_loadproducts() {
  console.log('the word searched is : '+this.searchedText)
     if(this.searchedText.length > 0){
       //affichier icon de changement
       this.setState({isLoding : true})
       
      getProducts(this.searchedText,this.page+1).then(data => {
        /*ses var q'ont incialisé dans le state le temps quand fait le scroll*/
        console.log('avant ajouté 1 : '+this.page)
        this.page = this.page+1
        console.log('apres ajouté 1 : '+this.page)

        /*this.totalPages = data.total_pages*/
       
        this.setState({ 
          produits: [ ...this.state.produits, ...data ],
          isLoding:false
        })
        
    })
  }
}

/*function qui test le changement du text recherché */
searchTextInputChanged(text) {
  this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
}

_searchproducts() {
   // Ici on va remettre à zéro les produts de notre state
   // this.state ne block pas ,sa vous dire que c'est une fnction asyncro   (voir note)
   this.page = 0
    this.totalPages = 0
    this.setState({
      produits: [],
    }, () => {
        this._loadproducts()
    })
  }
  /*fanction charger de affichier detail de milm selection (film item) */
  _displayDetailForproduct = (idProduct) => { 
    console.log("Display product with id " + idProduct)
              this.props.navigation.navigate("productdetail",{idProduct : idProduct})
  }


/*co,structor */
  constructor(props) {
     super(props)
   this.searchedText = ""
   this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin des retours 
    this.state = {
      produits: [],
      isLoding:false
    }
  }
  



  render() {
    console.log(this.state.isLoading)
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        <TextInput
              style={styles.textinput}
              placeholder='nom du produit'
              blurOnSubmit={false} 
              onChangeText={(tex)=> this.searchTextInputChanged(tex)}
              onSubmitEditing={() => this._searchproducts()}
            />
        <Button style={{ height: 50 }} title='Rechercher' onPress={() => this._searchproducts()}/>
        
 <FlatList
 
  data={this.state.produits}
  keyExtractor={(item) => item.id.toString()}
renderItem={({item}) => <ProductItem produit={item}  displayDetailForproduct ={this._displayDetailForproduct}/>}
onEndReachedThreshold={0.5}
//quand on arive a la fin de la flatlist on appel la methode loadproduct pour les produit dans la dexième page
onEndReached={() => {  if (this.state.produits.length > 0) {this._loadproducts()}}}
/>

{this.state.isLoding ?
    <View style={styles.loading_container}>
      <ActivityIndicator size='large' color='#7C7C7C' />
      {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
    </View>
: null
}

      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#7C7C7C',
    borderWidth: 1,
    paddingLeft: 5
  },
  // style du vien qui contien loading icon
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
