import css from "./Profile.module.css"


export default function Profile({ user: { username, tag, location, avatar, stats: { followers, views, likes }, } }) {
    return (
        <div className={css.card_body} >
  <div className={css.user_wrapper}>
                <img className={ css.avatar} src={avatar} alt="User avatar" width={140}/>
    <p className={css.name}>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.stat_list}>
                <li className={css.stat_item }>
        <span>Followers</span>
        <span>{ followers}</span>
    </li>
    <li className={css.stat_item }>
        <span>Views</span>
        <span>{views}</span>
    </li>
    <li className={css.stat_item }>
        <span>Likes</span>
        <span>{likes}</span>
    </li>
  </ul>
</div>
    )
}