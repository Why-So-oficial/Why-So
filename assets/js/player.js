
fetch('../js/data.json')
  .then(response => response.json())
  .then(data => {
    takeMusics(data);
  })
  .catch(error => {
    console.error('Erro ao carregar dados JSON:', error);
  });

function takeMusics(data){
  return data;
}

console.log(songs);