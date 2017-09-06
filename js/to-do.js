$(document).ready(function(){});

var userInput;
var userInputPriority;
var toDoItemNum = 0;

//initial focus on entry box
$('#additemtext').focus();

//clears user entered/default values
var clearInput = function(){
	$('#additemtext').val("");
	$('#priority option:selected').text("Choose Priority");
	$('#additemtext').focus();
}

//adds item 
var addItem = function(){
	userInput = $('#additemtext').val();
	userInputPriority = $('#priority option:selected').text();
	
	if(userInput!==""){
		if(userInputPriority!=="Choose Priority"){
		$('#toDoBox').append('<div class="itemBoxes" id="item' + toDoItemNum + '"></div>');
		$('#item' + toDoItemNum).append('<input type="checkbox" name="completedYn" class="tdcheckbox" class="toDoItemCols" id="check' + toDoItemNum+ '">');
		$('#item' + toDoItemNum).append('<div class="tdtext" class="toDoItemCols" >' + userInput + '</div>');
		$('#item' + toDoItemNum).append('<div class="tdpriority" class="toDoItemCols" >' + userInputPriority + '</div>');
		toDoItemNum++;
		clearInput();
		} else {
			alert("Choose a priority, yo!");
	}
	} else {
		alert("Write something, doofus!");
	}	
}

//adds item by clicking on button
$('#addItemButton').on('click',function(){
	addItem();
});

//adds item by clicking enter
$("#addItem").keypress(function(event) {
    if (event.which == 13) {
      addItem();
    }
});

//checking box adds to completed list.  Unchecking adds back to to-do
$('div').on('click',function(event){
	if(event.target.checked){
		$('#completedBox').append(event.target.parentNode);
	} else if(!event.target.checked){
		$('#toDoBox').append(event.target.parentNode);
	} else if(event.target.checked===null){};
});
