# jquery.uniqueSelect
Enforces unique item selections across linked [same content] select drop-downs with jQuery. Disables the cooresponding option elements across a set of select components. 
- Each `<option>` element in set needs an id or name attribute.
- Link the `<select>`s with a meaningful class name.

Init Example:

For a set of elements such as `<select class='uniqueA'>`

`$('.uniqueA').uniqueOptions();`

