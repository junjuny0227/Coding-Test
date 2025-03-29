function solution(ineq, eq, n, m) {
    if (eq === "=" && ineq === "<") return +(n <= m);
    else if (eq === "=" && ineq === ">") return +(n >= m);
    else if (eq === "!" && ineq === "<") return +(n < m);
    else if (eq === "!" && ineq === ">") return +(n > m);
}