const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('plates')) || [];

addItems.addEventListener('submit', addItemsToList);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

function addItemsToList(e) {
    e.preventDefault();
    const item = new FormData(addItems).get('item');
    items.push({
        item: item,
        completed: false
    });

    console.log(items);
    e.target.reset();
    
    populateList(items, itemsList);

    // Add to local Storage
    localStorage.setItem('plates', JSON.stringify(items));
}


function populateList(plates=[], itemsList) {
    itemsList.innerHTML = items.map((item, index) => {
        return `
            <li>
                <input type="checkbox" data-index="${index}" id="item-${index}" ${item.completed ? "checked" : ""} />
                <label for="item-${index}">${item.item}</label>
            </li>
        `;
    }).join("");
}


function toggleDone(e) {
    const target = e.target;
    if(target.matches('input')) {
        const id = target.dataset.index;
        items[id].completed = !items[id].completed;

        localStorage.setItem('plates', JSON.stringify(items));
        populateList(items, itemsList);
    }
}