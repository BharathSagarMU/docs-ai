import React,{lazy,useMemo} from "react";
import {Route ,Routes,Switch,BrowserRouter,useLocation} from "react-router-dom"

const LandignPage = lazy(()=> import("./screens/landingpage"))
const RegisterForm = lazy(()=> import("./screens/registerpage"))
const LoginForm  = lazy(()=> import("./screens/loginpage"))

export default function Navigation(){

        return(
           
            <Routes>
                <Route path="/" element={<LandignPage/>}></Route>
                <Route path="/register" exact element={<RegisterForm/>}></Route>
                <Route path="/login" exact element={<LoginForm/>}></Route>
            </Routes>
            
        )
}


