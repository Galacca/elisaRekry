import React from 'react';
import { connect } from 'react-redux';

const FindChannels = (props) => {
return (
    <div>
        <label>Channel:</label>
        <select id="channel">
        {props.allChannels.map(s => <option key={s.id}value={s.id}>{s.name}</option>)}
        </select>
    </div>
)
};

const mapStateToProps = (state) => ({
    allChannels: state.allChannels,
});

const connectedFindChannels = connect(mapStateToProps)(FindChannels);
export default connectedFindChannels;