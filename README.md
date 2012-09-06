SelectButtonSet
author: Keith Hamilton
date:   9/5/2012

This is a small javascript module that is used to convert a select DOM element into a radio-style button set.

0. Dependencies
  0.1 jquery (version 1.8.1 used with initial construction of this module)

1. Construction
  1.1 Parameters
  The construction of the object takes three parameters: context, event_trigger, event_target

  context
  The DOM context on which this will operate. the intended structure for the context is as follows:
    <div class='select-button-set'>
      <select class='select-button-set-select'>
        <option class='select-button-set-option' value='SomeValue'>Option1</option>
        <option class='select-button-set-option' value='SomeValue'>Option2</option>
        <option class='select-button-set-option' value='SomeValue'>Option3</option>
        ...
        <option class='select-button-set-option' value='SomeValue'>OptionN</option>
      </select>
    </div>
  
  The context can be passed in either as a jQuery object, or by using the selector with the appropriate . or # prefix
  eg: '#context' is the same as $('#context')
  

  event_trigger (optional)
  A string that will be the event identifier for the event_target. If no value is passed, a default value of 'select-button-set-changed' will be assigned to the event_trigger

  event_target
  The DOM element that will be reacting to the select-button-set. Like the context parameter, this can be passed by jQuery object or a selector string. 
  If no value is passed, a default value of 'document' will be assigned to the event_target so that the global document is targeted.

2. Initialization
  The module object must be initialized via an initialize method when the object is declared.
  eg:
    var mySelectButtonSet = new SelectButtonSet('.select-button-set').initialize();

3. Styling
  The style of the elements can be altered in the css file included in the repo

