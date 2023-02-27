 const personApi = () =>{
     fetch('https://api.adviceslip.com/advice')
     .then(res => res.json())
     .then(data => showData(data.slip.advice))
 }

     const showData = (data) => {
          // console.log(data)
         const cont = document.getElementById("container");
         cont.innerText ='';
         const div = document.createElement('div');
         
         div.innerHTML =`
               <p class= "border px-5 py-5 bg-info"><q> ${data} </q></p>
         `;
         cont.appendChild(div)
     //     div.innerHTML = '';
     }
 ;

 