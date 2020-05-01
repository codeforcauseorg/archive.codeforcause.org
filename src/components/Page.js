import React, {
  forwardRef,
  useEffect, useCallback
} from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import track from 'src/utils/analytics';

const Page = forwardRef(({
  title,
  children,
  ...rest
}, ref) => {
  const location = useLocation();

  const sendPageViewEvent = useCallback(() => {
    track.pageview({
      page_path: location.pathname
    });
  }, [location]);

  useEffect(() => {
    sendPageViewEvent();
  }, [sendPageViewEvent]);

  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Page;
