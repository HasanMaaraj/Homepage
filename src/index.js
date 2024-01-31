import './style.css';
import AboutMe from './images/about-me.jpg';
import battleship from './images/battleship.png';
import calculator from './images/calculator.png';
import toDo from './images/todo.png';
import library from './images/library.png';
import ticTacToe from './images/tic-tac-toe.png';
import weatherApp from './images/weather-app.png';




const loadHeader = () => {
    console.log('loading header')
    const aboutMe = new Image();
    aboutMe.src = AboutMe;
    console.log(aboutMe)
    document.querySelector('.about-me').prepend(aboutMe);
};

const prependImage = (image, title) => {
    document.querySelector(`.${title}`).prepend(image)
}

const loadProjectsImages = () => {
    const battleshipImage = new Image();
    battleshipImage.src = battleship;
    document.querySelector('.battleship').prepend(battleshipImage);

    const calculatorImage = new Image();
    calculatorImage.src = calculator;
    document.querySelector('.calculator').prepend(calculatorImage);

    const toDoImage = new Image();
    toDoImage.src = toDo;
    document.querySelector('.to-do').prepend(toDoImage);

    const libraryImage = new Image();
    libraryImage.src = library;
    document.querySelector('.library').prepend(libraryImage);

    const ticTacToeImage = new Image();
    ticTacToeImage.src = ticTacToe;
    document.querySelector('.tic-tac-toe').prepend(ticTacToeImage);

    const weatherAppImage = new Image();
    weatherAppImage.src = weatherApp;
    document.querySelector('.weather-app').prepend(weatherAppImage);
}


loadHeader();
loadProjectsImages();