import big from '../assets/big.jpg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

//for the small image 
const imageSm = document.createElement('img');
imageSm.src = small;
document.body.appendChild(imageSm);

//for the large image
const imageBig = document.createElement('img');
imageBig.src = big;
document.body.appendChild(imageBig);
