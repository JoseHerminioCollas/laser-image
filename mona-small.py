# Load an color image in grayscale
# iterate pixels to generate an SVG circle tag
# that will be used for laser cutting
import cv2

img = cv2.imread('mona-small.png',0)
fileName = 'mona-small-1-26.svg'
r,c = img.shape
rows = ''
# min, max sizes in mm for laser cutter instruction
min = 0
max = 1
# advance the drawing of the
grid_cell_size = 2
for i in range(r):
 for j in range(c):
  k = img[i,j]
  # gray scale value in terms of a percentage
  p = k / 255
  cx = grid_cell_size * j
  cy = grid_cell_size * i
  diaphram_size = round(p * max, 1)
  # print(k, p, diaphram_size )
  rows += '<circle r="{}mm" cx="{}mm" cy="{}mm" />'.format( diaphram_size, cx, cy)

svg_file_contents =  '<svg width="200mm" height="300mm">'
svg_file_contents += rows
svg_file_contents += '</svg>' 

f = open(fileName, 'w')
f.write(svg_file_contents)
print('file written')