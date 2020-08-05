//create outline of calendar in bootstrap
//each row in html is an input type
//when user clicks a time block, 
    //the user is able to type
//addeventListener to save buttons
//function for save buttons 
//when user clicks save button
    //the input stays in the box
    //the background color of the row changes



    $(".saveBtn").click( function() {
        let inputText = $(this).parent().siblings(".inputTag").val();
        let inputTime = $(this).parent().siblings(".inputTag").attr("id")
        console.log(inputText);
        localStorage.setItem(inputTime, JSON.stringify(inputText));

    })

    //   //this is whatever is clicked
    // //localStorage.getItem
    function retrieveItems(){
        getNine();
    }
         //localStorage.getItem($("#9am").val());
    window.localStorage.getItem('#9am');
          $('#9am').text= function() {
              localStorage.key("9am").val()
          }

        
    let getTen = window.localStorage.getItem('#10am');
    let getEleven = window.localStorage.getItem('#11am');
    let getTwelve = window.localStorage.getItem('#12pm');
    let getOne = window.localStorage.getItem('#1pm');
    let getTwo = window.localStorage.getItem('#2pm');
    let getThree = window.localStorage.getItem('#3pm');
    let getFour = window.localStorage.getItem('#4pm');
    let getFive = window.localStorage.getItem('#5pm');



    //     localStorage.getItem(get10).val();
    //     localStorage.getItem(get11).val();
    //     localStorage.getItem(get12).val();
    //     localStorage.getItem(get1).val();
    //     localStorage.getItem(get2).val();
    //     localStorage.getItem(get3).val();
    //     localStorage.getItem(get4).val();
    //     localStorage.getItem(get5).val();
    //     }
    
    //     retrieveItems().style.display = "block"; 