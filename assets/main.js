const API = "https://rickandmortyapi.com/api";
const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const characters = await fetchData(`${API}/character/?page=1`);

    let view = `
    ${characters.results
      .map(
        (character) =>
          `<a href="" class="block">
          <img
          src="${character.image}"
          alt="${character.name}'s image"
          class="object-cover w-full h-72 rounded-bl-3xl rounded-tr-3xl transition duration-500 hover:rounded-none"
          />
  
          <div class="flex items-center justify-center mt-4 space-x-4">
            <p class="font-medium">${character.name}</p>
      
            <span class="w-8 h-px bg-yellow-500"></span>
      
            <p class="opacity-50">${character.species} / ${character.origin.name}</p>
          </div>
        </a>
      `
      )
      .join("")}`;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
