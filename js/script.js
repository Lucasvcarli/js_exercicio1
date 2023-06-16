let fruta = prompt('digite uma fruta');

switch (fruta.toLowerCase()){
    case 'maçã': 
        alert("não vendemos essa fruta");
        break;

    case 'kiwi':
        alert("Estamos com escassez de kiwis");
        break;

    case 'melancia':
        alert("Aqui está, são 3 reais o quilo");
        break;

    default:
        alert("Erro. Fruta não encontrada");
}