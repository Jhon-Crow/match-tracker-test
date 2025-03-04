import cls from './Card.module.scss';
import classNames from "classnames";

export const Card = ({children, variant}) => {
    return (
        <div className={classNames(cls.Card, cls[variant])}>
            {children}
        </div>
    );
};