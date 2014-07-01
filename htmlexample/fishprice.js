var completetotal=0;
var completequantity=0;
var discountgiven = 0; 
$(document).ready(function(){
$(".button").click(function(){
var quantity;
var total;
var id = this.id;
if (id == "Gold"){
	quantity = $("#goldquan").val();
	$("#goldquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = .99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Gold fish</b></td><td align="center">$.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Angel"){
	quantity = $("#angelquan").val();
	$("#angelquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 15*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Angel Fish</b></td><td align="center">$15.00</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Piranha"){
	quantity = $("#piranhaquan").val();
	$("#piranhaquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 27.99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Pirhana</b></td><td align="center">$27.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Eel"){
	quantity = $("#eelquan").val();
	$("#eelquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 14.99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Spiney Eel</b></td><td align="center">$14.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Clown"){
	quantity = $("#loachquan").val();
	$("#loachquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 9.99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Clown Loach</b></td><td align="center">$9.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Mollie"){
	quantity = $("#molliequan").val();
	$("#molliequan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 2.99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Mollie</b></td><td align="center">$2.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
if (id == "Guppy"){
	quantity = $("#guppyquan").val();
	$("#guppyquan").val("");
	if(quantity > 0 && quantity < 1000){
	total = 1.99*quantity;
	total = Math.round(total*100)/100;
	completetotal=completetotal+total;
	completequantity = completequantity+parseInt(quantity);
	$('<tr><td align="center"><b>Guppy</b></td><td align="center">$1.99</td><td align="center">'+quantity+'</td><td align="center">$'+total+'</td>').insertAfter('#first');
}else
alert("invalid quantity");
}
var tenpercent = completetotal*.10;
if(completequantity >= 10 && discountgiven == 0){
completetotal = completetotal - tenpercent;
completetotal = Math.round(completetotal*100)/100;
discountgiven = 1;
var display = document.getElementById("discount");
	display.innerHTML = "Enjoy our 10% discount for buying over 10 fish!";
}
completetotal = Math.round(completetotal*100)/100;
if(completetotal > 0){
var display = document.getElementById("empty");
	display.innerHTML = "";
var display1 = document.getElementById("completetotal");
	display1.innerHTML = "$"+completetotal;
	}
});

});
