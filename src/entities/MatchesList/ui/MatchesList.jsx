import {MatchCard} from "@/entities/MatchCard";
import cls from './MatchesList.module.scss';

export const MatchesList = ({matches}) => {
    return (
        <div className={cls.MatchesList}>
            {matches?.map((m, i) => <MatchCard key={m.time} match={m}
                                              // variant={'v' + ((i % 3)+1)}
            />)}
        </div>
    );
};