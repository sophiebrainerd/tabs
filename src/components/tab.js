import {Component} from 'react';
import React from 'react';

const Tab = props => {
    return(
        <div className="card">
            <div className="card-body">
                <button class="btn btn-primary btn-lg active" onClick={ (e) =>
                    props.handleClick(e, props.id)
                }>Tab {props.id}</button>
            </div>
        </div>
    )
}

export default Tab;