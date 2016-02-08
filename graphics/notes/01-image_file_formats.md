# 01 - Image File Formats

## Compressed versus Uncompressed

Compressed - smaller file size, processing involved  
ex: jpg/jpeg, webp, png, gif

Uncompressed - raw image data  
ex: bmp (bitmap), tiff, raw  

## Lossy versus Lossless

Lossy - loses some of original information  
ex: jpg/jpeg

Lossless - retains all original information  
ex: bmp, tiff, png

### Run-Length Encoding

GGGGGYYYRRRR  (12 B)    
5G3Y4R  (6 B)

## Raster versus Vector 

Raster: represented as a grid of pixels 

Vector: represented as a list of drawing instructions, infinitely scalable (no definition loss)  

## netpbm

.ppm file

P3  
XRES YRES  
MAX_COLOR_VALUE  
R G B R G B ...  

* all whitespace is equivalent
