import React from 'react';
import { Divider } from '@material-ui/core';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import ListItem from './ListItem';
import Blockquote from './Blockquote';
import Code from './Code';
import InlineCode from './InlineCode';

const components = {
  h1: (props) => <Heading variant="h1" {...props} />,
  h2: (props) => <Heading variant="h2" {...props} />,
  h3: (props) => <Heading variant="h3" {...props} />,
  h4: (props) => <Heading variant="h4" {...props} />,
  h5: (props) => <Heading variant="h5" {...props} />,
  h6: (props) => <Heading variant="h6" {...props} />,
  ul: (props) => <List variant="ul" {...props} />,
  ol: (props) => <List variant="ol" {...props} />,
  hr: Divider,
  li: ListItem,
  p: Paragraph,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode
};

export default components;
