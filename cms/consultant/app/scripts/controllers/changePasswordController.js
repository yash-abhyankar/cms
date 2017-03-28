angular.module('sbAdminApp')
.controller('changePasswordController', function ($scope) {

    
   

});

function validate() {
    var newPw = document.getElementById("newPassword").value;
    var confirmPw = document.getElementById("confirmPassword").value;
    if (newPw != confirmPw) {
        document.getElementById("msg").innerHTML = "Passwords don't match";
        return false;
    } else {
        
        document.getElementById("msg").innerHTML = "";
        document.location.replace("#!/dashboard/home");
        return true;
    }
}