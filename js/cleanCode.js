function calculer(operation) {
    var val1 = Number($('#input1').val());
    var val2 = Number($('#input2').val());
    var resultat = 0;

    switch (operation) {
        case '+': resultat = val1 + val2; break;
        case '*': resultat = val1 * val2; break;
        case '-': resultat = val1 - val2; break;
        case '/': resultat = val1 / val2; break;
    }
    $('#resultat').html(resultat)
}

$(function () {

 
    $('#btnAdd').on("click",function(){ calculer('+');  });
    $('#btnMoins').on("click",function(){ calculer('-');  });
    $('#btnMult').on("click",function(){ calculer('*');  });
    $('#btnDiv').on("click",function(){ calculer('/');  });
});


