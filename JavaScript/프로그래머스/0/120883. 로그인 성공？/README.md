# [level 0] 로그인 성공? - 120883 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120883) 

### 성능 요약

메모리: 33.2 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 07월 18일 12:25:14

### 문제 설명

<p>머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 <code>id_pw</code>와 회원들의 정보가 담긴 2차원 배열 <code>db</code>가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.</p>

<ul>
<li>아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.</li>
<li>로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.</li>
</ul>

<hr>

<h5>제한사항</h5>

<ul>
<li>회원들의 아이디는 문자열입니다.</li>
<li>회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.</li>
<li>회원들의 패스워드는 숫자로 구성된 문자열입니다.</li>
<li>회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.</li>
<li><code>id_pw</code>의 길이는 2입니다.</li>
<li><code>id_pw</code>와 db의 원소는 [아이디, 패스워드] 형태입니다.</li>
<li>1 ≤ 아이디의 길이 ≤ 15</li>
<li>1 ≤ 비밀번호의 길이 ≤ 6</li>
<li>1 ≤ <code>db</code>의 길이 ≤ 10</li>
<li><code>db</code>의 원소의 길이는 2입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>id_pw</th>
<th>db</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["meosseugi", "1234"]</td>
<td>[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]</td>
<td>"login"</td>
</tr>
<tr>
<td>["programmer01", "15789"]</td>
<td>[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]</td>
<td>"wrong pw"</td>
</tr>
<tr>
<td>["rabbit04", "98761"]</td>
<td>[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]</td>
<td>"fail"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>db</code>에 같은 정보의 계정이 있으므로 "login"을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>db</code>에 아이디는 같지만 패스워드가 다른 계정이 있으므로 "wrong pw"를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>db</code>에 아이디가 맞는 계정이 없으므로 "fail"을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges