import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeView = () => {
  return (
    <div>
      <h1> Телефонная книга</h1>
      <Carousel>
        <div>
          <img
            src="https://habrastorage.org/web/0a3/ab4/d74/0a3ab4d74aa04b0ab913569836ea4208.jpg"
            alt="book"
          />
        </div>
        <div>
          <img
            src="https://static8.depositphotos.com/1029554/813/i/950/depositphotos_8138619-stock-photo-old-style-phone-over-yellow.jpg"
            alt="book"
          />
        </div>
        <div>
          <img
            src="https://tarifkin.ru/wp-content/uploads/vse-sposoby-nayti-telefon-po-adresu-5.jpg"
            alt="book"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeView;
