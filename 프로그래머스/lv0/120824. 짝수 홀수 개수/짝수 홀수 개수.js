function solution(num_list) {
    let Odd = 0;
    let Even = 0;
    num_list.map((num)=>{
        if(num % 2 === 0 ){
           Even += 1 
        }
        if(num % 2 !== 0 ){
            Odd += 1
        }
    })
    return [Even, Odd]
}