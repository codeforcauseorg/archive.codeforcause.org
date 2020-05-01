import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function GuestGuard({ children }) {
  const account = useSelector((state) => state.account);

  if (account.user) {
    return <Redirect to="/app/account" />;
  }

  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.any
};

export default GuestGuard;
