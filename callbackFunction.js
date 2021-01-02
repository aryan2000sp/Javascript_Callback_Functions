/*
	A callback function is function in which 
	another function is passed in as parameter.
	Bacsically the callback fuctions are function
	which used and defined at the time when they are
	passed in as parameter into another fuctions.
*/

//--------------------------------------------------
/*
	Example 1
*/
//--------------------------------------------------
var button=document.getElementById('btn');

/*
	This will a event to the button
	like click and will perform the 
	following action that is passed 
	in.

	NOTE:-
	A function ()=> is passed in as parameter
	and definen at same time. The function ()=>
	just prints message on the console.
*/
button.addEventListener('click', ()=>{
	console.log('button was clicked');
});

//--------------------------------------------------
/*
	Example 2
*/
//--------------------------------------------------

/*
	In this example we will use multiple callbacks
*/
var students=[
{name:'Aryan', score:100, place:'North'},
{name:'Jack', score:40, place:'South'},
{name:'Nicole', score:70, place:'West'},
{name:'Ram', score:10, place:'East'},
{name:'Shaam', score:80, place:'East'},
{name:'Some I dont care', score:0, place:'South'},
{name:'My crush', score:110, place:'North'},
];


