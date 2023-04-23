function solution(emergency) {
    const list = [...emergency];
    list.sort((a,b)=> b - a)
    return emergency.map(n => list.indexOf(n) + 1)
}