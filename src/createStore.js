import {
  // 名前重複のため別名でimportとする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware} from 'react-router-redux';
import * as reducers from './reducers';

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    // 1つのReducerで完結することはほぼないので、
    // 最初からcombineReducersを使う実装にしておく
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(
      // Redux Middlewareにredux-loggerを設定
      logger,
      thunk,
      // react-router-reduxのRedux Middleware
      routerMiddleware(history)
    )
  );
}
