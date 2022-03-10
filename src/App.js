import React from 'react'
import Layout from './components/Layout'
import Home from './views/Home'
import MainContext from './context/MainContext'
import './assets/styles/general.scss'

const App = () => {
    return (
        <MainContext>
            <Layout>
                <Home />
            </Layout>
        </MainContext>
    )
}

export default App