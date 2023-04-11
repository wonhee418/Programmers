function solution(my_string, n) {
    let result = '';
    const str = my_string.split('')
    str.map((s)=>{
        for(let i = 0; i < n; i++){
            result += s
        }    
    })
    return result;
}