const display = document.querySelector('.display span');
const buttons = document.querySelectorAll('.calcc, .calc');




buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

   
    if (value === 'AC') {
      display.textContent = '0';
    }
    
    else if (value === 'DEL') {
      display.textContent = display.textContent.slice(0, -1);
      if (display.textContent === '') {
        display.textContent = '0';
      }
    } 
    else if (value === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    }
   
    else {
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});

