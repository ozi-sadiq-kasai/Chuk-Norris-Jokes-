let p = document.querySelector('p')

const generateJoke =()=>{
    const xhr = new XMLHttpRequest()
      xhr.open('GET','https://api.chucknorris.io/jokes/random')
      
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText).value
            p.innerText = data
         
        }  
       
    }
    xhr.send() 
}

let button = document.querySelector('button').addEventListener('click',generateJoke)



    
     
    