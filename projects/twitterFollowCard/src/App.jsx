import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className="contenedor-cards">
        <TwitterFollowCard username="danichu_18" >
          Daniel Mata Hechiga
        </TwitterFollowCard>
        <TwitterFollowCard initialIsFollowing>
                Miguel Ángel Durán
        </TwitterFollowCard>
    </section>
  )
  
}

