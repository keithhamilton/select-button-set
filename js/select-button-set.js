var SelectButtonSet = function SelectButtonSet(context, event_trigger)
{
    this.$context,
    this.targets = [],
    this.$buttons,
    this.event_trigger = (typeof event_trigger !== 'undefined') ? event_trigger : 'select-button-set-changed';
    this._initialize(context);
};

SelectButtonSet.prototype._initialize = function(context){
	try
	{
		context.attr('class');
	}
	catch(err)
	{
		$context = $(context)
	}

	var buttons = $context.find('.select-button-set-option'); 

	this._drawButtons(buttons);

};

SelectButtonSet.prototype._drawButtons = function (buttons)
{
    $context.find('.select-button-set-select').hide();
    for (var i=0;i<buttons.length;i++)
    {
        $button = $("<div class='select-button-set-button'></div>");
        if($(buttons[i]).hasClass('select-button-set-option-default')){
            $button.addClass('select-button-set-button-selected');
        }
        $button.attr('value',$(buttons[i]).val())
                .text($(buttons[i]).text());
        if(i==0){
            $button.addClass('select-button-set-button-first');
        }
        else if (i==buttons.length-1)
        {
            $button.addClass('select-button-set-button-last');
        }
        $context.append($button);
        $button.click($.proxy(this._onButtonClick, this));
    }
};

SelectButtonSet.prototype._onButtonClick = function (event) {
    $('.select-button-set-button-selected').removeClass('select-button-set-button-selected');
    $(event.target).addClass('select-button-set-button-selected');
    for (var i = 0; i < this.targets.length; i++) {
        $(this.targets[i]).trigger(this.event_trigger, { value: $(event.target).val() });
    }
};


SelectButtonSet.prototype.addSubscriber = function (subscriber) {
    var selector,
        self = this;
    try {
        selector = subscriber.attr('class')!=null ? '.'+subscriber.attr('class') : '#'+subscriber.attr('id');
        
    }
    catch (err) {
        selector = subscriber;
    }

    self.targets.push(selector);
};

SelectButtonSet.prototype.removeSubscriber = function (subscriber) {
    var selector;
    
    try {
        selector = subscriber.attr('class') != null ? '.'+subscriber.attr('class') : '#'+subscriber.attr('id');
    }
    catch (err) {
        selector = subscriber;
    }

    var i = this.targets.indexOf(selector);
    if (i != -1) {
        this.targets.splice(i, 1);
    }
};