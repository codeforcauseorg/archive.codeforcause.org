import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  Grid,
  makeStyles
} from '@material-ui/core';
import FilesDropzone from 'src/components/FilesDropzone';
import FileCard from './FileCard';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Files({ files, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardContent>
          <FilesDropzone />
        </CardContent>
      </Card>
      <Grid
        container
        spacing={3}
      >
        {files.map((file) => (
          <Grid
            item
            key={file.id}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.array.isRequired
};

export default Files;
