const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

//Using Promises
// const generatejokes =()=>{

//     const sethead ={
//         headers: {
//             Accept: 'application/json'}
//     }
//     fetch('https://icanhazdadjoke.com', sethead)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data.joke)
//         jokes.innerHTML=data.joke
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }

// Using Async and Await

const generatejokes = async () => {
  const sethead = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await fetch("https://icanhazdadjoke.com", sethead);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

jokeBtn.addEventListener("click", generatejokes);
generatejokes();
