// const axios = require ('axios')

// const appid = ''

// const q = 'Itu'

// const units = "metric"

// const lang = 'pt_BR'

// const cnt = 10

// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`

// // console.log(url)


// axios.get(url)
// .then((res) => {
//   //console.log(res)
//   return res.data
// })
// .then((res) => {
//   console.log(res.cnt)
//   return res
// })
// .then((res) => {
//   // return res['list']
//   return res.list 
// })
// .then((previsoes) => {
//   for (let previsao of previsoes){
//     console.log(`Min: ${previsao.main.temp_min}`)
//     console.log(`Max: ${previsao.main.temp_max}`)
//     console.log(`Desc: ${previsao.weather[0].description}`)
//     console.log(`Data: ${new Date(+previsao.dt * 1000).toLocaleDateString()}`)
//   }
//   return previsoes
// })
// .then((previsoes) => {
//     //devolver uma lista de previsões composta somente por aquelas que tenham temperatura minima diferente da temperatura maxima ou que tenham sensação térmica (feels_like) maior que 20
//     const lista = previsoes.filter(previsao => previsao.main.temp_min !== previsao.main.temp_max && previsao.main.feels_like > 20)
//     return lista
// })
// .then((previsoes) => {
//   for (let previsao of previsoes){
//     console.log(previsao)
//     console.log("**********************")
//   }
// })