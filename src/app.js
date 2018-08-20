import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import { Header, Guidelines } from "./base";
import TaskList from "./base/TaskList";
import { getData } from "./store/actions/dataActions";
import { checkData } from "./store/actions/dataActions";

const Container = styled.div`
	margin: 1rem;
`;


class App extends Component {

  render() {
    let title = "Superunknown1103";
    let date = moment().add(30, 'days').format('MMMM Do YYYY, h:mm a');
    
    let tasks = () => {
      console.log(this.props.data);
    }

    return (
      <div>
        <Header title={title} date={date} />
        <Container>
          <Guidelines />
          <button onClick = { checkData }></button>
          <button onClick={ getData }>Fetch Tasks</button>
        </Container>
       <TaskList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  data: state.data
});

export default connect(
  mapStateToProps,
  { getData }
)(App);
