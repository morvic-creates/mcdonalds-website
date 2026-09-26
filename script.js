const tickerClose = document.querySelector('#tickerClose');
tickerClose.addEventListener('click', () => document.querySelector('.ticker').remove());

document.querySelectorAll('.learn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.menu-card');
    const popover = document.querySelector('#factPopover');
    popover.textContent = `✨ ${card.dataset.fact}`;
  });
});

document.querySelector('#orderButton').addEventListener('click', () => {
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => alert('Coming right up! Pick your favorite from the menu below 🍔'), 500);
});

document.querySelector('#mapButton').addEventListener('click', () => {
  window.open('https://www.google.com/maps/search/?api=1&query=123+Sunshine+Avenue+Happyville+CA+90210', '_blank');
});
