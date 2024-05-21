let Input = document.querySelector('.form__input')
let Button = document.querySelector('.form__button')
let wrapper = document.querySelector('.wrapper-users')

let users = [

]

const ReadUsers = () => {

    users.map((v, index) => {
        let card = document.createElement('div')

        card.innerHTML = `
         
        <div class='first_box'>
          <div class='mini_box'>
              <input type="checkbox" id="checkbox-${index}" onclick="toggleTextDecoration(${index})"> 
              <label for="checkbox-${index}" class="text">${v.name}</label>
          </div>
          <button class='btn_delete' onclick="deleteUsers(${index})">
              <img class='icon_delete' src="https://cdn-icons-png.flaticon.com/512/5582/5582899.png" alt="">
          </button>
        </div>
        `;

        wrapper.appendChild(card)

    })

}

const toggleTextDecoration = (index) => {
    const label = document.querySelector(`#checkbox-${index} + .text`);
    label.classList.toggle('strikethrough');
}



ReadUsers()


const AddUsers = () => {
    Button.addEventListener('click', () => {

        if (Input.value.trim() !== '') {
            wrapper.innerHTML = '';
            let obj = {
                id: users.length + 1,
                name: Input.value
            };
            users.push(obj);
            ReadUsers();
            Input.value = '';
        }
    });
}

AddUsers()


const deleteUsers = (index) => {
    wrapper.innerHTML = ''
    users.splice(index, 1)
    ReadUsers()
}


