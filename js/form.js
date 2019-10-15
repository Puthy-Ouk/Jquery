$(document).ready(function(){
    $('button').on('click',function(){
        let user = $('#name').val();
        let pass = $('#pass').val();
       
         userEmpty(user);
         passEmpty(pass);
        

        
    })
});
function setSuccess(success){
    $(success).addClass("border-success");
    $(success).removeClass("border-danger");
};

function setError(error){
    $(error).addClass("border-danger");
    $(error).removeClass("border-success");
};

function userEmpty(us){
    if(us != ""){
        setSuccess('#name');
    }else{
        setError('#name');
    }

};
function passEmpty(pa){
    if(pa != ""){
        setSuccess('#pass');
    }else{
        setError('#pass');
    }
 
}