import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const getBlocksStart = (node) => {
  return {
    type: types.GET_BLOCKS_START,
    node
  };
};

const getBlocksSuccess = (node, res) => {
  return {
    type: types.GET_BLOCKS_SUCCESS,
    node,
    res
  };
};

const getBlocksFailure = (node) => {
  return {
    type: types.GET_BLOCKS_FAILURE,
    node,
  };
};

export function getBlocksList(node) {
  return async (dispatch) => {
    try {
      dispatch(getBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if(res.status >= 400) {
        dispatch(getBlocksFailure(node));
      }

      const json = await res.json();

      dispatch(getBlocksSuccess(node, json.data));
    } catch (err) {
      dispatch(getBlocksFailure(node));
    }
  };
}

export function getBlocksLists(list) {
  return (dispatch) => {
    list.forEach(node => {
      dispatch(getBlocksList(node));
    });
  };
}
