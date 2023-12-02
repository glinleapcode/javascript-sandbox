const getAJoke = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.send();

  xhr.addEventListener("readystatechange", function () {
    //   console.log(xhr.readyState, xhr.status);
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.querySelector("#joke").innerHTML = data.value;
      } else {
        document.querySelector("#joke").innerHTML =
          "Something Went Wrong(Not Funny)";
      }
    }
  });
};

document.querySelector("#joke-btn").addEventListener("click", getAJoke);
// handle first joke when loading
document.addEventListener("DOMContentLoaded", getAJoke);
