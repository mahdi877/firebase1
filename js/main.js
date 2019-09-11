var makebold = document.getElementById("textarea");

function function1(){
    if (makebold.style.fontWeight=="normal") {
        makebold.style.fontWeight="bold"
    } else {
        makebold.style.fontWeight="normal"
    }
}
function function2(){
    if (makebold.style.fontStyle=="normal") {
        makebold.style.fontStyle="italic"
    } else {
        makebold.style.fontStyle="normal"
    }
}
function function3(){
    if (makebold.style.textDecoration=="none") {
        makebold.style.textDecoration="underline"
    } else {
        makebold.style.textDecoration="none"
    }
}
function changesize(){
    var select = document.getElementById("sel");
    if (select.value=="20") {
        makebold.style.fontSize="20px"
    }
    else if (select.value=="30") {
        makebold.style.fontSize="30px" 
    } 
    else if (select.value=="40") {
        makebold.style.fontSize="40px"
    }
}
/*function changepolice(){
    var select2 = document.getElementById("sel2");
    if (select2.value=="arial1") {
        makebold.style.fontFamily="arial"
    }
    else if (select2.value=="verdana1") {
        makebold.style.fontFamily="verdana" 
    } 
    else if (select2.value=="generva1") {
        makebold.style.fontFamily="generva"
    }
}
var database = firebase.database();
function functionform(){
var name = document.getElementById('exampleInputname').value;
var select = document.getElementById('exampleFormControlSelect').value;
var email = document.getElementById('exampleInputEmail').value;
var number = document.getElementById('exampleInputnumber').value;
savemessage(name,select,email,number);
}
function savemessage()
     // A post entry.
var postData = {
    name: name,
    select: select,
    email: email,    
    number: number,
   
};
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('postData').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/postData/' + newPostKey] = postData;
    updates['/user-posts/' + name + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }}


function writeNewPost(name, select, email, number) {
*/
/*
var messageRef = firebase.database().ref('myDatabase');
function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var select = document.getElementById('select').value;
    var number = document.getElementById('number').value;
    saveMessage(name,email,select,number);
}
document.getElementById('contactForm').addEventListener('submit',submitForm)
function saveMessage(name,select,amail,number){
    var newMessage = messageRef.push();
    newMessageRef.set({
        name: name,
        select: select,
        email: email,
        number: number,
    })
}


*/

function save(){
    var name = document.getElementById('name').value;
    var track = document.getElementById('select').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('number').value;
       
    var data = {
     name: name,
     track:track,
     email:email,
     phone:phone
    }
   
// The key of a root reference is null
var rootRef = firebase.database().ref();
var key = rootRef.key;  // key === null
// Write the new user
var updates = {};
updates['/users/' + key] = data;
return firebase.database().ref().update(updates);
}