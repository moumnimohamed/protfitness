/*function qui permet de creer un navigation */
/*Un StackNavigator s'initialise avec les écrans qu'il va contenir. Cela signifie que vous devez renseigner la vue principale */
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import  Search from '../Components/Search.js'
import  Home from '../Components/Home.js'
import productdetail from '../Components/productdetail.js'

const SearchStackNavigator = createStackNavigator({

  Home: { /* Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. 
  C'est le nom qu'on util isera pour appeler cette vue*/
    screen:Home,
    navigationOptions: {
      title: 'Home'
    }
  },

    Search: { /* Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. 
    C'est le nom qu'on util isera pour appeler cette vue*/
      screen:Search,
      navigationOptions: {
        title: 'Rechercher'
      }
    },

    productdetail :{
      screen :productdetail,
      navigationOptions: {
        title: 'product detail'
      }
    } 

  })


  
const App = createAppContainer(SearchStackNavigator);



  export default App