//back-end
function Food(id,name,quantity,unitPrice,totalPrice){
    this.foodId=id;
    this.foodName=name;
    this .foodQuantity=quantity;
    this.foodUnitPrice=unitPrice;
    this.foodTotalPrice=totalPrice;
}
var prices=[0,600,800,900,150,800,100,150];
var totals=0;
var time;
var customerName;
var phone;
//front-end
$(document).ready(function(){
    $("#show-order").hide();
    $("#order").click(function(){ 
        $("#menu").hide();
        $("#show-order").show();           
        customerName=$("#name").val();
        $("#customer-name").append(customerName);
        phone=$("#number").val();
        $("#phone-number").append(phone);
        time=$("#order-time").val();                       
        $("#time").append(time);             
        for(var i=1; i<10; i++){               
            if($("#food-"+i).prop("checked")==true){
                if($("#quantity-"+i).val()>0){
                    var id = i;                
                    var name = $("#food-"+i+":checked").val();               
                    var quantity = $("#quantity-"+i).val();                    
                    var unitPrice = prices[i];                                          
                    var totalPrice = unitPrice*quantity;  
                    totals = totals + totalPrice;                                                      
                    var newFood= new Food(id,name,quantity,unitPrice,totalPrice);
                    $("#foods").append(newFood.foodName+"<br>");              
                    $("#quantity").append(newFood.foodQuantity+"<br>");                
                    $("#cost").append(newFood.foodTotalPrice+"<br>"); 
                    $("#total").html("");                         
                    $("#total").append(totals);                       
                }
                else{
                    alert("Foods of quantity less than 0 are not ordered!!!!!!");
                }                                                                         
            }                                                  
        }                                                                                             
    });
});
