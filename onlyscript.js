function nomeMaisApropriado(n) {
    let x=[];
    let y=[];
    for (let l = 0; l <= n; l++) {

        for (let c = 0; c <= n; c++) {
            y[c]=l*c
        }
        x[l]=y;
        y=[]       //inicialmente não tinha essa linha, e não entendi porque ela se faz necessária, apesar de ter resolvido o problema(l=10)
    }
    console.table(x)
}
