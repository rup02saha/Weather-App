// https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=953596fd7a5659deee301decd4ec884f&units=metric
 
 

 let weather ={

	"apikey" : "953596fd7a5659deee301decd4ec884f",
	fetchWeather : function(city) {
		fetch(
		 "https://api.openweathermap.org/data/2.5/weather?q="
		 +city
		 +"&appid=953596fd7a5659deee301decd4ec884f&units=metric"
			) .then((response)=> response.json() )
		   .then((data) => this.displayWeather(data));

      },
     
     displayWeather : function(data)
     {
     	const{name} = data;
     	const{icon,description}= data.weather[0];
     	const{temp,humidity}= data.main;
     	const{speed}=data.wind;
     	console.log(name,icon,description,temp,humidity,speed);

     	document.querySelector(".city").innerText = "Weather in "  + name;
     	document.querySelector(".icon").src = "http://openweathermap.org/img/w/"+ icon  +".png";
     	document.querySelector(".description").innerText = description;
     	document.querySelector(".temp").innerText = temp + "°C ";
     	document.querySelector(".humidity").innerText = " humidity :"  + humidity + " %";
     	document.querySelector(".wind").innerText = " wind :"+ speed + " km/hr";
     	document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
      document.querySelector(".search-box").value="";
      },

       search:function(){
     	this.fetchWeather(document.querySelector(".search-box").value);
     }




};



      document.querySelector(".search").addEventListener("click",function(){
     	weather.search();
     });

      document.querySelector(".search-box").addEventListener("keyup",function(event){
      	if(event.key=="Enter"){
      		weather.search();
      	}
      });


