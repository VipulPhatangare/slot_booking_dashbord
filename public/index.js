document.addEventListener('DOMContentLoaded',async function() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const rows = document.querySelectorAll('#studentTable tbody tr');
    const table_body = document.getElementById('table_body');
    let count = 1;
    try {
        const response = await fetch('/send_data_1');

        const data = await response.json();
        // console.log(data);
        data.forEach(element => {
            const rows = document.createElement('tr');
            rows.innerHTML = `
                <td>${count}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>-</td>
                <td>-</td>
            `;

            count++;
            table_body.appendChild(rows);
        });

    } catch (error) {
        console.log(error);
    }


    try {
        const response = await fetch('/send_data_2');

        const data = await response.json();
        // console.log(data);
        data.forEach(element => {
            const rows = document.createElement('tr');
            rows.innerHTML = `
                <td>${count}</td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.phoneNumber}</td>
                <td>${element.email}</td>
                <td>${element.date}</td>
                <td>${element.slot}</td>
            `;
            count++;
            table_body.appendChild(rows);
        });

    } catch (error) {
        console.log(error);
    }
    
    searchInput.addEventListener('keyup', function() {
        const input = this.value.toLowerCase();
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(input) ? '' : 'none';
        });
    });
});