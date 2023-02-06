let doc = document
let age = doc.querySelector("#age")
let name = doc.querySelector("#name")
let description = doc.querySelector("#description")
let btn_submit = doc.querySelector("#submit")
let task_list = doc.querySelector("#task_list")
let btn_modal = doc.querySelector("#btn_modal")
let myModal = doc.querySelector("#myModal")
let canel_btn = doc.querySelector("#canel")


let open_modal = () => {
  myModal.classList.add("opened")
}

btn_modal.addEventListener('click', open_modal)




let create_submit = (event) => {
  event.preventDefault()

  let div = doc.createElement("div")
  div.classList.add("task")
  let delete_btn = doc.createElement("button")
  delete_btn.classList.add("btn-canel")
  delete_btn.innerHTML = "x"
  let h1 = doc.createElement("h1")
  h1.classList.add("task_h1")
  h1.innerHTML = 'Имя: ' + name.value
  let age_p = doc.createElement("p")
  age_p.classList.add("age_p")
  age_p.innerHTML = 'Возраст: ' + age.value
  let des_p = doc.createElement("p")
  des_p.classList.add("des_p")
  des_p.innerHTML = 'Твоя задача: ' + description.value

  delete_btn.addEventListener("click", (e) => {
    div.remove()
  })


  myModal.classList.remove("opened")

  let rem = () => {
    
  }

  name.value = ""
  age.value = ""
  description.value = ""

  task_list.append(div)
  div.append(delete_btn)
  div.append(h1)
  div.append(age_p)
  div.append(des_p)


}



let close_modal = () => {
  myModal.classList.remove("opened")
}
canel_btn.addEventListener('click', close_modal)



btn_submit.addEventListener('click', create_submit) 
