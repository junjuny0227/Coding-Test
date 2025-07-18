function solution(id_pw, db) {
    for (const user of db) {
        if (JSON.stringify(user) === JSON.stringify(id_pw)) return 'login';
        else if (user[0] === id_pw[0] && user[1] !== id_pw[1]) return 'wrong pw'
    }
    return 'fail';
}