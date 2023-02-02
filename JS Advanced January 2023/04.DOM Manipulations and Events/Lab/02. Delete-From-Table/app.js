function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll("#customers tbody tr");

    const arrRows = Array.from(rows);
    let deleted = false;
    for (const row of arrRows) {
        const col = row.children[1];
        if (col.textContent == input) {
            row.remove();
            deleted = true;
        }
    }

    document.getElementById("result").textContent = deleted
        ? "Deleted."
        : "Not found.";
}
