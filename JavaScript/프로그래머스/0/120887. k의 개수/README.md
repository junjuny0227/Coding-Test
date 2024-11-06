# [level 0] k의 개수 - 120887 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120887) 

### 성능 요약

메모리: 45.8 MB, 시간: 129.97 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 11월 06일 23:42:17

### 문제 설명

<p>1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 <code>i</code>, <code>j</code>, <code>k</code>가 매개변수로 주어질 때, <code>i</code>부터 <code>j</code>까지 <code>k</code>가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>i</code> &lt; <code>j</code> ≤ 100,000</li>
<li>0 ≤ <code>k</code> ≤ 9</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>i</th>
<th>j</th>
<th>k</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>13</td>
<td>1</td>
<td>6</td>
</tr>
<tr>
<td>10</td>
<td>50</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>3</td>
<td>10</td>
<td>2</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>본문과 동일합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges