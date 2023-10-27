let body = document.querySelector('body')
let base = document.getElementById('base')
let btnClick  = document.getElementById('btnClick')
let modal = document.getElementById('modal')
let form = document.getElementById('form')
let imageInput = document.getElementById('imageInput')
let filmInput = document.getElementById('filmInput')
let imdbInput = document.getElementById('imdbInput')
let categoryInput = document.getElementById('categoryInput')
let rejisorInput = document.getElementById('rejisorInput')
let btnSubmit = document.getElementById('btnSubmit')
let search = document.getElementById("search")



btnClick.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.classList.toggle("aktiv")
    btnSubmit.addEventListener('click',(event)=>{
        event.preventDefault()

        let imageInputValue = imageInput.value
        let filmInputValue = filmInput.value
        let imdbInputValue = imdbInput.value
        let categoryInputValue = categoryInput.value
        let rejisorInputValue = rejisorInput.value


        let table = document.getElementById("table")
        let tableInfo = document.createElement("tr")
        let imageInputTd = document.createElement('td')
        let filmInputTd = document.createElement('td')
        let imdbInputTd = document.createElement('td')
        let categoryInputTd = document.createElement('td')
        let rejisorInputTd = document.createElement('td')
        let img = document.createElement("img")










        if (imageInput.value.trim()=== '' ||  filmInput.value.trim()=== '' ||  imdbInput.value.trim()==='' || categoryInput.value.trim() === "" || rejisorInput.value.trim() === ""   ) {
            alert('Inputlari tam doldurun')
            return -1
        }
        else{
            tableInfo.appendChild(imageInputTd)
            tableInfo.appendChild(filmInputTd)
            tableInfo.appendChild(imdbInputTd)
            tableInfo.appendChild(categoryInputTd)
            tableInfo.appendChild(rejisorInputTd)

            imageInputTd.appendChild(img)
        }
        
        
        table.appendChild(tableInfo)
        // imageInputTd.appendChild(img)


        img.setAttribute('src',imageInputValue);
        imageInputTd.append = img;
        filmInputTd.textContent = filmInputValue;
        imdbInputTd.textContent = imdbInputValue;
        categoryInputTd.textContent = categoryInputValue;
        rejisorInputTd.textContent = rejisorInputValue
        remove.textContent = "X"
        edit.textContent = "EDIT"
        



        filmInput.value = ''
        imageInput.value = ''
        imdbInput.value = ''
        categoryInput.value = ''
        rejisorInput.value = ''
        form.reset()
    })

    search.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})