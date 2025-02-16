//your JS code here. If required. document.getElementById('submit').addEventListener('click', function () {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const isbn = document.getElementById('isbn').value;

      if (title && author && isbn) {
        const tableBody = document.getElementById('book-list');

        // Create a new row
        const newRow = document.createElement('tr');

        // Create cells and append data
        newRow.innerHTML = `
          <td>${title}</td>
          <td>${author}</td>
          <td>${isbn}</td>
          <td><span class="delete">Clear</span></td>
        `;

        // Add event listener to the "Clear" button
        newRow.querySelector('.delete').addEventListener('click', function () {
          tableBody.removeChild(newRow);
        });

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear the input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
      } else {
        alert('Please fill in all the fields.');
      }
    });