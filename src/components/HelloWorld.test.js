import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

beforeEach(() => {
  console.log('before each test!!');
});

afterEach(() => {
  console.log('after each test!!');
});

test('HelloWorldコンポーネントのスナップショットテスト', () => {
  const result = renderer.create(<HelloWorld />).toJSON();
  expect(result).toMatchSnapshot();
});
