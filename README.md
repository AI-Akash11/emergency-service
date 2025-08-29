Ques-1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById, getElementsByClassName, and querySelector / querySelectorAll are all methods to get element/elements from the Document Object Model in Javascript. 
      If we want to use a element by the name of its id we can use the getElementById method but if we need multiple elements then we can use getElementsByClassName method.
      similarly querySelector method will give us the first element with matching directoty whereas QuerySelectorAll will give us every elements that matches with given directory.

Ques-2 : How do you create and insert a new element into the DOM?
Ans : first we create an element like this,
            const p = document.createElement("p");
      then we can set attribute to the element or add content like this,
            p.innerText = "paragraph";
      then finally we can insert it into the DOM
            document.body.appendChild("p");

Ques-3 : What is Event Bubbling and how does it work?
Ans : when a event is triggered it traverse through the child and parents of the DOM like flowing bubbles form child to parent then to their parent and so on and this situation is basically called event bubbling.

Ques-4 : What is Event Delegation in JavaScript? Why is it useful?
Ans : event delegation is when we add an event listener to the parent element instead of each child element and use target to get the correct child.

Ques-5 : What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() prevents the default actions like refreshing the page after clicking on the submit button of a form whereas stopPropagation() makes the event to stop traversing further up or down in the DOM.
