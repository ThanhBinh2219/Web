const buttons = document.querySelectorAll('.num-btn');
    let expectedValue = 1;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonValue = parseInt(button.innerText, 10);

        if (buttonValue === expectedValue) {
          button.remove();
          expectedValue++;
        } else {
          alert('Nhấn sai! Vui lòng nhấn vào button đúng tiếp theo.');
        }
      });
    });