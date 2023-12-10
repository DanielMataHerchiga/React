import {useState} from "react" 
export function TwitterFollowCard({username="unknown", children, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    } 

    const text = isFollowing ? "Siguiendo" : "Seguir"

    const buttonClassName = isFollowing ? "tw-follow-card-btn-seguir is-following" : "tw-follow-card-btn-seguir"

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-img" src={`https://unavatar.io/${username}`}/>
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className="tw-follow-card-nombre-usuario">@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follow">{text}</span>
                    <span className="tw-stop-follow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}