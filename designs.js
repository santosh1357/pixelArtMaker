// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
let submit = $('#sizePicker');
let table = $('#pixelCanvas');

//function to build table
function buildTable(){
	//select all direct childern of id pixelCanvas and remove them
	$("#pixelCanvas > tr").remove(); 
	let rows = $('#inputHeight').val();
	let cols = $('#inputWeight').val();
	let color = $('#colorPicker').val();
	for(var i = 0;i<rows;i++){
		table.append("<tr id='row'></tr>");
	}
	//selecting each child(tr) of table and then add td on them
	table.find('tr').each(function(){
		for(var j = 0;j<cols;j++){
			$( this ).append("<td></td>");
		}
	});
	//creating event listeners and changing background of cells in table
	table.find('tr').on('click', 'td', function(event){
		let currentColor = $( event.target ).css("background-color");
		console.log(currentColor);
		if( currentColor === 'rgba(0, 0, 0, 0)'){
			$( event.target ).css("background-color", color);
		} else{
			$( event.target ).css("background-color", "rgba(0, 0, 0, 0)");
		}		
	});


	return false; //call back fun for submit button on type input should return false.
}

//attaching the function with submit button

submit.on('submit', buildTable);


}




makeGrid();
