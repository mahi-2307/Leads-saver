// javascript// javascript

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
const delBtn = document.getElementById("delete-btn")

if(leadsFromLocal){
   myLeads = leadsFromLocal
   renderLeads()
}
delBtn.addEventListener("click",function(){
   localStorage.clear()
   myLeads =[]
   renderLeads()
})
inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
   // console.log(myLeads)
   inputEl.value = ""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))

   renderLeads()
   
})
function renderLeads(){
let listItems = ""
for(let i =0; i<myLeads.length;i++){
   listItems += `
   <li>
   <a target='_blank' href ='${myLeads[i]}'> 
   ${myLeads[i]} 
   </a>
   </li>
   `
}
ulEl.innerHTML = listItems
}