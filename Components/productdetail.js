import React from 'react'
import { Text,ScrollView,StyleSheet, View, ActivityIndicator } from 'react-native'
import { GetProductDetailById } from '../api/woocomerceDATA'

class productdetail extends React.Component {


    _displayProduct() {
        if (this.state.produit != undefined) {
          return (
            <ScrollView style={style.scrollview_container}>
              <Text>{'voilaa la description: '+this.state.produit.description}</Text>
              {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
            </ScrollView>
          )
        }
      }


/*on appel cette function quand le render est fait */
    componentDidMount() {
      GetProductDetailById(this.props.navigation.getParam('idProduct')).then(Data => {
            this.setState({
            produit: Data,
              isLoding:false
        })
    })
      }


/*co,structor */
 constructor (props) {
     super(props)
     this.state = {
        produit: undefined, // Pour l'instant on n'a pas les infos du produit, on initialise donc le produit à undefined.
        isLoding: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du produit
      }
 }


render (){
   // console.log('hahowa '+this.props.navigation.getParam('idProduct'))
   //console.log('hahowa '+this.props.navigation.state.params.nomdeparamettre
    return(
        <View style ={style.main_container}>      
{this.state.isLoding ?
    <View style={style.loading_container}>
      <ActivityIndicator size='large' color='#7C7C7C' />
      {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
    </View>
: null
}
{this._displayProduct()}
        </View>
    )
}
}


const style =StyleSheet.create(
    {
        main_container:{
            flex:1,
        },
         // style du vien qui contien loading icon
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
    }
)



export default productdetail