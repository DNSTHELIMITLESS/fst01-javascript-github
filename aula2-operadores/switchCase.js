let tipousuario = 1; // usuario comum = 1 | usuario admin = 2

switch (tipousuario) {
    case 1:
        alert("usuario comum");
        console.log("usuario comum");
        break;
        case 2:
            alert("usuario admin");
            break;
            default:
                alert("usuario inválido");
}    

alert("fim");