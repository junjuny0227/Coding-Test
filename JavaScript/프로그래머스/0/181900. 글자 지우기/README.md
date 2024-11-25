# [level 0] 글자 지우기 - 181900 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181900) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 11월 25일 11:57:50

### 문제 설명

<p>문자열 <code>my_string</code>과 정수 배열 <code>indices</code>가 주어질 때, <code>my_string</code>에서 <code>indices</code>의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>indices</code>의 길이 &lt; <code>my_string</code>의 길이 ≤ 100</li>
<li><code>my_string</code>은 영소문자로만 이루어져 있습니다</li>
<li>0 ≤ <code>indices</code>의 원소 &lt; <code>my_string</code>의 길이</li>
<li><code>indices</code>의 원소는 모두 서로 다릅니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>indices</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"apporoograpemmemprs"</td>
<td>[1, 16, 6, 15, 0, 10, 11, 3]</td>
<td>"programmers"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>my_string</code>의 인덱스가 잘 보이도록 표를 만들면 다음과 같습니다.</li>
</ul>

<p>|index|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|</p>

<p>|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|</p>

<p>|my_string|a|p|p|o|r|o|o|g|r|a|p|e|m|m|e|m|p|r|s|</p>
<div class="highlight"><pre class="codehilite"><code>`indices`에 있는 인덱스의 글자들을 지우고 이어붙이면 "programmers"가 되므로 이를 return 합니다.
</code></pre></div>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges