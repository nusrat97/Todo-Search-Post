let allPost=document.querySelector(".allPost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let updateBtn=document.querySelector(".updateBtn")
let search=document.querySelector(".search")
let ul=document.querySelector("ul")

let indexStore;

let arr=[]
postBtn.addEventListener("click",function(){
   
        arr.push({
            name:name.value,
            caption:caption.value 
        })
        name.value=""
        caption.value=""
        allPost.innerHTML=""
        display()
    
})

updateBtn.addEventListener("click",function(){
    arr[indexStore].name=name.value
    arr[indexStore].caption=caption.value
    allPost.innerHTML=""
    display()

    updateBtn.style.display="none"
    postBtn.style.display="inline-block"
    name.value=""
    caption.value=""
})


function display(){
    arr.map(item=>{
        allPost.innerHTML+=`<div class="card mt-5" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.caption}</p>
                      <button href="#" class="btn btn-primary edit">Edit</button>
                      <button href="#" class="btn btn-danger delete">Delete</button>
                    </div>
                </div>`
    })

    let deletebtn=document.querySelectorAll(".delete")
    let deletebtnConvert=Array.from(deletebtn)
    deletebtnConvert.map((item,index)=>{
        item.addEventListener("click",function(){
            arr.splice(index,1)
            allPost.innerHTML=""
            display()
        })
    })

    let editbtn=document.querySelectorAll(".edit")
    let editbtnConvert=Array.from(editbtn)
    editbtnConvert.map((item2,index)=>{
        item2.addEventListener("click",function(){
            name.value=arr[index].name
            caption.value=arr[index].caption
            updateBtn.style.display="inline-block"
            postBtn.style.display="none"

            indexStore=index
        })
    })
}


search.oninput=function(){
    ul.innerHTML=""
    arr.map(item=>{
        let text=""
        // console.log(item.caption.split(""))
        for(let i=0;i<search.value.length;i++){
            text+=item.caption.split("")[i]
            // console.log(item.caption.split("")[i])
        }
        if (text==search.value){
            ul.innerHTML+=`<li>${item.caption}</li>`
        }
    })
}

arr.map(item=>{
    ul.innerHTML+=`<li>${item.caption}</li>`
})

