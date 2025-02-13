a, b = map(int, input().split())

if b - 45 < 0:
  if a == 0:
    print(23, 60 + (b - 45))
  else:
    print(a - 1, 60 + (b - 45))
else:
  print(a, b - 45)