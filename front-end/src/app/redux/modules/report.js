// @flow weak

import getLocationOrigin  from '../../services/utils/getLocationOrigin';
import { appConfig }      from '../../config';
import moment             from 'moment';
// -----------------------------
// CONSTANTS
// -----------------------------

const REQUEST_CREATE_REPORT:  string = 'REQUEST_CREATE_REPORT';
const RECEIVED_CREATE_REPORT: string = 'RECEIVED_CREATE_REPORT';
const ERROR_CREATE_REPORT:    string = 'ERROR_CREATE_REPORT';

const TOGGLE_REQUEST_ERROR:   string = 'TOGGLE_REQUEST_ERROR';
const TOGGLE_REQUEST_SUCCESS: string = 'TOGGLE_REQUEST_SUCCESS';

// -----------------------------
// REDUCER
// -----------------------------
const initialState = {
  isCreating: false,
  requestError: false,
  requestSuccess: false
};

export default function (
  state=initialState,
  action
) {
  const currentTime = moment().format();

  switch(action.type) {
  case REQUEST_CREATE_REPORT:
    return {
      ...state,
      actionTime: currentTime,
      isCreating: true,
      requestError: false,
      requestSuccess: false
    };
  case RECEIVED_CREATE_REPORT:
    return {
      ...state,
      actionTime: currentTime,
      isCreating: false,
      requestError: false,
      requestSuccess: true
    };
  case ERROR_CREATE_REPORT:
    return {
      ...state,
      actionTime: currentTime,
      isCreating: false,
      requestError: true,
      requestSuccess: false
    };
  case TOGGLE_REQUEST_ERROR:
    return {
      ...state,
      requestError: !state.requestError
    };
  case TOGGLE_REQUEST_SUCCESS:
    return {
      ...state,
      requestSuccess: !state.requestSuccess
    };
  default:
    return state;
  }
}

// -------------------------------
// ACTION CREATORS
// -------------------------------

export function createReport(report) {
  return dispatch => {
    const FETCH_TYPE = 'FETCH';
    const url = `${getLocationOrigin()}/${appConfig.API.reports}/create`;
    const method = 'post';
    const headers = {};
    const options = {
      credentials: 'same-origin',
      data: {
        email: report.email,
        machine: report.machine,
        modele: report.modele,
        severity: report.severity,
        type: report.type
      }
    };
    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_CREATE_REPORT,
          success: RECEIVED_CREATE_REPORT,
          fail: ERROR_CREATE_REPORT
        },
        url,
        method,
        headers,
        options
      }
    });
  };
}

export function toggleRequestError() {
  return {
    type: TOGGLE_REQUEST_ERROR
  };
}

export function toggleRequestSuccess() {
  return {
    type: TOGGLE_REQUEST_SUCCESS
  };
}
