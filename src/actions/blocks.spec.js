import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './blocks';

describe('Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const node = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  // it('should create an action to start checking node status', () => {
  //   const actual = ActionCreators.getBlocksList(node);
  //   const expected = {
  //     type: ActionTypes.CHECK_NODE_STATUS_START,
  //     node
  //   };
  //
  //   expect(actual).toEqual(expected);
  // });

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.GET_BLOCKS_START,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.getBlocksList(node))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.getBlocksList(node)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });


});
