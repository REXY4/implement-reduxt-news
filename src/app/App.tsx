'use client'
import { persistore, store } from "@/states/stores"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

interface Props {
    children :  ReactNode
}

const App = ({children}:Props) =>{
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
                {children}
            </PersistGate>
        </Provider>
    )
}


export default App;