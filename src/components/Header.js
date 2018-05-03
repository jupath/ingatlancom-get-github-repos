import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { startGettingRepos } from '../actions/repos';

class Header extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.error !== prevState.error) {
      return {
        error: nextProps.error,
      };
    }

    return null;
  }

  state = {
    user: '',
    error: false,
  };

  handleOnChangeInput = (event) => {
    const user = event.target.value;
    this.setState({
      user,
    });
  }

  handleOnSubmitForm = (event) => {
    event.preventDefault();
    const { user } = this.state;

    if (user === '') {
      this.setState({
        error: 'Please, provide a username!',
      });
    } else {
      this.props.getRepos(this.state.user);
      this.setState({
        user: '',
        error: false,
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container text-center pt-4 pb-3 px-xl-7">
          <h1>Get GitHub repos by username</h1>
          <Form inline className="header__searchform mt-4 mb-3" onSubmit={this.handleOnSubmitForm}>
            <FormGroup>
              <Label for="user" className="sr-only">User</Label>
              <Input type="text" name="user" id="user" placeholder="Enter username..." value={this.state.user} onChange={this.handleOnChangeInput} />
            </FormGroup>
            <Button color="success" className="text-uppercase">Get repos</Button>
          </Form>
          <div className="header__error">
            {this.state.error && <p className="text-danger">{this.state.error}</p>}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  getRepos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.repos.error,
});

const mapDispatchToProps = dispatch => ({
  getRepos: user => dispatch(startGettingRepos(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
