const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitBtn=document.getElementById("submitBtn");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp_real_value");
const datahide=document.querySelector(".middle_layer");
datahide.classList.add("data_hide");


const getInfo=async(event)=>{
    event.preventDefault(); //we use this to stop page from reloading after submit button is clicked    
    let cityval=cityName.value;
    
    if(cityval==""){
        city_name.innerHTML=`Please write a city name before search`;
    }else{
        datahide.classList.remove("data_hide");
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&APPID=11ff2050d1c134bcb169895602e79b96`;
        const response=await fetch(url);
        const data =await response.json();
        const arrData=[data];
        console.log(data);
        console.log(arrData[0].main.temp);
        console.log(arrData[0].weather[0].main);
        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;
        city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;

        const tempMood=arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' aria-hidden='true' style='color:#eccc68;'></i>";
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' aria-hidden='true' style='color:#f1f2f6;'></i>";
        }else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' aria-hidden='true' style='color:#a4b0be;'></i>";
        }else {
            temp_status.innerHTML="<i class='fas fa-sun' aria-hidden='true' style='color:#eccc68;'></i>";
        }
        
        }
        catch{
            city_name.innerHTML=`Please write correct city name`;
            datahide.classList.add("data_hide");
        }
        
    }
    
}
submitBtn.addEventListener('click',getInfo);