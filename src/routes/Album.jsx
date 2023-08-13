import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function Album() {
  const { albumId } = useParams();
  return (<>This is an album (ID: {albumId})</>)
}

Album.propTypes = {
  params: PropTypes.object,
};

Album.defaultProps = {
  params: {},
};
