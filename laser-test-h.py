import math

rowS = ''
offSet = 30
steps = 350
currAngle = 0
angleIncrement = math.pi * 0.4 # * 0.06
spiralRadius = 3
spiralRadiusIncrement = 0.7
tagString = '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'

i = 0
while i <= steps:
 angleX = currAngle
 angleY = currAngle
 currAngle = currAngle + angleIncrement
 angleIncrement = angleIncrement * 0.91
 if angleIncrement <= 0.15:
  angleIncrement = 0.15
 x = math.cos(angleX) * spiralRadius + offSet
 y = math.sin(angleY) * spiralRadius + offSet
 spiralRadius = spiralRadius + spiralRadiusIncrement
 spiralRadiusIncrement = spiralRadiusIncrement * 0.96
 if spiralRadiusIncrement <= 0.4:
  spiralRadiusIncrement = 0.05

 circleRadius = 1.5 - (i * 0.04)
 if circleRadius <= 0.05:
  circleRadius = 0.05
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
f.write('<text x="26" y="57" font-size="2.5">vericite</text>')
f.write('</svg>')
