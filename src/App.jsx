import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   const [name,setname] = useState('midudev');
   const tooglename = () => {
      setname((prevName) => prevName === 'midudev' ? 'patricioestrella' : 'midudev');
   }

   const users = [
      {
          userName: 'midudev',
          name: 'Miguel Angel Duran',
          isFollowing: true,
      },
      {
          userName: 'bryanvivancos',
          name: 'Bryan Vivanco Silva',
          isFollowing: false,
      },
      {
         userName: 'patricioestrella',
         name: 'Patricio Estrella',
         isFollowing: false,
         
      }
  ]
  

   return(
   <section className='App'>
      {
      users.map(({userName, name, isFollowing}) => (
         <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing} key={userName}>
            {name}
         </TwitterFollowCard>
      ))
      }

      <TwitterFollowCard userName={name} >
      Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="bryanvivancos" initialIsFollowing={true}>
      Bryan Vivanco Silva
      </TwitterFollowCard>

      <button onClick={ tooglename }  >
         Cambiar nombre
      </button>
      

   </section>
   )
}
