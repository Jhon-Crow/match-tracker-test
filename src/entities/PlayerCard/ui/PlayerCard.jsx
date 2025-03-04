import {icon} from "@/shared/assets";
import cls from './PlayerCard.module.scss';

export const PlayerCard = ({player}) => {
    return (
        <div className={cls.PlayerCard}>
            <div className={cls.wrapper}>
                <img src={icon}/>
                <h1>{player.username}</h1>
            </div>

            <div className={cls.wrapper}>
                <h2>Убийств: </h2>
                <h1>{player.kills}</h1>
            </div>
        </div>
    );
};