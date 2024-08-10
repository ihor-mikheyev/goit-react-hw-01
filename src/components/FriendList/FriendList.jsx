import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"


export default function FriendList({ list } ){ 
    return (
        <ul className={ css.list}>
            {list.map(item => {
                return (
                    <li key={item.id} className={css.card }>
                        <FriendListItem friends={item} />
                    </li>
                );
            })}
        </ul>
    );
}