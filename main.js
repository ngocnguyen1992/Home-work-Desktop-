       var  kq=document.getElementById("kq");
        var input = document.getElementsByTagName("input")
        function tinhluong(){
             input[3].value = parseInt (input[0].value) * parseInt (input[1].value);
            }
            //bài 2
        var result=document.getElementById("result");
        var number = document.getElementsByClassName("number");
        var average  = 0;
        function avg (){
            for(var i = 0; i < number.length; i++ ){
                average  += parseInt(number[i].value);
            }
            result.value = average  / number.length;
        }
 //event
    let btn = document.querySelectorAll('.button');
    let box = document.querySelectorAll('.content');

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", turnLight);
    }
    function turnLight(e) {
      for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('active');
      }
      e.target.classList.add('active');
      for (let i = 0; i < box.length; i++) {
        box[i].classList.remove('show');
      }
      var dataTab = e.target.getAttribute('data-tab');

      var tabToActive = document.querySelector(`div[data-tabId="${dataTab}"]`);

      tabToActive.classList.add('show');
    //   console.log('show')
    }
    //bài 2
    var result=document.getElementById("result");
            var number = document.getElementsByClassName("number");
            var average  = 0;
             
            function avg (){
                for(var i = 0; i < number.length; i++ ){
                    average  += parseInt(number[i].value);
                }
                result.value = average  / number.length;
            }
    // bài 3
    var kq=document.getElementById("kq");
    var usd2 = document.getElementById("usd");
    var vnd = new Intl.NumberFormat('vn-VN').format(23500);
    var n = 0
    // var 
    function result(){
        // document.getElementById("kq").value = vnd
            //  input[2].value = parseFloat(input[0].value) * vnd;
            n = parseFloat(usd2.value) * vnd;
            kq.value = `${n}`;
    }
    //bài 4
    var a = document.getElementById("witdh"),
    b = document.getElementById("height"),
    kq = document.getElementById("kq"),
    n = 0,
    u = 0;       
    function result (){
        n= parseFloat(a.value) * parseFloat(b.value);
        u= (parseFloat (a.value)+parseFloat(a.value))*2;
        kq.value=`\n Diện tích : ${n}; \n Chu Vi : ${u};`;
    }
