//push form to fire base
//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD2PObq6j8Nu7-OL3W8DBYFk9goBhlcfRg",
  authDomain: "nullphotos-d4483.firebaseapp.com",
  databaseURL: "https://nullphotos-d4483-default-rtdb.firebaseio.com",
  projectId: "nullphotos-d4483",
  storageBucket: "nullphotos-d4483.appspot.com",
  messagingSenderId: "325271074794",
  appId: "1:325271074794:web:dfeec68001e4c995366493",
  measurementId: "G-6R8T1J258J"
};

//initialized database
firebase.initializeApp(firebaseConfig);

//reference database
let messageRef = firebase.database().ref('NullPhotos form');

const form = document.getElementById('contact-form');

form.addEventListener('submit', submitForm);

function submitForm(e){
e.preventDefault();

let fullName = formValues('con-fullname'),
    email = formValues('con-email'),
    message = formValues('message');

    saveMessage(fullName, email, message);

    //success alert
    document.querySelector('.message-alert').style.display = 'block';

    //remove alert after 3s
    setTimeout(() => {
      document.querySelector('.message-alert').style.display = 'none';
    }, 3000)

    //reset form
    form.reset();

};

//getform values
function formValues(id){
return document.getElementById(id).value;
}

function saveMessage(fullName, email, message){
let newMessage = messageRef.push();

newMessage.set({
  fullName: fullName,
  email: email,
  message: message
})
}