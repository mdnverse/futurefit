var vision = 1
var speed = 1
var agility = 1
var experience = 1


function result() {
    return (experience == 0 ? '0' : Math.ceil((vision*speed*agility)/experience))
}

function onlyOne(checkbox) {
    let nameUsed = checkbox.name
    let idUsed = checkbox.id 

    var checkboxes = document.getElementsByName(nameUsed)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

    if ( idUsed.includes("vision") ){
        vision = (checkbox.id).slice(-1)
    }
    else if ( idUsed.includes("speed") ){
        speed = (checkbox.id).slice(-1)
    }
    else if ( idUsed.includes("agility") ){
        agility = (checkbox.id).slice(-1)
    }
    else if ( idUsed.includes("experience") ){
        experience = (checkbox.id).slice(-1)
    }


    console.log(checkbox.id)
    
}

function getValue() {
    var checkboxes = 
        document.getElementsByName('laptop');

    var result = "";

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value 
                + " " + " Laptop, ";
        }
    }
    document.write("<p> You have selected : "
            + result + "</p>");
}


function createResults() {

    document.getElementById('txt-results').textContent = result() + ' point' + (result()>1 ? 's' : '')


}