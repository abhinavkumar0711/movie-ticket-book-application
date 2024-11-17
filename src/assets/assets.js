import LoginBackground from './LoginBackground.png'
import MovieCover1 from './MovieCovers/MoviePoster1.png'
import MovieCover3 from './MovieCovers/MoviePoster3.png'
import MovieCover4 from './MovieCovers/KungFuPandaPoster.png'
import TrailerVideo from './Trailer/movieTrailer.webm'
import kungfupanda4Image from './MovieCovers/kungfupanda4.png'
import PopCornImage from './Buffet/PopCorn.png';
import LargePopCornImage from './Buffet/LargePopCorn.png';
import MediumPopCornImage from './Buffet/MediumPopCorn.png';
import SmallPopCornImage from './Buffet/SmallPopCorn.png';
import DoubleMediumPopCornImage from './Buffet/DoubleMediumPopCorn.png';
import TheatreScreen from './TheatreScreen.png';
import MoviePoster5 from './MovieCovers/MoviePoster5.png';
import MoviePoster6 from './MovieCovers/MoviePoster6.png';
import MoviePoster7 from './MovieCovers/MoviePoster7.png';
import KF4Image1 from './KungFuPanda/image1.png'
import KF4Image2 from './KungFuPanda/image2.png'

export const TheatreScreenImage = TheatreScreen;
export const LoginBackgroundImage = LoginBackground;
export const movieCovers = [MovieCover1, MovieCover3, MovieCover1, MovieCover3];
export const sampleMovieCovers = [MovieCover4, MoviePoster5, MoviePoster6, MovieCover4]
export const MovieTrailer = TrailerVideo;
export const KunfuCover = MovieCover4;
export const kungfupanda4 = kungfupanda4Image
export const PopCorn = PopCornImage;
export const KFImages = [KF4Image1, KF4Image2, KF4Image1]
export const BuffetItems = {
    large: {
        name: 'Large Menu',
        food: 'Large Popcorn',
        drinks: 'Large Coca Cola (400ml)',
        price: 30,
        image: LargePopCornImage
    },
    medium: {
        name: 'Medium Menu',
        food: 'Medium Popcorn',
        drinks: 'Medium Coca Cola (350ml)',
        price: 20,
        image: MediumPopCornImage
    },
    small: {
        name: 'Small Menu',
        food: 'Small Popcorn',
        drinks: 'Small Coca Cola (250ml)',
        price: 15,
        image: SmallPopCornImage
    },
    doubleMedium: {
        name: 'Medium Menu X2',
        food: 'Medium Popcorn X2',
        drinks: 'Medium Coca Cola (350ml) X2',
        price: 40,
        image: DoubleMediumPopCornImage
    }
    
}