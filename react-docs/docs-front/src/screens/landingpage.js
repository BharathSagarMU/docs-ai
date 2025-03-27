import React from 'react'
import person from '../images/DT_BG3.png'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/header'



export default function LandignPage(){

    return(
    <>
        <div className='land-page' >
          
            <div className='d-flex-r' style={{alignItems:'center ',padding:15,justifyContent:"space-around",textAlign:'start'}}>
              <div style={{width:'40%'}}>
               <h1>Create your Docs here</h1>
               <p>Enim consequat incididunt cillum excepteur adipisicing sit exercitation sit. Eiusmod ea excepteur laborum Lorem id nisi. Cupidatat sunt do ad cupidatat deserunt commodo esse.</p>
               <p>Consectetur aliqua dolore reprehenderit Lorem velit exercitation aliqua aliquip ex. Incididunt nulla ea et eiusmod magna fugiat. Tempor laborum fugiat tempor cupidatat.</p>
               <Button title = "Start Doc"/>
               </div>
               <div>
                <img src={person}/>
               </div>
            </div>
        </div>
    </>
    )
}