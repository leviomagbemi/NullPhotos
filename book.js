//Booking form variables
const bookingForm = document.getElementById('book-form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const service = document.querySelector('#service');
let amount = document.querySelector('#amount');
const date = document.getElementById('date');
const time = document.getElementById('time');

//alert variables
const excludeSunday = document.querySelector('.booking-alert');
const successAlert = document.querySelector('.booking-alert2');
const failedAlert = document.querySelector('.booking-alert3');

//eventListener
bookingForm.addEventListener('submit', bookWithPaystack);

//change price automatically on click
service.addEventListener('click', getPrice);

function getPrice(e) {
  setInterval(() => {
    if (e.target.value === 'adult session') {
      amount.value = 50000;
    } else if (e.target.value === 'infant session') {
      amount.value = 70000;
    } else if (e.target.value === 'family session') {
      amount.value = 100000;
    } else if (e.target.value === 'maternity session') {
      amount.value = 80000;
    }
  }, 1000);
}


//booking function
function bookWithPaystack(e){
  //exclude sundays from working days
  let daysofweek = new Date(date.value).getDay();

  if(daysofweek == 0){
    excludeSunday.style.display = 'block';
    setTimeout(() => {
      excludeSunday.style.display = 'none';
    },3000)
  } else {
    //paystack integration
    var handler = PaystackPop.setup({
      key: 'pk_test_5f06174b495d0b8ad8350c91903e47319621ccf3',
      email: email.value,
      amount: amount.value * 100,
      currency: 'NGN',
  
      "metadata":{
        "custom_fields":[
          {
            "display_name":"Service",
            "variable_name":"service",
            "value":service.value
          },
          {
            "display_name":"Date",
            "variable_name":"date",
            "value":date.value
          },
          {
            "display_name":"Time",
            "variable_name":"time",
            "value":time.value
          }
        ]
      }, 
      callback: function(response) {
        //sucess response
        let reference = response.reference;
       successAlert.innerHTML = `<p>'Payment complete! Reference: ${reference} <br>
        Thank you for booking with us </p>`;

        successAlert.style.display = 'block'; 
        successAlert.style.backgroundColor = '#05b330';    
        setTimeout(() => {
        successAlert.style.display = 'none';
        },4000)
      },
      onClose: function() {
         //faile response
        failedAlert.style.display = 'block'; 
        failedAlert.style.backgroundColor = '#b30505';    
        setTimeout(() => {
        failedAlert.style.display = 'none';
        },4000);
      },
    });
    handler.openIframe();
    
    //reset form after submiting
    bookingForm.reset(); 
  }
  
  e.preventDefault();
}
