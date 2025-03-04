import {Card} from "@/shared/Card";
import {role} from "@/shared/assets";
import {Status} from "../../Status";

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
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%'
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: '10.5px'}}>
                    <img width={40} height={40} src={role}></img>
                    <h1>{homeTeam.name}</h1>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"}}>
                    <h1 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: '24.2px'}}>{homeScore}:{awayScore}</h1>
                    <Status status={status}/>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: '10.5px'}}>
                    <h1>{awayTeam.name}</h1>
                    <img width={40} height={40} src={role}></img>
                    {/*<button*/}
                    {/*    onClick={hideToggle}*/}
                    {/*    style={{*/}
                    {/*    width: '28px',*/}
                    {/*    height: '28px',*/}
                    {/*    cursor: "pointer"*/}
                    {/*}}>*/}
                    {/*    <img*/}
                    {/*        style={{*/}
                    {/*        transform: hidden ? 'rotate(0deg)' : 'rotate(180deg)',*/}
                    {/*        transition: 'transform 0.3s ease'*/}
                    {/*    }}*/}
                    {/*         sizes='100%' src={arrow}/>*/}
                    {/*</button>*/}
                </div>
            </div>

            {/*<div style={{display: "flex", alignItems: "center", gap: '2rem'}}>*/}
            {/*    <TeamCard hidden={hidden} team={homeTeam}/>*/}
            {/*    <TeamCard hidden={hidden} team={awayTeam}/>*/}
            {/*</div>*/}


        </Card>
    );
};