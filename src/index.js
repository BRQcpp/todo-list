import githubIcon from './graphics/GitHub-Mark-Light-32px.png';
import toggleImg from './graphics/toggle.png';
import toggleMenuIcon from './graphics/Arrow-down.svg';

import './style.css';
import domModule from './dom';

document.querySelector('.git-attrib').querySelector('img').setAttribute('src', githubIcon);
document.querySelector('.toggle-img').setAttribute('src', toggleImg);
document.querySelector('.toggle-menu-icon').setAttribute('src', toggleMenuIcon); // lines 1-3 && 8-10 added just to support github pages
