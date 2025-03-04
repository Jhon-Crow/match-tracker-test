import cls from './ErrorMessage.module.scss';
import {errorIcon} from "@/shared/assets";
export const ErrorMessage = ({error}) => {
    if (error) return (
        <div
            className={cls.ErrorMessage}
        >
            <img src={errorIcon}/>
            {error}
        </div>
    );
};