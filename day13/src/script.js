const users=[{
	name:"Conan Edogawa",
	avatar:"https://i.pinimg.com/736x/44/d4/47/44d4476aa7055e1abaf575ab0e805de1.jpg",
	color:"#b50707",
	
	
},
			{
				name:"Kogoro Mouri",
	avatar:"https://i1-c.pinimg.com/1200x/d5/81/94/d58194af4ad7ecadff187ab38ee73155.jpg",
	color:"#3c0777",
	
	
},
	
				{	name:"Ran Mouri",
	avatar:"https://i.pinimg.com/736x/c9/9e/8d/c99e8da2cf9f88530791033d6f862a54.jpg",
	color:"#dd9bca",
	
	
},
	{
						name:"Haibara Ai",
	avatar:"https://i1-c.pinimg.com/1200x/dd/c5/46/ddc5467cf56441edf937a3c715f596dc.jpg",
	color:"#a863df",
	
	
},
	
	
	];

const boxes=document.querySelectorAll(".box");
const root =document.documentElement;
const xBtn=document.querySelector( ".x-btn");
const contactScreen=document.querySelector(".contact");
			
const contactbtn= document.querySelectorAll(".contact-btn")

const username=document.querySelector(".contact .name");

 const avatarImg = document.querySelector(".contact .avatar");

			
for (let i =0; i<boxes.length;i++){
	console.log(i);
	boxes[i].style.backgroundImage=`url("${users[i].avatar}")`;
	contactbtn[i].addEventListener("click",()=>{
		username.textContent=users[i].name;
		avatarImg.style.backgroundImage=`url("${users[i].avatar}")`;
		root.style.setProperty("--user-color",users[i].color);
		contactScreen.classList.toggle("active");
		
	
	});
	
}

xBtn.addEventListener("click", () => {contactScreen.classList.toggle("active");
avatarImg.style.backgroundImage = 'none';
 });
