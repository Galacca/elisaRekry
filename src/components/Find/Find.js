import React from 'react';
import { connect } from 'react-redux';
import getByChannelAndDateAction from '../../actions/findActions';
import FindMonths from './FindMonths';
import FindDays from './FindDays';
import FindChannels from './FindChannels';
import FindResult from './FindResult';

const Find = (props) => {
  const search = (event) => {
    event.preventDefault();
    props.getByChannelAndDateAction(event.target.channel.value, event.target.day.value, event.target.month.value);
  };

  return (
    <div>
      <form onSubmit={search}>
        <FindChannels />
        <FindDays />
        <FindMonths />
        Year: 2020
        <br />
        <button type="submit">Find</button>
      </form>
      <br />
      <FindResult />
    </div>
  );
};

const mapStateToProps = (state) => ({
  allChannels: state.allChannels,
});

const connectedFind = connect(mapStateToProps, { getByChannelAndDateAction })(Find);
export default connectedFind;
