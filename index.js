$(function () {
    addNewItem();
    checkOffItem();
    deleteItem();
});

function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        const targetItem = $(this).closest("li");
        targetItem.remove();
    });
}

function checkOffItem() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        const targetItem = $(this).closest("li").find('.shopping-item');
        targetItem.toggleClass('shopping-item__checked');
    });
}

function addNewItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        
        //add new item and clear the text field
        const userTextElement = $(this).find(`#shopping-list-entry`);
        $("ul").append(`<li>
        <span class="shopping-item">${userTextElement.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`);
        userTextElement.val("");
    });
}