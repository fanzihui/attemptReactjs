import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger'; //日志
import thunk from 'redux-thunk'; //中间层做数据异步转换
import promise from 'redux-promise-middleware' //异步

import reducer from './reducers'; //获取所有的 reducre

const middleware = applyMiddleware(promise() , thunk, logger());

export default createStore(reducer, middleware);
