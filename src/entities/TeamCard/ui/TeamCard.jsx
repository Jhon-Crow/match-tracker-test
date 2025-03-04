import {PlayerCard} from "../../PlayerCard";
import cls from './TeamCard.module.scss';

export const TeamCard = ({team, hidden}) => {
    return !hidden && (
        <div className={cls.TeamCard}>
            <div className={cls.flex}>
                <PlayerCard player={team.players[0]}/>
                <PlayerCard player={team.players[1]}/>
                <PlayerCard player={team.players[2]}/>
            </div>
            <div className={cls.tatal}>

                <div className={cls.wrapper}>
                    <h2>Points: </h2>
                    <h1>+{team.points}</h1>
                </div>

                <div className={cls.wrapper}>
                    <h2>Points: </h2>
                    <h1>{team.place}</h1>
                </div>

                <div className={cls.wrapper}>
                    <h2>Всего убийств: </h2>
                    <h1>{team.total_kills}</h1>
                </div>

            </div>

        </div>
    );
};