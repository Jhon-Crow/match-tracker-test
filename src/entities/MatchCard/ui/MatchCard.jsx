import {Card} from "@/shared/Card";
import {role} from "@/shared/assets";
import {Status} from "../../Status";
import cls from './MatchCard.module.scss';

export const MatchCard = ({variant, match}) => {
    // const [hidden, setHidden] = useState(true);
    const {
        homeTeam,
        homeScore,
        awayTeam,
        awayScore,
        status
    } = match;

    // const hideToggle = useCallback(() => setHidden(!hidden), [hidden])

    return (
        <Card variant={variant}>
            <div className={cls.CardContainer}>
                <div className={cls.TeamInfo}>
                    <img width={40} height={40} src={role} alt="Role" />
                    <h1>{homeTeam.name}</h1>
                </div>
                <div className={cls.ScoreInfo}>
                    <h1 className={cls.Score}>{homeScore}:{awayScore}</h1>
                    <Status status={status} />
                </div>
                <div className={cls.TeamInfo}>
                    <h1>{awayTeam.name}</h1>
                    <img width={40} height={40} src={role} alt="Role" />
                    {/* <button
        onClick={hideToggle}
        className={cls.ToggleButton}
      >
        <img
          className={hidden ? cls.ArrowNormal : cls.ArrowRotated}
          width={28}
          height={28}
          src={arrow}
          alt="Toggle"
        />
      </button> */}
                </div>
            </div>

            {/* <div className={cls.TeamCardContainer}>
    <TeamCard hidden={hidden} team={homeTeam} />
    <TeamCard hidden={hidden} team={awayTeam} />
  </div> */}
        </Card>
    );
};