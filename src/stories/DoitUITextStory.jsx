import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../doit-ui/Text';

storiesOf('Doit-UI/Text', module).addWithJSX('Text 예제', () => (
  <div>
    <Text xlarge>xlarge</Text>
    <Text xlarge primary>
      xlarge primary
    </Text>
    <Text xlarge secondary>
      xlarge secondary
    </Text>
    <Text xlarge bold>
      xlarge bold
    </Text>
    <Text xlarge light>
      xlarge light
    </Text>
    <br />
    <Text large>large</Text>
    <Text large primary>
      large primary
    </Text>
    <Text large secondary>
      large secondary
    </Text>
    <Text large bold>
      largebold
    </Text>
    <Text large light>
      large light
    </Text>
    <br />
    <Text>default</Text>
    <Text primary>default primary</Text>
    <Text secondary>default secondary</Text>
    <Text bold>default bold</Text>
    <Text light>default light</Text>
    <br />
    <Text small xlarge>
      small
    </Text>
    <Text small primary>
      small primary
    </Text>
    <Text small secondary>
      small secondary
    </Text>
    <Text small bold>
      small bold
    </Text>
    <Text small light>
      small light
    </Text>
    <br />
    <Text xsmall>xsmall</Text>
    <Text xsmall primary>
      xsmall primary
    </Text>
    <Text xsmall secondary>
      xsmall secondary
    </Text>
    <Text xsmall bold>
      xsmall bold
    </Text>
    <Text xsmall light>
      xsmall light
    </Text>
    <br />
  </div>
));
