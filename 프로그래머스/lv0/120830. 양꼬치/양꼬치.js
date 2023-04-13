function solution(n, k) {
    const lamb = 12000;
    const drink = 2000;
    const free = Math.floor(n / 10);
    return (lamb *n) + (drink * k) - (free * 2000)
}