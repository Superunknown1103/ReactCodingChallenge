import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import { Header, Guidelines } from "./base";
import TaskList from "./base/TaskList";
import { getData } from "./store/actions/dataActions";

const Container = styled.div`
	margin: 1rem;
`;

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: []
    }
  }

  render() {
    let title = "New Route Team Member";

    return (
      <div>
        <Header title={title} />
        <Container>
          <Guidelines />

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
