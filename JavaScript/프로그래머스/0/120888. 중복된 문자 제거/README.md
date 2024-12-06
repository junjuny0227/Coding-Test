# [level 0] 중복된 문자 제거 - 120888 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120888) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.34 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 12월 06일 09:18:31

### 문제 설명

<p>문자열 <code>my_string</code>이 매개변수로 주어집니다. <code>my_string</code>에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code> ≤ 110</li>
<li><code>my_string</code>은 대문자, 소문자, 공백으로 구성되어 있습니다.</li>
<li>대문자와 소문자를 구분합니다.</li>
<li>공백(" ")도 하나의 문자로 구분합니다.</li>
<li>중복된 문자 중 가장 앞에 있는 문자를 남깁니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"people"</td>
<td>"peol"</td>
</tr>
<tr>
<td>"We are the world"</td>
<td>"We arthwold"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges