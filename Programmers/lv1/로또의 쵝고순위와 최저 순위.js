function solution(lottos, win_nums) {
    
    let rate = [0,6,5,4,3,2,1]; // 순위저장
    let count = 0; // 일치한 번호 카운트
    let zero = 0; // 민우가 구매했던 로또번호에서 0을 카운트
    
    // console.log(rate[6]);
    
    for(let num of lottos) {
        if(num == 0) zero++;
        if(win_nums.includes(num)) count++;
    }
    
    let low = count > 0? rate[count] : 6;
    let high = zero > 0? rate[zero+count] : count > 0 ? rate[count] : 6;
    
    var answer = [high, low];
    
    // console.log(answer);
    return answer;
}