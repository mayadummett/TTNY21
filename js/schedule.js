/* 
DAY 1
------------
(Category Initial) Title     Time
                Description 
*/

const day1 = [
	{
		
		"Time": "6:00 PM",
		"Category": "Universal",
		"Title": "Opening Ceremony",
		"Host": "TTNY team",
		"Description": ""
	}
]

const day2 = [
	{
		"Time": "11:30 AM",
		"Category": "Workshop",
		"Level": "1",
		"Title": "Introduction to HTML & CSS",
		"Host": "S",
		"Description": "During this workshop, hackers will use CodPen to create a simple \"portfolio\" website using HTML and CSS. Hackers will finish off by creating a GitHub repository and uploading their code to the repo."
	},
	{
		"Time": "12:30 PM",
		"Category": "Activity",
		"Title": "Meal Break!",
		"Host": "TTNY team",
		"Description": ""
	}
]

const day3 = [
	{
		"Time": "2:00 PM",
		"Category": "Universal",
		"Title": "Hacking Ends",
		"Host": "TTNY team",
		"Description": "",
		"GCal_Event": ""
	},
	{
		"Time": "2:00 PM",
		"Category": "Universal",
		"Title": "Judging Starts",
		"Host": "TTNY team",
		"Description": ""
	},
	{
		"Time": "5:00 PM",
		"Category": "Universal",
		"Title": "Closing Ceremony",
		"Host": "TTNY team",
		"Description": ""
	}
]

document.getElementById('1').onclick = () => {fillData(day1)}
document.getElementById('2').onclick = () => {fillData(day2)}
document.getElementById('3').onclick = () => {fillData(day3)}

function fillData(data){
    document.getElementById('day').innerHTML = `
        ${data.map(sched_template).join('')}
        <h5 style="font-size: 0.9rem;">Check back soon for updates.</h5>
    `
}

function sched_template(day_data){
    return `
    <div class="event">
        <span id="category" class="circle fs-3"> ${day_data.Category.charAt(0)} </span>

        <h4 class="fs-4 text-primary">
            <span style="font-weight: bold;"> ${day_data.Title} </span>
            <span class="fs-6" style="font-weight: bold; float:right">${day_data.Time}</span> 
            <br>
            <span class="fs-6" style="color: #888;"> Hosted by ${day_data.Host} </span>
        </h4>

        <p>${day_data.Description}</p>
    </div>
    `
}

{/* 
<span id="category" class="circle">${day_data.Category.charAt(0)}</span>
<span onclick ="${day_data.Category.charAt(0)}"></span>

document.getElementById('box').innerHTML = `
<span onclick ="${category_color('g')}">b</span>
`

${
    document.getElementById('category').innerHTML = `
        <span onclick ="${category_color(day_data.Category.charAt(0))}"> ${day_data.Category.charAt(0)} </span>
    `
}
*/}

function category_color(char){
    if(char === 'U'){ document.getElementById("category").style.backgroundColor='blue' }
    if(char === 'A'){ document.getElementById("category").style.backgroundColor='green' }
    if(char === 'W'){ document.getElementById("category").style.backgroundColor='red' }
}
