function validateForm(){
    let data = {
        incId: request.body.incId,
        firstName: request.body.fname,
        lastName: request.body.surname,
        location: request.body.location,
        compID: request.body.compid,
        description: request.body.description

    };
    
    for(i=0; i <= data.length[i]; i++){
        if(data[i] == ""){
            alert("Field required");
            return false;
        }
    }
}