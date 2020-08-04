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
        console.log(inputTime);
        localStorage.setItem(inputTime, JSON.stringify(inputText));

    })

    //   //this is whatever is clicked
    // //localStorage.getItem
    // function retrieveItems(){
    //     //$(#9am).val() or =
    //     let get9 = $("#9am");
    //     let get10 = $("#10am");
    //     let get11 = $("#11am");
    //     let get12 = $("#12pm");
    //     let get1 = $("#1pm");
    //     let get2 = $("#2pm");
    //     let get3 = $("#3pm");
    //     let get4 = $("#4pm");
    //     let get5 = $("#5pm");
    
    //     localStorage.getItem(get9).val();
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