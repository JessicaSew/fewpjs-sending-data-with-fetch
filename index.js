// Add your code here

function submitData(username,userEmail) 
    {
fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: username,
        email: userEmail
    })
    })
.then(function(response) {
          return response.json();
        })
        .then(function(object) {
          document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
           
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