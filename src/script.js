const timeNow = document.querySelectorAll('.time__now')
const timePrev = document.querySelectorAll('.time__prev')

const setValue = (json, liText) => {
   for(index in json){
      timeNow[index].textContent = 
      json[index].timeframes[liText].current == 1 ? 
      json[index].timeframes[liText].current + 'hr' : json[index].timeframes[liText].current + 'hrs'

      timePrev[index].textContent = 
      json[index].timeframes.weekly.previous == 1 ? 'Previous - ' + json[index].timeframes.weekly.previous + 'hr' : 'Previous - ' + json[index].timeframes.weekly.previous + 'hrs'
   }
}
const getValue = async () => {
   await fetch("./data.json")
   .then(res => res.json())
   .then(json => {
      document.querySelectorAll('.time__variants ul li').forEach(li => {
         li.onclick = () => {
            let liText = li.textContent.toLowerCase()
            setValue(json, liText)        
         }
      })
   })
}

getValue()

      



