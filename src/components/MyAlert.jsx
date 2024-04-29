import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function MyAlert() {
    const [show, setShow] = useState(true)

    if(show) {
  return (
    <>
        <Alert className='text-center' variant='info' onClose={() => setShow(false)} dismissible>
          Welcome to Epibooks! Check out our latest {''}
          <Alert.Link href="#">audiobooks</Alert.Link> collection!
        </Alert>
    </>
  );
}
}

export default MyAlert;