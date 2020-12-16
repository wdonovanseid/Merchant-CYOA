import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     currentPage: "kegList",
  //     masterKegList: {},
  //     selectedKeg: null,
  //     tabPintList: {},
  //     totalPrice: 0.00
  //   });
  // });

});