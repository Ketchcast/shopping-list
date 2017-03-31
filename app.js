//// We need to find a way for the buttons to delete once the user clicks that button
/// We need to find a way to link the form to the different boxes so that words the user enters can go in the boxes
/// Find a way to replace the box once it's been deleted.
/// Need to start off with a single array and a single object. 
/// Add functions that modify state. 
/// render the items
/// Make event listeners

// make a delete function

// var state = {
// 	items: []
// };

// var addToList = function(state, item) {
// 	state.items.push(item);
// }

//addToList(state, userInput)

// event listener on our form (submit)
	// extract the value from our input
	// invoke out addToList with that value
 
 var template = 
 	`<li>
        <span class="shopping-item"></span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`


$("#js-shopping-list-form").on('submit', function(event){
	event.preventDefault()
	var userInput = $("#shopping-list-entry").val()
	var toAppend = $(template)
	toAppend.find(".shopping-item").text(userInput)
	$(".shopping-list").append(toAppend)

	$("#shopping-list-entry").val('')
});

$(".shopping-list").on('click', '.shopping-item-delete', function(event){
	event.preventDefault();
	$(this).closest("li").remove()
	console.log('deleted')
})
//toggle class

$(".shopping-list").on('click', '.shopping-item-toggle', function (event) {
	event.preventDefault()

	$(this).closest('li').find(".shopping-item").toggleClass('shopping-item__checked')
})



