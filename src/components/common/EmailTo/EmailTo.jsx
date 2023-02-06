import PropTypes from 'prop-types';
import { BoxLink } from './EmailTo.styled';

export default function EmailTo({ email, children }) {
  return <BoxLink href={`mailto:${email}`}>{children}</BoxLink>;
}

EmailTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.node,
};