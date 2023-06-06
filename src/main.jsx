import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
)
