import React from 'react';
import PropTypes from 'prop-types';

const UserData = (props) => {
  const {
    login,
    avatar_url: avatarUrl,
    html_url: htmlUrl,
  } = props.owner;

  return (
    <div className="userdata box p-3 mt-3 mb-3">
      <div>
        <img src={avatarUrl} alt="user" className="mr-2 userdata__image" />
      </div>
      <div className="user__text">
        <h3 className="font-weight-bold">Username: {login}</h3>
        <p>Number of public repos: {props.numOfRepos}</p>
        <p>GitHub page: <a href={htmlUrl} target="_blank">{htmlUrl}</a></p>
      </div>
    </div>
  );
};

UserData.propTypes = {
  numOfRepos: PropTypes.number.isRequired,
  owner: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default UserData;
