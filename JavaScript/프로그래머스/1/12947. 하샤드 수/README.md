# [level 1] 하샤드 수 - 12947 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12947) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.08 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 10월 31일 18:26:49

### 문제 설명

<p>양의 정수 <code>x</code>가 하샤드 수이려면 <code>x</code>의 자릿수의 합으로 <code>x</code>가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 <code>x</code>를 입력받아 <code>x</code>가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li><code>x</code>는 1 이상, 10000 이하인 정수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>x</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td style="text-align: center">true</td>
</tr>
<tr>
<td>12</td>
<td style="text-align: center">true</td>
</tr>
<tr>
<td>11</td>
<td style="text-align: center">false</td>
</tr>
<tr>
<td>13</td>
<td style="text-align: center">false</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong><br>
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.</p>

<p><strong>입출력 예 #2</strong><br>
12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.</p>

<p><strong>입출력 예 #3</strong><br>
11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.</p>

<p><strong>입출력 예 #4</strong><br>
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.</p>

<hr>

<p>※ 공지 - 2023년 5월 27일 문제 지문 오탈자 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges