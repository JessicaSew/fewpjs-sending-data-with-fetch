// Add your code here
const pTag = document.getElementsByTagName('p')

function submitData(username,userEmail) 
    {
const dataObj = 
    {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: username,
        email: userEmail
    })
    }
fetch('http://localhost:3000/users', dataObj)
.then(function(response) {
          return response.json();
        })
        .then(function(object) {
          let text = document.createTextNode(object.id)
        pTag.appendChild(text)
        })
        .catch(function(error) {
            console.log(error.message);
          }); 
    }


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     }); 