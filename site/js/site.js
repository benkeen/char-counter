$(function() {

	// very sucky, but quick
	var data = [
		{
			title: "\"Out the box\" example",
			content: "<char-counter></char-counter>"
		},
		{
			title: "Setting a default value",
			content: "<char-counter>This has a default value.</char-counter>"
		},
		{
			title: "Linking to your own form field",
			content: "<textarea class=\"form-control\" id=\"customTextarea\"></textarea>\n<char-counter fieldId=\"customTextarea\"></char-counter>"
		},
		{
			title: "Settings a max length",
			content: "<char-counter maxChars=\"10\"></char-counter>"
		},
		{
			title: "Custom counter labels",
			content: "<char-counter label=\"Yegads, you've entered [CHARS] chars!\"></char-counter>"
		},
		{
			title: "Custom Styling",
			content: "<char-counter class=\"customStyle\"></char-counter>\n\n"
				+ "<style type=\"text/css\">\n"
				+ "char-counter.customStyle::shadow textarea {\n"
				+ "   width: 98%;\n"
				+ "   height: 100px;\n"
				+ "   color: red;\n"
				+ "   background-color: #cccccc;\n"
				+ "}\n"
				+ "char-counter.customStyle::shadow div {\n"
				+ "   color: black;\n"
				+ "   font-weight: bold;\n"
				+ "   text-shadow: 1px 1px #999999;\n"
				+ "}\n"
				+ "</style>"
		}
	];


	$(document).on("click", ".viewCode", function(e) {
		e.preventDefault();

		var index = parseInt($(e.target).data("example"), 10) - 1;

		// now open dialog

		$("#modalTitle").html(data[index].title);
		$("#modalContent").html(htmlEntities(data[index].content));

		$("#exampleModal").modal("show");
	});


	function htmlEntities(str) {
		return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
});