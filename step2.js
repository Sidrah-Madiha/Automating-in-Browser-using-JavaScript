let autoObject = new function () //any function can become a constructor instance using the new keyword
{
    this.toggleAll = function () {
        document.querySelector("#toggle-all").click()
    }

    this.selectItemX = function (x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
    }

    this.deleteItemX = function (x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
    }

    this.selectAllFilter = function () {
        // document.querySelector("ul.filters > li:nth-child(1) > a").click()

        location.hash = '/'
    }

    this.selectActiveFilter = function () {
        location.hash = '/active'
    }

    this.selectCompletedFilter = function () {
        location.hash = '/completed'
    }

    this.addToDoItem = function (valuetodo) {
        document.querySelector("input.new-todo").value = valuetodo;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change', {
            'bubbles': true
        }));
    }

    this.ammendToDoItem = function (valuetodo, x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") label").dispatchEvent(new Event('dblclick', {
            'bubbles': true
        }));
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = valuetodo;
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));
    }

    this.toggleAllItem = function () {
        toggles = document.querySelectorAll("ul.todo-list input.toggle")
        for (let i = 0; i < toggles.length; i++) {
            document.querySelectorAll("ul.todo-list input.toggle")[i].click();
        }
    }

}
