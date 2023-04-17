logo = [
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [1,1,1],
 [1,0,1],
 [1,1,1],
 [1,0,1]
 ],
 [
 [1,1,1],
 [1,1,1],
 [1,1,0],
 [1,0,1]
 ],
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ],
 [
 [1,0,1],
 [1,0,1],
 [1,0,1],
 [0,1,0]
 ]
]
 # write the logo with dots

def getLogo(arg):
 logoStr = '<circle r="1" cx="30" cy="30" fill="red"  stroke-width="1" />'
 offSetX = 30
 offSetY = 30
 for indexLogo, letter in enumerate(logo):
  for index, letterRow in enumerate(letter):
   cy = offSetY + index
   for i, dot in enumerate(letterRow):
    if dot == 1:
     cx = offSetX + i
     logoStr += '<circle r="0.5" cx="{0}" cy="{1}" fill="green"  stroke-width="1" />'.format(cx, cy)
  offSetX += 4
 
 return logoStr