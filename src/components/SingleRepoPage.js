import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleRepoPage = (props) => {
  const {
    name,
    description,
    language,
    html_url: htmlUrl,
    created_at: createdAt,
    updated_at: updatedAt,
    homepage,
    license,
    stargazers_count: stargazersCount,
    watchers,
  } = props.repo;

  return (
    <div className="container px-xl-6">
      <div className="box my-5 p-3">
        <h2>{name}</h2>
        <p><span className="font-weight-bold">Description:</span> {description}</p>
        <p><span className="font-weight-bold">Language:</span> {language}</p>
        <p><span className="font-weight-bold">Created at:</span> {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
        <p><span className="font-weight-bold">Updated at:</span> {moment(updatedAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
        {homepage && <p><span className="font-weight-bold">Homepage:</span> {homepage}</p>}
        <p><span className="font-weight-bold">Stars:</span> {stargazersCount}</p>
        <p><span className="font-weight-bold">Watchers:</span> {watchers}</p>
        {license && <p><span className="font-weight-bold">License:</span> {license.name}</p>}
        <div className="mt-3">
          <Link to="/" className="btn btn-info mr-2">Go back</Link>
          <a href={htmlUrl} className="btn btn-success" target="_blank">Check it out on GitHub</a>
        </div>
      </div>
    </div>
  );
};

SingleRepoPage.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, props) => ({
  repo: state.repos.reposList.find(repo => repo.name === props.match.params.name),
});

export default connect(mapStateToProps)(SingleRepoPage);
