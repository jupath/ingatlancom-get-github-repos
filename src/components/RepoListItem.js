import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RepoListItem = (props) => {
  const {
    name,
    description,
    language,
  } = props.repo;

  return (
    <div className="box p-3 mt-3 mb-3">
      <h4>{name}</h4>
      <p><span className="font-weight-bold">Description:</span> {description}</p>
      <p><span className="font-weight-bold">Language:</span> {language}</p>
      <Link to={`/repo/${name}`} className="btn btn-success mt-3">Details</Link>
    </div>
  );
};

RepoListItem.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RepoListItem;
