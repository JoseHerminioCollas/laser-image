import math

rowS = ''
offSet = 30
#r = 0 # math.pi * 0.6 # spiral radius starr
steps = 100
currAngle = 0
angleIncrement = math.pi * 0.25 # * 0.06
spiralRadius = 3
spiralRadiusIncrement = 0.75
tagString = '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'

i = 0
while i <= steps:
 angleX = currAngle
 angleY = currAngle
 currAngle = currAngle + angleIncrement
 #angleIncrement = angleIncrement * 0.95
 #if angleIncrement < 0.6:
  #angleIncrement = angleIncrement * 0.95
 #if angleIncrement <= 0.15:
  #angleIncrement = 0.15

 x = math.cos(angleX) * spiralRadius + offSet
 y = math.sin(angleY) * spiralRadius + offSet
 spiralRadius = spiralRadius + spiralRadiusIncrement
 #if i < 3:
 #spiralRadiusIncrement = spiralRadiusIncrement * 0.7
 #if spiralRadiusIncrement < 4:
  #spiralRadiusIncrement = spiralRadiusIncrement * 0.999
 #elif spiralRadiusIncrement < 2:
  #spiralRadiusIncrement = spiralRadiusIncrement * 0.9
 #if spiralRadiusIncrement <= 0.25:
  #spiralRadiusIncrement = spiralRadiusIncrement * 0.95
 #if spiralRadiusIncrement < 1:
  #spiralRadiusIncrement = spiralRadiusIncrement * 0.99
 #if spiralRadiusIncrement <= 0.15:
  #spiralRadiusIncrement = 0.15

 circleRadius = 2.1 - (i * 0.07)
 if circleRadius < 0:
  circleRadius = 0.1 
#  circleRadius = 0.5
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
