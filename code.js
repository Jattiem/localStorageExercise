// let data = [7, 8, 3, 'Peter', 98.8, true, 'Joel', false];
// let onlyDigits = data.filter( (item)=> {
//     return typeof item === 'number' ? item : null;
// });
// console.log(onlyDigits);
// let onlyString = data.filter( (item)=> {
//     return typeof item === 'string' ? item : null;
// } );
// console.log(onlyString);
// let numbers = [2, 3, 4, 6];
// ** = sqrt()
// let modify = numbers.map( (item)=>{
//     return item ** item;
// } );
// console.log(modify);
// localStorage.removeItem('records');
localStorage.removeItem('record');
let lists = JSON.parse( localStorage.getItem('records')) ?
JSON.parse( localStorage.getItem('records')) : [
    {
        name: 'Lerato',
        surname: 'Tebi',
        age: 39
    }
];
function addData() {
    // e.preventDefault();
    lists.push(
        {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            age: parseInt(document.getElementById('age').value)
        }
    );
    // Save data to a localstorage
    localStorage.setItem('records',JSON.stringify(lists));
};
document.querySelector('#addRecord').addEventListener('click', addData);
// Displaying data
(function loadData() {
    console.table(lists);
})();
//OR
// function loadData(){
//     console.table(lists);
// };
// loadData();
/************************************************************************************ */
document.querySelector('#Add').addEventListener('click',()=>{
    let rcode = document.querySelector('#rgbR').value;
    let gcode = document.querySelector('#rgbG').value;
    let bcode = document.querySelector('#rgbB').value;

    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }
    switch (true) {
        case rcode === '0':
            rcode = '00';
            break;
        case gcode === '0':
            gcode = '00';
            break;
        case bcode === '0':
            bcode = '00';  
            break; 

    }

    let colour = document.querySelector('#color');
    let value = 'rgb(' + rcode + ', ' + gcode + ', ' + bcode + ')';
    document.querySelector('#RGB').value = value; 
    colour.style = `background-color: ${value}`;
});

let results = JSON.parse(localStorage.getItem('record'))?
JSON.parse(localStorage.getItem('record')) : [
    {
        Name: 'Yaseen',
        Color: 'rgb(0, 0, 255)'
    }
];
function AddData(e) {
    e.preventDefault();
    results.push(
        {
            Name: document.getElementById('name2').value,
            Colour: document.getElementById('RGB').value,
        }
    );
    localStorage.setItem('record',JSON.stringify(results));
};
document.querySelector('#Add').addEventListener('click',AddData);
function loadDatA(){
    console.table(results);
}
loadDatA();

document.querySelector('#delete').addEventListener('click',()=>{
    localStorage.removeItem('records');
    alert('Please refresh page to finsh delete process')
})

/************************************************************************************************** */
function calc() 
		{
         var r,g,b,a="";
			var hex = document.mainForm.hex.value;
			if( hex=="" ) hex="000000";
			if( hex.charAt(0)=="#" ) hex=hex.substring(1,hex.length);
			if( hex.length!=6 && hex.length!=8 && hex.length!=3 )
			{
				alert("Please enter 6 digits color code !");
				return;
			}
			if( hex.length==3 )
			{
				r = hex.substring(0,1);
				g = hex.substring(1,2);
				b = hex.substring(2,3);
				r=r+r;
				g=g+g;
				b=b+b;
			}
			else
			{
				r = hex.substring(0,2);
				g = hex.substring(2,4);
				b = hex.substring(4,6);
			}
			if( hex.length==8 )
			{
            a = hex.substring(6,8);
            a = (parseInt(a, 16)/255.0).toFixed(2);
         }
			r = parseInt(r, 16);
			g = parseInt(g, 16);
			b = parseInt(b, 16);
         var css="rgb("+r+", "+g+", "+b+")";
			if( hex.length==8 )
            css="rgba("+r+", "+g+", "+b+", "+a+")";

			document.mainForm.r.value = r;
			document.mainForm.g.value = g;
			document.mainForm.b.value = b;
			document.mainForm.css.value = css;
		 	document.mainForm.color.style.backgroundColor='#'+hex;
		}
/************************************************************************************************* */
