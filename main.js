// Get List ============================================================
const dinos1 = document.querySelector('#first-dinos');
const dinos2 = document.querySelector('#second-dinos');
const dinos3 = document.querySelector('#row');
const button = document.querySelector('#destroy-all');

// Update the page ============================================================
function update () {

    // Update dinos1
    dinos1.addEventListener('click', function (event) {
        console.log('Parent was clicked!'); 
        const list = event.target;
        list.style.textDecoration = 'line-through';
        console.log(list.innerText);
    })

    // Update dinos2
    dinos2.addEventListener('click', function (event) {
        console.log('Parent was clicked!');
        const list2 = event.target;
        list2.style.opacity = '0.08';  
        console.log(list2.innerText);
    })

    // Update dinos3
    dinos3.addEventListener('click', function (event) {
        console.log('Parent was clicked!'); 
        const list3 = event.target;
        list3.style.width = '0px'; 
        console.log(list3.innerText);
    })
    // Update button to get all
    button.addEventListener ('click', function () {
        // First Dino List
        const listItems1 = document.querySelectorAll('ol li');
        for (let i = 0; i < listItems1.length; i++) {
            const item = listItems1[i];
            item.style.textDecoration = 'line-through';
        }
        //Second Dino List
        const listItems2 = document.querySelectorAll('ul li');
        for (let i = 0; i < listItems2.length; i++) {
            const item2 = listItems2[i];
            item2.style.opacity = '0.08';
        }
        // Third Dino List
        const imgs = document.querySelectorAll('img');
        for(let i = 0; i < imgs.length; i++) {
            const image = imgs[i];
            image.style.width = '0px'; 
        }

    })

}
update();


