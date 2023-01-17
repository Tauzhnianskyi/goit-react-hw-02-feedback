import PropTypes from 'prop-types';
import { FeedbackNotify } from './Notification.syled';

function Notification({ message }) {
  return <FeedbackNotify>{message}</FeedbackNotify>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
