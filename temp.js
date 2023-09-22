import SwipeCards from './SwipeCards.js'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import FlipCard from 'react-native-flip-card'



class Card extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        
      )
    }
  }



class NoMoreCards extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <View>
          <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
      )
    }
  }
   
  export default class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [
          {text: 'Tomato', backgroundColor: 'red'},
          {text: 'Aubergine', backgroundColor: 'purple'},
          {text: 'Courgette', backgroundColor: 'green'},
          {text: 'Blueberry', backgroundColor: 'blue'},
          {text: 'Umm...', backgroundColor: 'cyan'},
          {text: 'orange', backgroundColor: 'orange'},
        ]
      };
    }
   
    handleYup (card) {
      console.log(`Yup for ${card.text}`)
    }
    handleNope (card) {
      console.log(`Nope for ${card.text}`)
    }
    handleMaybe (card) {
      console.log(`Maybe for ${card.text}`)
    }
    render() {
      // If you want a stack of cards instead of one-per-one view, activate stack mode
      // stack={true}
      return (
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
   
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      )
    }
  }

const styles = StyleSheet.create({
  cardContent: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText:{
    fontSize:32,
  },
  face: {
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccccc',
    borderRadius: 16,
  },
  back: {
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccccc',
    borderRadius: 16,
  },
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: '#edf8ff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
