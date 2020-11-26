import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button theme="primary">Primary Button</Button>)
  .add('Secondary', () => <Button theme="secondary">Secondary Button</Button>);