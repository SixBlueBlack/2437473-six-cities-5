import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to="/" style={{color: '#42aaff'}}>Go back</Link>
    </Fragment>
  );
}

export default NotFound;
