const qualAtv = document.querySelector(".main-container").getAttribute("id");
const itens = document.querySelectorAll('.option');

storageAtv();

for (const item of itens) {
    item.addEventListener("click", () => {
        const itemId = item.getAttribute('id');
        storageItem(itemId);
        window.location.href = "./atv.html";
    })
}


function storageAtv() {
    localStorage.removeItem('qualAtv');
    switch (qualAtv) {
        case "abc":
            localStorage.setItem('qualAtv', 'abc');
            break;
        case "num":
            localStorage.setItem('qualAtv', 'num');
            break;
        case "desenhos":
            localStorage.setItem('qualAtv', 'desenhos');
            break;
        default:
        console.error();
            break;
    }
}

function storageItem(item) {
    localStorage.removeItem('item');
    localStorage.setItem('item', item);
}
