import PropTypes from 'prop-types';
import { BoxLink } from '../EmailTo/EmailTo.styled';

export default function CallTo({ phone, children }) {
  return <BoxLink href={`tel:${phone}`}>{children}</BoxLink>;
}

CallTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node,
};