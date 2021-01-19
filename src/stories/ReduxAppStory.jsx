import React from 'react';
import { storiesOf } from '@storybook/react';
import ReduxApp1 from '../07/ReduxApp01';
import ReduxApp2 from '../07/ReduxApp02';
import ReduxApp3 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';
import AdvReduxApp06 from '../07/AdvReduxApp06';
import AdvReduxApp07 from '../07/AdvReduxApp07';
import AdvReduxApp08 from '../07/AdvReduxApp08';
import SearchFilterReduxApp from '../07/SearchFilterReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 예제', () => <ReduxApp1 />)
  .addWithJSX('예제 2', () => <ReduxApp2 />)
  .addWithJSX('예제 3', () => <ReduxApp3 />)
  .addWithJSX('configureStore 예제', () => <AdvReduxApp01 />)
  .addWithJSX('action/reducer 분리 예제', () => <AdvReduxApp02 />)
  .addWithJSX('응용 예제', () => <AdvReduxApp03 />)
  .addWithJSX('그래프 DB 예제', () => <AdvReduxApp04 />)
  .addWithJSX('그래프 DB 수정 예제', () => <AdvReduxApp05 />)
  .addWithJSX('데이터 컴포넌트와 화면 컴포넌트', () => <AdvReduxApp06 />)
  .addWithJSX('데이터 컴포넌트와 화면 컴포넌트2', () => <AdvReduxApp07 />)
  .addWithJSX('버튼 별 액션 컴포넌트', () => <AdvReduxApp08 />)
  .addWithJSX('검색 컴포넌트', () => <SearchFilterReduxApp />);
