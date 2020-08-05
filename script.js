//create outline of calendar in bootstrap
//each row in html is an input type
//when user clicks a time block, 
    //the user is able to type
//addeventListener to save buttons
//function for save buttons 
//when user clicks save button
    //the input stays in the box
    //the background color of the row changes

    //Set Date
    // let moment = $("#date");
    // moment.textContent = moment().format('dddd[,] MMMM Do YYYY');




    //create function to store item in local storage
    $(".saveBtn").click( function() {
        let inputText = $(this).parent().siblings(".inputTag").val();
        let inputTime = $(this).parent().siblings(".inputTag").attr("id")
        console.log(inputText);
        localStorage.setItem(inputTime, JSON.stringify(inputText));

    })

    //retieve from localStoraage for each key
    $('#9am').val(localStorage.getItem('9am'));
    $('#10am').val(localStorage.getItem('10am'));
    $('#11am').val(localStorage.getItem('11am'));
    $('#12pm').val(localStorage.getItem('12pm'));
    $('#1pm').val(localStorage.getItem('1pm'));
    $('#2pm').val(localStorage.getItem('2pm'));
    $('#3pm').val(localStorage.getItem('3pm'));
    $('#4pm').val(localStorage.getItem('4pm'));
    $('#5pm').val(localStorage.getItem('5pm'));

            
        