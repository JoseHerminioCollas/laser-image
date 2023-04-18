import math

rowS = ''
offSet = 30
steps = 350
currAngle = 0
angleIncrement = math.pi * 0.4 # * 0.06
spiralRadius = 3
spiralRadiusIncrement = 0.7
tagString = '<circle r="{0}" cx="{2}" cy="{1}" fill="none" stroke="black" stroke-width="0.01mm" />'

# write a spiral
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
 if circleRadius <= 0.3:
  circleRadius = 0.3
 rowS += tagString.format(circleRadius, y, x)
 i += 1

# create the file
fileName = 'laser-test-k.svg'
f = open(fileName, 'w')

# write the contents of the SVG file
f.write('<svg width="60" height="60" fill="none" stroke="black">')
f.write('<circle r="30" cx="30" cy="30" stroke-width="0.01mm" />')
f.write(rowS)
f.write('<text x="25" y="58.9" font-size="2.25" fill="black" stroke-width="0.01mm">VERICITE</text>')
f.write('</svg>')
