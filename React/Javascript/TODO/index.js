const emptyArr=[]
const handleAdd=()=>{   
    const listValue=document.getElementById("List").value
    const allList=emptyArr.push(listValue)

    const Create=document.createElement("li")
    const text = document.createTextNode(listValue);
    Create.appendChild(text)
    let container = document.getElementById("container");
    container.appendChild(Create);

    localStorage.setItem('todo',JSON.stringify(emptyArr))
    const ho=JSON.parse(localStorage.getItem('todo'))
    console.log(ho)
}

const loadItems = () => {
    const stored = JSON.parse(localStorage.getItem('todo'));

    if (stored) {
        stored.map(item => {
            const create = document.createElement('li');
            const text = document.createTextNode(item);
            create.appendChild(text);
            const container = document.getElementById('container');
            container.appendChild(create);
        });
    }
}

window.onload = loadItems;