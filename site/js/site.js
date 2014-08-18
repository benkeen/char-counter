$(function() {

	var data = [
		{
			title: "\"Out the box\" example",
			content: "<textarea id=\"example1\"></textarea>\n<char-counter target=\"example1\" />"
		},
		{
			title: "Setting a default value",
			content: "<textarea id=\"example2\">This has a default value.</textarea>\n<char-counter target=\"example2\" />"
		},
		{
			title: "Linking to your own form field",
			content: "<input type=\"text\" id=\"example3\" />\n<char-counter target=\"example3\" />"
		},
		{
			title: "Setting a max length",
			content: "<textarea id=\"example4\"></textarea>\n<char-counter target=\"example4\" maxChars=\"10\" />"
		},
		{
			title: "Custom counter labels",
			content: "<textarea id=\"example5\"></textarea>\n<char-counter target=\"example5\" label=\"Yegads, you've entered [CHARS] chars!\" />"
		},
		{
			title: "Custom styling",
			content: "<textarea class=\"form-control\" id=\"example6\"></textarea>\n<char-counter class=\"customStyle\" target=\"example6\" />"
				+ "<style type=\"text/css\">\n"
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
		$("#modalTitle").html(data[index].title);
		$("#modalContent").html(htmlEntities(data[index].content));
		$("#exampleModal").modal("show");
	});


	function htmlEntities(str) {
		return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
});