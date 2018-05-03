import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';
import setPagination from '../actions/pagination';
import UserData from './UserData';
import RepoListItem from './RepoListItem';

class RepoList extends Component {
  handlePageChange = (pageNumber) => {
    const activePageStart = (pageNumber * 6) - 6;
    const activePageEnd = (pageNumber * 6);

    this.props.setPagination(activePageStart, activePageEnd, pageNumber);
  }

  render() {
    const numOfRepos = this.props.repos.length;
    const paginatedRepos = this.props.repos.slice(this.props.activePageStart, this.props.activePageEnd);

    return (
      <div className="container px-xl-7">
        <UserData owner={this.props.repos[0].owner} numOfRepos={numOfRepos} />
        <h2 className="text-center">Public repos of {this.props.repos[0].owner.login}</h2>
        {
          paginatedRepos.map(repo => <RepoListItem key={repo.id} repo={repo} />)
        }
        <div className="my-4">
          <Pagination
            activePage={this.props.pageNumber}
            itemsCountPerPage={6}
            totalItemsCount={numOfRepos}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

RepoList.propTypes = {
  activePageEnd: PropTypes.number.isRequired,
  activePageStart: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPagination: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activePageEnd: state.pagination.activePageEnd,
  activePageStart: state.pagination.activePageStart,
  pageNumber: state.pagination.pageNumber,
});

const mapDispatchToProps = dispatch => ({
  setPagination: (activePageStart, activePageEnd, pageNumber) =>
    dispatch(setPagination(activePageStart, activePageEnd, pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
