$(document).ready(function () {

        $("form").submit(schedule)
    });

function schedule(event) {

    event.preventDefault();

    let day = $("input[type=radio][name=day]:checked").val();

    let outputMessage;

    switch(day){

        case "Monday":

            outputMessage = "Work:\t8:00AM - 4:00PM \nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;

        case "Tuesday":

            outputMessage = "Work:\t7:00AM - 4:00PM \nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;

        case "Wednesday":

            outputMessage = "Work:\t8:30AM - 4:00PM \nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;

        case "Thursday":

            outputMessage = "Work:\t6:00AM - 3:00PM \nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;

        case "Friday":

            outputMessage = "Work:\t9:00AM - 2:00PM \nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;

        case "Saturday":

            outputMessage = "Church:\t8:00AM - 10:00AM\nHomework: 12:00pm-4:00pm\nWorkout:\t4:45pm-6:00pm\nHomework:8:00-10:00pm";
            break;
        case "Sunday":

            outputMessage = "Family Day All Day";
            break;

    }

    $("p#outputMessage").text(outputMessage);

}