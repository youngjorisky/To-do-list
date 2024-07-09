document.addEventListener('DOMContentLoaded', function() {
    var lists = document.getElementById('lists');
    var extrainputs = document.getElementById('extrainputs');

    lists.addEventListener('keydown', function(event) {
        // If the Enter key is pressed, add the current input as a new list item
        if (event.key === 'Enter') {
            event.preventDefault();

            var text = lists.value.trim();
            if (text !== '') {
                var container = document.createElement('div');
                container.className = 'list-item';

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'checkbox-activate';

                var textElement = document.createElement('p');
                textElement.className = 'text-activate';
                textElement.innerText = text;

                container.appendChild(checkbox);
                container.appendChild(textElement);
                extrainputs.appendChild(container);

                lists.value = ''; // Clear the textarea
                lists.focus();    // Refocus the textarea to keep the cursor active

                // Make the container focusable and focus it on click
                container.tabIndex = 0;
                container.addEventListener('click', function() {
                container.focus();
                });
            }
        }

        // If the Backspace key is pressed and the textarea is empty, remove the last list item
        if (event.key === 'Backspace' && lists.value === '') {
            event.preventDefault();

            if (extrainputs.lastChild) {
                extrainputs.removeChild(extrainputs.lastChild);
            }
        }
    });

    // Use event delegation to handle backspace on list items
    extrainputs.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && event.target.classList.contains('list-item')) {
            event.preventDefault();
            extrainputs.removeChild(event.target);
        }
    });
});
