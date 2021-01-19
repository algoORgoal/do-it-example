// doesn't work
import React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from '../doit-ui/withStyles';
import Card from '../doit-ui/Card';
import Text from '../doit-ui/Text';
import Spacing from '../doit-ui/Spacing';

function RedBox({ children }) {
  return <div {...css({ border: '1px red solid', minHeight: 100 })}>{children}</div>;
}

storiesOf('Doit-UI/Card', module)
  .addWithJSX('Card 예제', () => (
    <Spacing vertical={2} horizontal={2}>
      <Card>
        <Text xlarge>제목</Text>
        <br />
        <Text large>내용이 함께 들어갑니다</Text>
      </Card>
    </Spacing>
  ))
  .addWithJSX('Card Spacing 예제', () => (
    <Spacing vertical={2} horizontal={2}>
      <Card vertical={2} horizaontal={2}>
        <Text xlarge>제목</Text>
        <br />
        <Text large>내용이 함께 들어갑니다</Text>
      </Card>
    </Spacing>
  ));
