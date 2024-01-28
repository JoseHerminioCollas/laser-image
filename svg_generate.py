import cv2

def svg_generate(read_image_path, svg_file_name, max, grid_cell_size):
  img = cv2.imread(read_image_path, 0)
  r,c = img.shape
  rows = ''
  for i in range(r):
    for j in range(c):
      k = img[i,j]
      # gray scale value in terms of a percentage
      p = k / 255
      cx = grid_cell_size * j
      cy = grid_cell_size * i
      diaphram_size_radius = round((p * max)/2, 1)
      rows += '<circle r="{}mm" cx="{}mm" cy="{}mm" />'.format( diaphram_size_radius, cx, cy)

  svg_file_contents =  '<svg width="200mm" height="300mm">'
  svg_file_contents += rows
  svg_file_contents += '</svg>' 

  return svg_file_contents