import React from 'react'
import { notificationDisplay } from '../reducers/notificationReducer';

const Notification = ({props}) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    };

    
    if(props.getState().notification.display) {
        setTimeout(() => props.dispatch(notificationDisplay(false)), 5000)
        return <div style={style}>{props.getState().notification.message}</div>;
    } else {
        return null
    }
};

export default Notification
