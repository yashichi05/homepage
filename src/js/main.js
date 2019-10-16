import $ from 'jquery';
import popper from 'popper.js';

import img4 from '../img/img4.jpg';
import img3 from '../img/img3.jpg';
import img2 from '../img/img2.jpg';
import img1 from '../img/img1.jpg';
import bg from '../img/bg.jpg';


const img1_ = new Image();
img1_.src = img1;
const img2_ = new Image();
img2_.src = img2;
const img3_ = new Image();
img3_.src = img3;
const img4_ = new Image();
img4_.src = img4;
const bg_ = new Image();
bg_.src = bg;


$("head").append('<link rel="preload" href="'+ img4_.src +'" as="image"><link rel="preload" href="'+ img3_.src +'" as="image"><link rel="preload" href="'+ img2_.src +'" as="image"><link rel="preload" href="'+ img1_.src +'" as="image"><link rel="preload" href="'+ bg_.src +'" as="image">');