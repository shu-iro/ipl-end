// @flow weak

import React, {
  PureComponent
}                   from 'react';
import PropTypes    from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';
import Report from '../../components/report/Report';
import { Form } from 'antd';

type Props = {
  match: any,
  location: any,
  history: any,

  currentView: string,
}

type State = {
  email: String
}

class ReportForm extends PureComponent<Props, State> {
  // eslint-disable-next-line no-undef
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterReportForm: PropTypes.func.isRequired,
    leaveReportForm: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      model: '',
      machine: ''
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { enterReportForm } = this.props;
    this.setState({ machine: this.props.match.params.machineName });
    enterReportForm();
  }

  componentWillUnmount() {
    const { leaveReportForm } = this.props;
    leaveReportForm();
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleModelChange(model) {
    this.setState({
      model
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { email, model } = this.state;
    const { getFieldDecorator } = this.props.form;
    const config = {
      heightMin: 330,
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript',
        'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle',
        '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertImage',
        'insertTable', '-', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting',
        '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      toolbarButtonsXS: ['bold', 'italic', 'fontSize', 'fontStyle', 'insertImage', 'undo', 'redo']
    };
    return(
      <AnimatedView>
        <Report
          getFieldDecorator={getFieldDecorator}
          handleSubmit={this.handleSubmit}
          handleModelChange={this.handleModelChange}
          model={model}
          config={config}/>
      </AnimatedView>
    );
  }
}

export default Form.create()(ReportForm);
