import React from 'react'
import {notificationDisplay} from '../reducers/notificationReducer';
import {connect} from "react-redux";

const Notification = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    };


    if (props.notification.display) {
        setTimeout(() => props.notificationDisplay(false), 5000);
        return <div style={style}>{props.notification.message}</div>;
    } else {
        return null
    }
};

const mapDispatchToProps = {
    notificationDisplay
};

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
};

const ConnectedNotification = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);
export default ConnectedNotification
