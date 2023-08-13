import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { price } from '../states/price';

export default function Book() {
  const { bookId } = useParams();
  const add = useCallback(() => {
    price.value += 100;
  }, []);
  return (<>
    This is a book? (Name: {bookId})
    <button onClick={add}>Add</button>
  </>)
}

Book.propTypes = {
  params: PropTypes.object,
};

Book.defaultProps = {
  params: {},
};
