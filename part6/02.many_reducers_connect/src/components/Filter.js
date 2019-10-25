import React from 'react'
import {setFilter} from "../reducers/filterReducer";
import {connect} from "react-redux";

const Filter = (props) => {
    const handleChange = (event) => {
        props.setFilter(event.target.value)
    };
    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange}/>
        </div>
    )
};

// REDUX
const mapDispatchToProps = {
    setFilter
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
export default ConnectedFilter
