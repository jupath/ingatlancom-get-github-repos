import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Loading from './Loading';
import RepoList from './RepoList';

const Home = props => (
  <div>
    <Header />
    {props.isLoading && <Loading />}
    {props.repos.length > 0 && !props.isLoading && <RepoList repos={props.repos} />}
  </div>
);

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  error: state.repos.error,
  isLoading: state.repos.isLoading,
  repos: state.repos.reposList,
});

export default connect(mapStateToProps)(Home);
