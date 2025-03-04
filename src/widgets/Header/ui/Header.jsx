import {logo} from "@/shared/assets";
import {LoadFeature} from "@/features";
import cls from './Header.module.scss';

export const Header = ({setMatches, isLoading, setIsLoading}) => {
    return (
        <div className={cls.Header}>
            <img
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