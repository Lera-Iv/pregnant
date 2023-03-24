import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from './redux/store'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import ChekList from "./components/ChekList/ChekList";
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider'
// import firebase from 'firabase';
// import 'firabase/firestore';
// import 'firebase/auth';


// firebase.initializeApp({
//     apiKey: "AIzaSyDvaNsE-zp1CqjYAvuZQTgDcfW4oo",
//     authDomain: "pregnant-calculator-react.firebaseapp.com",
//     projectId: "pregnant-calculator-react",
//     storageBucket: "pregnant-calculator-react.appspot.com",
//     messagingSenderId: "571583154968",
//     appId: "1:571583154968:web:f94b745c7f4d73670b6c6d",
//     measurementId: "G-P599RECLLZ"
//     }
// );

// export const Context = createContext(null);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Context.Provider value={{
    //     firebase,
    //     auth,
    //     firestore
    //     }}>
    <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
            <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={
                        <RequireAuth>
                            <BlogList />
                        </RequireAuth>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/chek-list" element={
                        <RequireAuth>
                            <ChekList />
                        </RequireAuth>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
            <Footer />
        </BrowserRouter>
    </Provider>
    // </Context.Provider>
)    
