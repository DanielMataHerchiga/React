import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){

    //const formattedUserName = <span>@danichu_18</span>

    return (
        
        <section className="contenedor-cards">
            <TwitterFollowCard>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard username="danichu_18">
                Daniel Mata Herchiga    
            </TwitterFollowCard>
        </section>
        /*
        <section className="contenedor-cards">
            <TwitterFollowCard formatedUser={formattedUserName} username="midudev" name="Miguel Angel Duran" isFollowing/>
            <TwitterFollowCard formatedUser={formattedUserName} username="danichu_18" name="Daniel Mata Herchiga" isFollowing={false}/>
        </section>*/
    )
}