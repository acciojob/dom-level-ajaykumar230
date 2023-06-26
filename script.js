//your JS code here. If required.

function DomLevel(element){
	const item=document.getElementById("level");
	var level=0;

	while(item.parentNode)
		{
	            item=item.parentNode;
				level++;
		}
	return level;
}
var level=DomLevel('level');
alert('The level of the element is:' + level)