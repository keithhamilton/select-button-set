var SelectButtonSet = function SelectButtonSet(context, event_trigger, event_target)
{
    var $context = context,
     	event_trigger = (typeof event_trigger !== 'undefined') ? event_trigger : 'select-button-set-changed',
        $target = (typeof event_target !== 'undefined') ? event_target : 'document',
        $buttons;

	function _initialize()
	{
		try
		{
			context.attr('class');
		}
		catch(err)
		{
			$context = $(context)
		}

		try
		{
			target.attr('class');
		}
		catch(err)
		{
			$target = $(target);
		}

		if(!$context[0])
		{
			return;
		}

		var buttons = $context.find('.select-button-set-option'); 

		_drawButtons(buttons);

	};

	function _drawButtons(buttons)
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
			$button.click(_onButtonClick);
		}

        

	}

	function _onButtonClick(){
		$('.select-button-set-button-selected').removeClass('select-button-set-button-selected');
		$(this).addClass('select-button-set-button-selected');
		$target.trigger(event_trigger,{value: $(this).val()});
	}

	return{
		initialize: _initialize
	};

}