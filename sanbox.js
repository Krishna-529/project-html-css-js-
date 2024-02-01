const apiUrl_1 = "https://official-joke-api.appspot.com/random_joke";

fetch(apiUrl_1)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    const f1 = document.getElementById("front-1");
    f1.innerHTML = `<p>${userData.setup}</p>`;

    const b1 = document.getElementById("back-1");
    b1.innerText = userData.punchline;

  })
  .catch(error => {
    alert("Kindly, check your network connections.")
    console.error('Error:', error);
  });

  // const f1 = document.getElementById("front-1");
  // f1.innerText = "New";
  const apiUrl_2 = "https://official-joke-api.appspot.com/random_joke";

  fetch(apiUrl_2)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userData => {
      const f2 = document.getElementById("front-2");
      f2.innerHTML = `<p>${userData.setup}</p>`;
  
      const b2 = document.getElementById("back-2");
      b2.innerText = userData.punchline;
  
    })
    .catch(error => {
      console.error('Error:', error);
    });

    const apiUrl_3 = "https://official-joke-api.appspot.com/random_joke";

    fetch(apiUrl_3)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(userData => {
        const f3 = document.getElementById("front-3");
        f3.innerHTML = `<p>${userData.setup}</p>`;
    
        const b3 = document.getElementById("back-3");
        b3.innerText = userData.punchline;
    
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
      
