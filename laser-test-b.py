import cv2
# Load an color image in grayscale
img = cv2.imread('mona-small.png',0)
r,c = img.shape
rowS = ''
for i in range(r):
 for j in range(c):
  k = img[i,j]
  l = 255 - k
  #if k>220: 
   #print(k)
  #rowS += str(k)
  #if(k > 85):
  cx = 4 * j
  cy = 4 * i
  radius = k * 0.008
  rowS += '<circle r="{2}" cx="{0}" cy="{1}" />'.format(cx, cy, radius)
  #else:
  #   rowS += 'XXX'
 #print(rowS)
  
#Display the image
 # cv2.imshow('image',img)
#key binding function
 # cv2.waitKey(0)
#Destroyed all window we created earlier.
 # cv2.destroyAllWindows()

# laser-test.py
# create an SVG file that can be used for laser cutting

# create the file
fileName = 'laser-test-b.svg'
f = open(fileName, 'w')

# create a file, write to a file, write SVG tags
# create a file
# f = open('laser-test-b.svg', 'w')
# write
# f.write('XXX')
# b = open('test.txt', 'r')
# print('aaa')
# print(b)

# write the contents of the SVG file
f.write('<svg width="400" height="600">')
f.write(rowS)
# f.write('<g transform="translate(10,10)">')
# f.write(c)
# f.write('</g>')
# f.write('<text x="100" y="25" font-size="2mm">VERICITE</text>')
f.write('</svg>')
