import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../doit-ui/Button';
import Text from '../doit-ui/Text';

storiesOf('Doit-UI/Button', module).addWithJSX('모두 보기', () => (
  <div style={{ paddingLeft: 10 }}>
    <h6>
      <Button>전송하기</Button>
      <br />
      <Text>기본 버튼</Text>
    </h6>
    <h6>
      <Button xlarge>전송하기</Button>
      <br />
      <Text>xlarge 버튼</Text>
    </h6>
    <h6>
      <Button large>전송하기</Button>
      <br />
      <Text>large 버튼</Text>
    </h6>
    <h6>
      <Button small>전송하기</Button>
      <br />
      <Text>small 버튼</Text>
    </h6>
    <h6>
      <Button xsmall>전송하기</Button>
      <br />
      <Text>xsmall 버튼</Text>
    </h6>
    <h6>
      <Button primary>전송하기</Button>
      <br />
      <Text>primary 버튼</Text>
    </h6>
    <h6>
      <Button secondary>전송하기</Button>
      <br />
      <Text>secondary 버튼</Text>
    </h6>
  </div>
));
