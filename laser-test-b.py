# Load an color image in grayscale
# iterate pixels to generate an SVG circle tag
# that will be used for laser cutting
import cv2

img = cv2.imread('mona-small.png',0)
r,c = img.shape
rowS = ''
for i in range(r):
 for j in range(c):
  k = img[i,j]
  cx = 4 * j
  cy = 4 * i
  # mulitply gray scale value to get diaphram size
  radius = k * 0.008
  rowS += '<circle r="{2}" cx="{0}" cy="{1}" />'.format(cx, cy, radius)
  
# create the file
fileName = 'laser-test-b.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg width="400" height="600">')
f.write(rowS)
f.write('<text x="360" y="598" font-size="2mm">VERICITE</text>')
f.write('</svg>')
