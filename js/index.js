(function() {
  "use strict";

  //GERAR DOG ALEATORIO

  $(document).ready(function() {
    $("#getDog").click(function() {
      $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        dogUrl(data);
      });
    });

    // GERAR DOG POR NOME
    $("#getDogName").click(function() {
      let nameDog = $("#nameDog").val();
      console.log(nameDog);
      $.get(`https://dog.ceo/api/breed/${nameDog}/images/random`, function(
        data
      ) {
        dogUrl(data);
      });
    });
    //GERAR POR RAÇA

    $.get("https://dog.ceo/api/breeds/list/all", function(data) {
      let optionDog = `<option>Selecione uma raça</option>`;
      $.each(data.message, function(value) {
        optionDog += `<option value="${value}"> ${value} <option>`;
      });
      $("#selectBreeds").html(optionDog);
      console.log(optionDog);
    });
    // $("#selectBreeds").click(function() {
    // });
  });

  // FUNÇÃO QUE ARMAZENA URL E INSERE NA TELA
  function dogUrl(url) {
    const dogUrl = url.message;
    $("#imgDog").attr("src", dogUrl);
  }
})();
