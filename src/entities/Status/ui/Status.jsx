import cls from './Status.module.scss';
import classNames from "classnames";

export const Status = ({status}) => {

    const statusText = {
        'Finished': 'Finished',
        'Ongoing': 'Live',
        'Scheduled': 'Match preparing'
    };

    return (
        <div
            className={classNames(cls.StatusCard, cls[status])}
        >
            {statusText[status]}
        </div>
    );
};