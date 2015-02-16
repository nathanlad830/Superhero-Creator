	var displayText;
	var buttonConfirm = confirm("Do You Want To Make A SuperHero?");
	if (buttonConfirm == true) {
		displayText = "<h3>You pressed OK!</h3><p />";
	} else {
		displayText = "<h3>You pressed Cancel!</h3><p />";
	}

	document.write(displayText);

	if (buttonConfirm == true){
	var username = prompt("What is YOUR name?");
	var superName = prompt("Enter Your Superhero Name Here");
	var hairColour = prompt("What Is Your Superhero's Hair Colour?");
	var age = prompt("What Is Your Superhero's Age?");
	var alterEgo = prompt("What Is Your Alter Ego?");


	var hero = {
		superName  : superName,
		age        : age,
		hairColour : hairColour,
		alterEgo   : alterEgo,
		username   : username
	};

document.write("SuperHero Fact File:");
document.write("<br />");
document.write("Hero's Name: "+hero.superName);
document.write("<br />");
document.write("Hero's Age: "+hero.age);
document.write("<br />");
document.write("Hero's Hair Colour: "+hero.hairColour);
document.write("<br />");
document.write("Hero's Alter Ego: "+hero.alterEgo);
document.write("<p />");
document.write("Made By "+username);
}
