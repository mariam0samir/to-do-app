let inputFelid=document.querySelector('.add-task input');
let theAddBtn=document.querySelector('.add-task .plus');
let theTasksContainer=document.querySelector('.tasks-content');
let tasksCount=document.querySelector('.task-stats .tasks-count span');
let tasksCompleted=document.querySelector('.tasks-completed span');




window.onload=function(){
    inputFelid.focus();
}

// adding tasks
theAddBtn.onclick=function(){
    // check if input is empty
    if(inputFelid.value==''){
window.alert('please write your task');
    }else{
        let noTasksMasege=document.querySelector('.tasks-content .no-tasks');
// check if no masseg is exist
        if(theTasksContainer.contains(document.querySelector('.no-tasks'))){
            noTasksMasege.remove();
        }
           // remove no task 
          
           // add task
     let mainSpan=document.createElement('span');
   //   add class to mainSpan
     mainSpan.className='task-box';
   //   create delete btn
   let btn=document.createElement('span');
   // add class to btn
   btn.className='delete'
   // ceate text to mainSpan
   let text=document.createTextNode(inputFelid.value);
   // create text to deletebtn
   let textDeletBtn=document.createTextNode('delete');
   // add text to span
   mainSpan.appendChild(text);
   // add text to btn
   btn.appendChild(textDeletBtn);
   // add btn to span
   mainSpan.appendChild(btn);
   // add span to the container of tasks
   theTasksContainer.appendChild(mainSpan);
   inputFelid.value='';
   momo()
 }
}
document.addEventListener('click',function(e){
if(e.target.className=='delete'){
e.target.parentNode.remove()
momo()
if(theTasksContainer.childElementCount==0){
    addNoTask()
    momo()
}
}
if(e.target.classList.contains('task-box')){
    e.target.classList.toggle('finished')
    momo()
    }
    momo()
})



function addNoTask(){
    // create main span
    let span=document.createElement('span')
    // creat text to span
    let textMass=document.createTextNode('No Tasks todo')
    // add text to span
    span.appendChild(textMass)
    // add class to span
    span.className='no-tasks'
    theTasksContainer.appendChild(span)
}




// function to calc tasks

// function momo(){
//   tasksCount.innerHTML=theTasksContainer.childElementCount
// }
// another way to count tasks
function momo(){
    tasksCount.innerHTML=document.querySelectorAll('.task-box').length
    tasksCompleted.innerHTML=document.querySelectorAll('.finished').length
  }
  
  let tasksDelete=document.querySelector('.tasksDelete')
  let finishDelete=document.querySelector('.finishDelete')
  console.log(finishDelete)

//   finishDelete.onclick=function(){
//     if(theTasksContainer.contains(document.querySelectorAll('.finished'))){
//         document.querySelector('.finished').remove()
//     }
//   }
//   tasksDelete.onclick=function(){
//     if(document.body.contains(document.querySelectorAll('.task-box')[0])){
//         document.querySelector('.task-box').remove()
//     }
// }