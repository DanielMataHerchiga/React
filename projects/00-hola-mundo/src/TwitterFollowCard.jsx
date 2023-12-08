import {useState} from "react"  
export function TwitterFollowCard({children, username = "unknown" }){
    //ESTADO DE SEGUIMINETO - 1 PARAMETRO ES EL ESTADO(FALSE) Y EL SEGUNDO ES PARA CAMBIARLO
    const [isFollowing, setIsFollowing] = useState(false)

    //MANEJADOR, CAMBIAR ESTADO DE SEGUIMIENTO, LA LLAMADA SE HACE EN EL BUTTON CON UN ONCLICK
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? "tw-follow-card-btn-seguir is-following" : "tw-follow-card-btn-seguir"
    

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    className="tw-follow-card-img"
                    src={`https://unavatar.io/${username}`}/>
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className="tw-follow-card-nombre-usuario">@{username}</span>
                </div>
            </header>
            <aside >
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
} 