import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);

}

const clickCounter = debounce(updateCounter, 500);

$('button').on('click', clickCounter);

