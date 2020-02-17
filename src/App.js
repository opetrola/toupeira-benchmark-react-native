import React from 'react'

import Store from './Store/Store'
import { Provider } from 'react-redux'

import AppStackNavigation from './Components/Navigations/AppStackNavigation'

class App extends React.Component {

    render () {
        return (
            <Provider store={Store}>
                <AppStackNavigation />
            </Provider>
        )
    }
}

export default App