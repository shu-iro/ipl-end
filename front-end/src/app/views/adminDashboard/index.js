//@flow weak

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as machineActions      from '../../redux/modules/machine';
import * as reportActions      from '../../redux/modules/report';
import * as userActions      from '../../redux/modules/user';

import AdminDashboard from './AdminDashboard';

const mapStateToProps = (state) => {
  return {
    // views
    currentView:            state.views.currentView,

    file:                   state.machine.file,

    machines:               state.machine.machines,
    users:                  state.user.users,
    uploadError:            state.machine.uploadError,
    uploadSuccess:          state.machine.uploadSuccess,
    setStateSuccess:        state.machine.setStateSuccess,
    setStateError:          state.machine.setStateError,
    setReportAdminError:    state.report.setReportAdminError,
    setReportAdminSuccess:  state.report.setReportAdminSuccess,
    setReportStateError:    state.report.setReportStateError,
    setReportStateSuccess:  state.report.setReportStateSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      enterAdminDashboard: viewsActions.enterAdminDashboard,
      leaveAdminDashboard: viewsActions.leaveAdminDashboard,
      ...machineActions,
      ...reportActions,
      ...userActions
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);
