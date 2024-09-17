# [level 0] 부분 문자열 이어 붙여 문자열 만들기 - 181911 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181911) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.20 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 09월 17일 14:39:59

### 문제 설명

<p>길이가 같은 문자열 배열 <code>my_strings</code>와 이차원 정수 배열 <code>parts</code>가 매개변수로 주어집니다. <code>parts[i]</code>는 [s, e] 형태로, <code>my_string[i]</code>의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 <code>my_strings</code>의 원소의 <code>parts</code>에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_strings</code>의 길이 = <code>parts</code>의 길이 ≤ 100</li>
<li>1 ≤ <code>my_strings</code>의 원소의 길이 ≤ 100</li>
<li><code>parts[i]</code>를 [s, e]라 할 때, 다음을 만족합니다.

<ul>
<li>0 ≤ s ≤ e &lt; <code>my_strings[i]</code>의 길이</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_strings</th>
<th>parts</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["progressive", "hamburger", "hammer", "ahocorasick"]</td>
<td>[[0, 4], [1, 2], [3, 5], [7, 7]]</td>
<td>"programmers"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.</li>
</ul>

<p>|i|my_strings[i]|parts[i]|부분 문자열|</p>

<p>|-|-------------|--------|--------|</p>

<p>|0|"progressive"|[0, 4]|"progr"|</p>

<p>|1|"hamburger"|[1, 2]|"am"|</p>

<p>|2|"hammer"|[3, 5]|"mer"|</p>

<p>|3|"ahocorasick"|[7, 7]|"s"|</p>
<div class="highlight"><pre class="codehilite"><code>각 부분 문자열을 순서대로 이어 붙인 문자열은 "programmers"입니다. 따라서 "programmers"를 return 합니다.
</code></pre></div>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges