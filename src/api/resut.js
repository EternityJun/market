import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
});

export function list(data){
  return instance.get('/xxx',{
    params: data
  }).then(res=>{
    return res.data
  })
}

export function goods(data){
  return instance.post('/xx',data).then(res=>data.data)
}