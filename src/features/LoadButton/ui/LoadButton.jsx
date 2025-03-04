import cls from './LoadButton.module.scss';
import Refrash from "@/shared/assets/svgs/component/Refrash.jsx";
import {useCallback, useEffect} from "react";
import {getMatches} from "@/api/getMatches.js";
import classNames from "classnames";
export const LoadButton = ({setError, isLoading, setIsLoading, setMatches}) => {

    const fetchMatches = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        const res = await getMatches();

        if (res.message) {
            // setError(res.message);
            setError('Ошибка: не удалось загрузить информацию');
            setMatches(null);
        } else if (res.data) {
            setMatches(res.data.matches);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMatches();
    }, []);


    return (
        <button
            className={cls.LoadButton}
            onClick={fetchMatches}
            disabled={isLoading}
        >
            Обновить
            <Refrash
                className={classNames(cls.loader, isLoading ? cls.isLoading : '')}
            />
        </button>
    );
};