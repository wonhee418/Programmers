function solution(my_string, n) {
    const str = my_string.split('')
    return str.reduce((arr,cur)=> arr+cur.repeat(n),"")
}