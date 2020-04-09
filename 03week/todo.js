console.log("DOM TEST");

// when the add button gets clicked
// append the text to the buttom of the list
// add a new list
//

// when a delete button gets clicked
// delete it's parent list item

// when the span is clicked
// class done should be added to it

let allSpans = document.querySelectorAll("span");
for (let i = 0; i < allSpans.length; i++) {
  let span = allSpans[i];
  //   console.log("The Span", span);
}

setUpSpanEvent(span) {
    span.addEventListener("click", function() {
        console.log("This span got clicked", span);
        span.classList.toggle("done");
      });
}

// let input = document.getEle;
