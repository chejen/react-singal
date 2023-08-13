import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function Book() {
  const { bookId } = useParams();
  return (<>This is a book (Name: {bookId})</>)
}

Book.propTypes = {
  params: PropTypes.object,
};

Book.defaultProps = {
  params: {},
};
