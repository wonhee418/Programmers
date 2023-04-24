function solution(rsp) {
    const rspArr = rsp.split("")
    const result = []
    for(const rsp of rspArr){
        if(rsp === "0"){
            result.push("5")
        }
        if(rsp === "2"){
            result.push("0")
        }
        if(rsp === "5"){
            result.push("2")
        }
    }
    return result.join('')
}