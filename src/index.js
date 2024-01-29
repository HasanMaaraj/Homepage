import './style.css';
import AboutMe from './images/about-me.jpg'
const loadHeader = () => {
    console.log('loading header')
    const aboutMe = new Image();
    aboutMe.src = AboutMe;
    console.log(aboutMe)
    document.querySelector('.about-me').prepend(aboutMe);
};

loadHeader();
console.log('hi')