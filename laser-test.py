# laser-test.py
# create an SVG file that can be used for laser cutting

fileName = 'test-a.svg'
r = 10
tag = '<circle r={0} cx="100" cy="100" fill="none" stroke="0.001" />'.format(r)
f = open(fileName, 'w')
# write
f.write('<svg>')
f.write(tag)
f.write('<svg>')

# ??? I do not see this printing to the screen 
# b = open(fileName, 'r')
# c = b.readline()
# xsprint('xx{0}'.format(c))
