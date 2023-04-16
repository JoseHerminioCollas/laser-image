import math

rowS = ''
offSet = 30
#r = 0 # math.pi * 0.6 # spiral radius starr
steps = 100
currAngle = 0
angleIncrement = math.pi * 0.3 # * 0.06
spiralRadius = 0
spiralRadiusIncrement = 5
tagString = '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'

i = 0
while i <= steps:
 #angleIncrement = angleIncrement * 0.9
 angleX = currAngle
 angleY = currAngle
 #angleIncrement = 0.5
 #angleIncrement = angleIncrement - 0.05
 #angleIncrement = math.pi
 currAngle = currAngle + angleIncrement
 angleIncrement = angleIncrement * 0.8
 if angleIncrement < 0.3:
  angleIncrement = 0.3
 #spiralRadius = spiralRadiusOffset
 # as spiral moves outward decrease the size that the spiral is increased
 # quantity to add each iteration
 #a = 5 - i * 2
 #if a < 0.2:
  #a = 0.2
 #spiralRadiusOffset = spiralRadius + a # - (i * 0.1)
 #spiralRadius = 10
 x = math.cos(angleX) * spiralRadius + offSet
 y = math.sin(angleY) * spiralRadius + offSet
 spiralRadius = spiralRadius + spiralRadiusIncrement
 spiralRadiusIncrement = spiralRadiusIncrement * 0.55
 if spiralRadiusIncrement < 0.2:
  spiralRadiusIncrement = 0.2
 circleRadius = 2 - (i * 0.05)
 if circleRadius < 0:
  circleRadius = 0.1 
 #circleRadius = 0.3
 rowS += tagString.format(circleRadius, y, x)
 i += 1
  
# create the file
fileName = 'laser-test-h.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg width="60" height="60">')
f.write('<circle r="30" cx="30" cy="30" fill="none" stroke="black" stroke-width="0.01mm" />'
)
#f.write('<circle r="1.8" cx="30" cy="30" fill="none" stroke="black" stroke-width="0.01mm" />')
f.write(rowS)
f.write('<text x="31" y="57" font-size="2.5">vericite</text>')
f.write('</svg>')
