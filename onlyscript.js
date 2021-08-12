function nomeMaisApropriado(n) {
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x=[];
    let y=[];
    for (let l = 0; l <= n; l++) {

        for (let c = 0; c <= n; c++) {
            //y[c] = l porque neste caso a tabela fica com todos elementos = 10????
            //porque se somo l+c ele concatena?Porque l=10?
            y[c]=l*c
        }
        x[l]=y;
        y=[]
    }
    console.table(x)
}