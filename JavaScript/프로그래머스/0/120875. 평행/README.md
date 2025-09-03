# [level 0] 평행 - 120875 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120875?language=javascript) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 09월 03일 20:50:26

### 문제 설명

<p>점 네 개의 좌표를 담은 이차원 배열 &nbsp;<code>dots</code>가 다음과 같이 매개변수로 주어집니다.</p>

<ul>
<li>[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]</li>
</ul>

<p>주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>dots</code>의 길이 = 4</li>
<li><code>dots</code>의 원소는 [x, y] 형태이며 x, y는 정수입니다.

<ul>
<li>0 ≤&nbsp;x, y ≤ 100</li>
</ul></li>
<li>서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.</li>
<li>두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.</li>
<li>임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>dots</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1, 4], [9, 2], [3, 8], [11, 6]]</td>
<td>1</td>
</tr>
<tr>
<td>[[3, 5], [4, 1], [2, 4], [5, 10]]</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>점 [1, 4], [3, 8]을 잇고 [9, 2], [11, 6]를 이으면 두 선분은 평행합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>점을 어떻게 연결해도 평행하지 않습니다.</li>
</ul>

<hr>

<p>※ 공지 - 2022년 9월 30일 제한 사항 및 테스트 케이스가 수정되었습니다.<br>
※ 공지 - 2022년 10월 27일 제한 사항 및 테스트 케이스가 수정되었습니다.<br>
※ 공지 - 2023년 2월 14일 테스트 케이스가 수정되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges