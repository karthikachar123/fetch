//changing
async function get(event) {
    event.preventDefault();
  const response = await fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings",{
     headers: {Authorization: "Basic " + btoa("test@liferay.com:learn")}    }
     );

  const content = await response.json();
  console.log(content);
}

async function post(event) {
  event.preventDefault();
  let a=
    {
      "headline": "Test Blog Entry from REST Services",
      "articleBody": "This article was posted via REST services provided by Liferay DXP."
  } 
  const data=JSON.stringify(a);
  
const response = await fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings',{
  method:"POST",
  body:data,

   headers: {
    "Content-Type": "application/json; charset=utf8",
    'Access-Control-Allow-Origin': '*',
 
    Authorization: "Basic " + btoa("test@liferay.com:learn")} 
     }
   );
const content = await response.json();
console.log(content);
}

async function del(event) {
  event.preventDefault();
  var id=document.getElementById("user1").value;
const response = await fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,{
  method:"DELETE",
   headers: {
     'Access-Control-Allow-Origin': '*',
      Authorization: "Basic " + btoa("test@liferay.com:learn")}    }
   );

   //const content = response.json()
   console.log(response);
}

async function put(event) {
  event.preventDefault();
  let a=
    {
      "headline": "Test Blog Entry from REST Services",
      "articleBody": "hello happy birthday SN"
  } 
  const data=JSON.stringify(a);
  var id=document.getElementById("user").value;

  
const response = await fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,{
  method:"PUT",
  body:data,

   headers: {
    "Content-Type": "application/json; charset=utf8",
    'Access-Control-Allow-Origin': '*',
 
    Authorization: "Basic " + btoa("test@liferay.com:learn")} 
     }
   );
const content = await response.json();
console.log(content);
}