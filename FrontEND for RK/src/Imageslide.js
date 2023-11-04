import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { Padding } from '@mui/icons-material';


function UncontrolledExample() {
  return (
    <div className='container-xxl' style={{
       
       width:'75%'
       
       
    }}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="http://localhost:4044/profile/d0dadb41b21032aba89e9070a7db4e50"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>R K Hostels</h3>
          <p>A perfect place, For a comfortable stay.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="http://localhost:4044/profile/df0adb4550960ea83b384a4c5d557c1a"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="http://localhost:4044/profile/a448de6f748df0db09b5955976976d77"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="http://localhost:4044/profile/6835d280755f5533a9b12c769d9600e7"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Six share Room</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block "
          src="http://localhost:4044/profile/93754a5253bf45804c7dfd17d6719036"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block "
          src="http://localhost:4044/profile/38153c3c4a292df013d87338ce565b77"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block "
          src="http://localhost:4044/profile/56d41ac4af316a0fce07dd30523df6bb"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block "
          src="http://localhost:4044/profile/66728ae249848e66127ad781f6f1dad9"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default UncontrolledExample;