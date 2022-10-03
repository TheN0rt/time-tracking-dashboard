const timeNow = document.querySelectorAll('.time__now')
const timePrev = document.querySelectorAll('.time__prev')

fetch("./data.json")
   .then(res => res.json())
   .then(json => {
      document.querySelectorAll('.time__variants ul li').forEach(li => {
         li.onclick = () => {
            
            if(li.textContent === 'Weekly') {
               
               for(index in json){
                  timeNow[index].textContent = 
                  json[index].timeframes.weekly.current == 1 ? 
                  json[index].timeframes.weekly.current + 'hr' : json[index].timeframes.weekly.current + 'hrs'

                  timePrev[index].textContent = 
                  json[index].timeframes.weekly.previous == 1 ? 'Previous - ' + json[index].timeframes.weekly.previous + 'hr' : 'Previous - ' + json[index].timeframes.weekly.previous + 'hrs'
               }
            } 

            if(li.textContent === 'Daily') {
               for(index in json){
                  timeNow[index].textContent =
                  json[index].timeframes.daily.current == 1 ?  json[index].timeframes.daily.current + 'hr' : json[index].timeframes.daily.current + 'hrs'
                  
                  timePrev[index].textContent = 
                  json[index].timeframes.daily.previous == 1 ? 'Previous - ' + json[index].timeframes.daily.previous + 'hr' : 'Previous - ' + json[index].timeframes.daily.previous + 'hrs'
                   
               }
            } 

            if(li.textContent === 'Monthly') {
               for(index in json){
                  timeNow[index].textContent = 
                  json[index].timeframes.monthly.current == 1 ? json[index].timeframes.monthly.current + 'hr' : json[index].timeframes.monthly.current + 'hrs'

                  timePrev[index].textContent = 
                  json[index].timeframes.monthly.previous == 1 ? 
                  'Previous - ' + json[index].timeframes.monthly.previous + 'hr' : 'Previous - ' + json[index].timeframes.monthly.previous + 'hrs'
               }
            } 
         }
      })
   })


