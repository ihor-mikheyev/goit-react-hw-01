import clsx from "clsx"
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friends: { avatar, name, isOnline }, }) {
    return (
        <div className={css.card}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(isOnline ? css.online
            : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
        
        // clsx({isOnline ? { css.online } : { css.offline} })
    )
 }