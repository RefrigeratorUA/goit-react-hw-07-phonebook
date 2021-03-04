import { Component } from 'react';

class Notification extends Component {
  state = {
    errorMessage: this.props.message,
  };
  componentDidMount() {
    const { onView } = this.props;
    setTimeout(() => onView('', false), 2000);
  }

  render() {
    const { errorMessage } = this.state;
    return <div className="alert">{errorMessage}</div>;
  }
}

export default Notification;
