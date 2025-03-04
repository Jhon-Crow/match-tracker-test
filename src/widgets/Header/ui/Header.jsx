import {logo} from "@/shared/assets";
import cls from './Header.module.scss';
import {LoadFeature} from "@/features/LoadFeature";

export const Header = ({setMatches, isLoading, setIsLoading}) => {
    return (
        <div className={cls.Header}>
            <img
                alt='Match Tracker Logo'
                className={cls.img}
                src={logo}/>
            <LoadFeature
                setMatches={setMatches}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </div>
    );
};