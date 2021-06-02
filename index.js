let data = {
    name: "Steve",
    email: "steve@steve.com"
  };

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(data),
} 
function submitData(){ fetch("http://localhost:3000/users", config)

  .then(response => response.json())
  .then(data => {
      console.log(data)
  .catch(err => {
      alert("Something's Up", err);
  })
}
  ); 
}
