import React, { Component } from 'react'
// import {  } from 'native-base'
import Navigation from './src/navigation/navigation'
import {
  View,
  Text,
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/redux/store/store'

const store = configureStore()

export class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={{flex : 1}}>
          {/* <Text>test</Text> */}
          <Navigation />
        </View>
      </Provider>
      
    )
  }
}

export default App
