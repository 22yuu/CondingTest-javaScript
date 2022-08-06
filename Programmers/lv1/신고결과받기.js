/* https://school.programmers.co.kr/learn/courses/30/lessons/92334

    1. 각 유저는 한 번에 한명의 유저를 신고할 수 있음
        - 신고 횟수에 제한 없음. 서로 다른 유저를 계속해서 신고할 수 있음
        - 한 유저를 여러번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회 처리
        
    2. k번 이상 신고된 유저는 게시판 이용이 정지됨, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
    
*/

function solution(id_list, report, k) {
    var answer = [];
    const countReportedMap = new Map(); // 각 유저별 신고당한 횟수를 저장하기 위한 map
    const reportMap = new Map(); // 각 유저별 신고한 유저 기록
    const banPlayers = []; // 정지당할 계정들을 저장할 변수
    
    
    // 맵 초기화
    for(let id of id_list) {
        countReportedMap.set(id, 0);
        reportMap.set(id, []);
    }
    
    for(let str of report) {
        let temp = str.split(" ");
        // console.log(`repoter : ${temp[0]}, reported User : ${temp[1]}`);
        
//         if(!reportMap.has(temp[0])) {
//             // 첫 신고
//             reportMap.set(temp[0], [temp[1]]);
//             countReportedMap.set(temp[1], countReportedMap.get(temp[1]) + 1);
//         } else {
            
//             if(reportMap.get(temp[0]).includes(temp[1])){
//                 // 한 유저를 여러번 신고함
//                 continue;
//             } else {
//                 reportMap.get(temp[0]).push(temp[1]);
//                 countReportedMap.set(temp[1], countReportedMap.get(temp[1]) + 1);
//             }
            
//         }
        
        if(reportMap.get(temp[0]).includes(temp[1])){
                // 한 유저를 여러번 신고함
                continue;
        } else {
            reportMap.get(temp[0]).push(temp[1]);
            countReportedMap.set(temp[1], countReportedMap.get(temp[1]) + 1);
        }
        
    }
    
    // console.log('각 유저별 신고당한 횟수');
    for(let [key, value] of countReportedMap) {
        
        // console.log(`${key} : ${value}`);
        
        if(value >= k) banPlayers.push(key);
    }
    
    // console.log('각 유저별 신고한 유저 목록');
    for(let [key, value] of reportMap) {
        let count = 0;
        
        // console.log(`${key} : ${value}`);
        for(let banPlayer of banPlayers) {
            if(value.includes(banPlayer)) count++;
        }
        
        answer.push(count);
    }
    
    console.log(answer);
    
    return answer;
}