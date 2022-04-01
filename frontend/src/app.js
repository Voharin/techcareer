 // $("").

//modal active
$(function () {
    $('#btn_giris').click(function () {
      $('#myUye').modal('show')
    })
  
    $('#deneme44').css('color', 'red').css('background', 'black');
  
    function onSubmitFunction(){
      alert("submitted value 44");
    }
  })
  
  //form validation
  $(function () {
    //Submit  Tıklandığında
    $('#btnSubmit').click(function () {
        
      //input içeriği aldım
      let email, password
      email = $('#user_email').val()
      password = $('#user_password').val()
  
      //validation Email
      if (email == '') {
        $('#validation_email').html('email boş geçilemez....')
      } else if (validateEmail(email) == false) {
        $('#validation_email').html('email uygun formatta girmediniz....')
      }else{
          $('#validation_email').html('')
      }
      //validation Password
      if (password == '') {
        $('#validation_password').html('Şifre boş geçilemez....')
      }else{
          $('#validation_password').html('')
      }
  
      function validateEmail(email){
          let regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(email);
      }
  
    })
  })
  
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  var root=document.getElementById("react_root");
//  var template=(
//    <div>
//      <hr />
//      <h2>React DOM</h2>
//      <button className="btn btn-primary " style={{fontSize:"55px"}} >Gönder Dom</button>
//      <hr />
//    </div>
//  );

//  ReactDOM.render(template,root);


//    JS                      React
//   ------                  ---------
//    deneme                  {deneme}
//    onclick="deneme()"      onClick={deneme} 

//    Bootstrap               React
//    ------                  ---------
//    class                   className

//    Css                     React
//    ------                  ---------
//    style                   style={{fontSize:25px;}}


//basket start
var counter=0;
//Artırmak
let counterPlus=function(){
  counter++;
  againCall();
  console.log("Artırıldı")
}

//Azaltmak
let counterMinus=function(){
  counter--;
  againCall();
  console.log("Azaltıldı")
}

//Event
function againCall(){
  var eventTuto=(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8"><p>Adet: {counter}</p></div>
          <div className="col-md-2"> <button onClick={counterPlus} className="btn btn-primary" style={{fontSize:"14px"}} id="plus_id"   >+</button></div>
          <div className="col-md-2"> <button onClick={counterMinus} className="btn btn-danger" style={{fontSize:"14px"}} id="plus_id"   >-</button></div>
        </div>
      </div>
    </div>
  );
  ReactDOM.render(eventTuto,document.getElementById("plus_minus"));
}
againCall();
 
//Timer
function timerClock(){
  var time=(
    <div>
      <p><b>  {new Date().toLocaleTimeString()}  </b></p>
    </div>
  );
  ReactDOM.render(time,document.getElementById("timer_id"));
}
//bir metodu sürekli belirli aralıklarda çağırmak istersek
setInterval(timerClock,1000);