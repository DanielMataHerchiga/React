export function TwitterFollowCard({username, name, isFollowing}){
    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    className="tw-follow-card-img"
                    src={`https://unavatar.io/${username}`}/>
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-nombre">{name}</strong>
                    <span className="tw-follow-card-nombre-usuario">@{username}</span>
                </div>
            </header>
            <aside >
                <button className="tw-follow-card-btn-seguir">Seguir</button>
            </aside>
        </article>
    )
} 