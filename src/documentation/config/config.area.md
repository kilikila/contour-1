#### **area** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

To override any of the default configuration options in an area chart, include the `area` configuration object in the configuration options that you pass to your Contour constructor.

**Example:**

	new Contour({
	    el: '.myAreaChart',
	    area: {
	      // area-specific configuration options
	    }
	  })
	.cartesian()
	.area(data)
	.render()	

*[Try it.](<%= jsFiddleLink %>)*

<% if(notes) { %><%= notes %><% } %>

