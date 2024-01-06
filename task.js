//Task 1 phone number contain 10 digits
var phNumber="8179204988";
var pattern=/\d{10}/g
var result=phNumber.match(pattern);
console.log(result);

//Task2 Password
var password="R@jesh123";
var pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@&$#^])[A-Za-z\d@#$!%^&*]{8,16}/;
var res2=password.match(pattern);
console.log(res2);

//Task3 IP Address

var ipAddress="17.244.209.118";
var pattern=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var res3=ipAddress.match(pattern);
console.log(res3);
