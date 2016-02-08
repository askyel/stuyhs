# 02 - Line Algorithms

## Bresenham's Line Algorithm

y = mx + b  
y = &Delta;y/&Delta;x * x + b  
(&Delta;x)y = (&Delta;y)x + (&Delta;x)b  
0 = (&Delta;y)x + (&Delta;x)b - (&Delta;x)y  
A = &Delta;y  
B = -&Delta;x  
C = (&Delta;x)b  
0 = Ax + By + C  

f(x,y) = Ax + By + C  
0: (x,y) is on the line  
-: (x,y) is above the line  
+: (x,y) is below the line

Divide coordinate plane into 8 octants  
Octant I: 0 < m < 1  
(x,y)  
1st Test: (x+1, y+1)  
2nd Test: (x+1, y)  
MP: (x+1, y+0.5)
