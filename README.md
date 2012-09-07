`SelectButtonSet`
==

This is a small javascript module that is used to convert a select DOM element into a radio-style button set.

##`0. Dependencies`
### 0.1 jquery (version 1.8.1 used with initial construction of this module)

##`1. Construction`
### 1.1 Parameters
The construction of the object takes three parameters: context, event_trigger, event_target

### context
The DOM context on which this will operate. the intended structure for the context is as follows:
```html
<div class='select-button-set'>
  <select class='select-button-set-select'>
    <option class='select-button-set-option' value='SomeValue'>Option1</option>
    <option class='select-button-set-option' value='SomeValue'>Option2</option>
    <option class='select-button-set-option' value='SomeValue'>Option3</option>
    ...
    <option class='select-button-set-option' value='SomeValue'>OptionN</option>
  </select>
</div>
```

The context can be passed in either as a jQuery object, or by using the selector with the appropriate . or # prefix
eg:
```javascript
  var mySelectButtonSet = new SelectButtonSet('.select-button-set').initialize();
```
is the same as:
```javascript
  var mySelectButtonSet = new SelectButtonSet($('.select-button-set')).initialize();
```

### event_trigger (optional)
A string that will be the event identifier for the event_target. If no value is passed, a default value of 'select-button-set-changed' will be assigned to the event_trigger

##`2. Subscribing`
To register a subscriber to the button set, use the addSubscriber method, passing in a jQuery object or a selector:
```javascript
mySelectButtonSet.addSubscriber('#newSubscriber');
```

##`3. Unsubscribing`
To unsubscribe an element from the button set, use the removeSubscriber method, passing in a jQuery object or a selector:
```javascript
mySelectButtonSet.removeSubscriber('#newSubscriber');
```

##`4. Styling`
The style of the elements can be altered in the css file included in the repo

