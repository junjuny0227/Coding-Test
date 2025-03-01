# [level 0] 이진수 더하기 - 120885 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120885) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 03월 01일 16:23:25

### 문제 설명

<p>이진수를 의미하는 두 개의 문자열 <code>bin1</code>과 <code>bin2</code>가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>return 값은 이진수를 의미하는 문자열입니다.</li>
<li>1 ≤ <code>bin1</code>, <code>bin2</code>의 길이 ≤ 10</li>
<li><code>bin1</code>과 <code>bin2</code>는 0과 1로만 이루어져 있습니다.</li>
<li><code>bin1</code>과 <code>bin2</code>는 "0"을 제외하고 0으로 시작하지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>bin1</th>
<th>bin2</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"10"</td>
<td>"11"</td>
<td>"101"</td>
</tr>
<tr>
<td>"1001"</td>
<td>"1111"</td>
<td>"11000"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>10 + 11 = 101 이므로 "101" 을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>1001 + 1111 = 11000 이므로 "11000"을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges