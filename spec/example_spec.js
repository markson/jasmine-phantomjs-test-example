describe("Click button", function() {
  it ("should be become 3", function() {
	  var i = 0;
	  var button_element = $('#button');
	  console.log(button_element.text());
	  while(i < 100) {
		  button_element[0].click();
	  console.log($('#counter').text());
		i ++;
	  }
	  console.log($('#counter').text());
    expect($('#counter').text()).toEqual('3');
  });

});
