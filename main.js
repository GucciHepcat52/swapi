const mainBtn = document.querySelector("button");
const body = document.querySelector("body");

const btnClick = (event) => {
  event.preventDefault();
  console.log("button clicked");
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
        console.log(res.data)
      const { residents } = res.data.results[0];
      console.log(residents);
      for (let i = 0; i < residents.length; i++) {
        axios
          .get(residents[i])
          .then((res) => {
            let resident = document.createElement("h2");
            let residentName = document.createTextNode(`${res.data.name}`);
            resident.appendChild(residentName);
            body.appendChild(resident);
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

mainBtn.addEventListener("click", btnClick);
