logo = [
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [0,1,0],
 [1,0,1],
 [1,1,1],
 [1,0,1],
 [1,0,1]
 ],
 [
 [1,1,1],
 [1,0,1],
 [1,1,1],
 [1,1,0],
 [1,0,1]
 ],
 [
 [1,1,1],
 [0,1,0],
 [0,1,0],
 [0,1,0],
 [1,1,1]
 ],
 [
 [1,1,1],
 [1,0,0],
 [1,0,0],
 [1,0,0],
 [1,1,1]
 ],
 [
 [1,1,1],
 [0,1,0],
 [0,1,0],
 [0,1,0],
 [1,1,1]
 ],
 [
 [1,1,1],
 [0,1,0],
 [0,1,0],
 [0,1,0],
 [0,1,0]
 ],
 [
 [1,1,1],
 [1,0,0],
 [1,1,1],
 [1,0,0],
 [1,1,1],
 ]
]
# write the logo with dots
def getLogo(arg):
 shrink = 0.4
 logoStr = ''
 offSetX = 22.8
 offSetY = 56.5
 dotRadius = 0.1
 for indexLogo, letter in enumerate(logo):
  for index, letterRow in enumerate(letter):
   cy = offSetY + (index * shrink)
   for i, dot in enumerate(letterRow):
    if dot == 1:
     cx = offSetX + (i * 0.5)
     logoStr += '<circle r="{2}" cx="{0}" cy="{1}" fill="none" stroke-width="0.05" />'.format(cx, cy, dotRadius)
  offSetX += 1.9
 
 return logoStr