
wait = 1000

delay = (d, f) -> Meteor.setTimeout f, d

Template.progress.helpers

	classes: -> @color ? ''


Template.progress.rendered = ->
	bar = @$ '.bar'
	@autorun =>
		data = Template.currentData()
		xoffset = -100 + (data?.progress ? 0) * 100
		prefixes = [
			'-webkit-'
			'-moz-'
			'-ms-'
			'-o-'
			''
			].map (p) -> p + "transform: translate3d(#{xoffset}%,0,0)"
		style = prefixes.join ';'
		delay data?.delay ? wait, -> bar.attr 'style', style
