import React, { Component, Fragment } from "react";
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

const title = "Superunknown1103";

const date = moment().add(1, 'month').format('MMMM Do YYYY, h:mm a');
    


class App extends Component {

    tasks = () => {
      console.log(this.props.data);
      this.props.getData();
    }

    handleChange = (value) => {
      // this.props.filterItems(value);
    }

  render() {
    const { loading, errors } = this.props;

    return (
      <Fragment>
        <Header title={title} date={date} />
          <Container>
            <Guidelines />
            <button onClick = { checkData }></button>
            <button onClick={ this.tasks }>Fetch Tasks</button>
          </Container>
          <button onClick={this.handleChange}>Knopka</button>
          { errors && 'SOMETHING BAD' }
          { loading ? 'LOADING' : <TaskList /> }
      </Fragment>
    );
  }
}

// state management
const mapStateToProps = state => ({
  errors: state.errors,
  // data: state.data.data,
  loading: state.data.loading,
});

export default connect(
  mapStateToProps,
  { getData,
    // filterItems
 }
)(App);
