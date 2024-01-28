from svg_generate import svg_generate

read_image_path = 'mona-small-gray-scale.png'
svg_file_name = 'mona-small-2024-1-27.svg'
max = 1.5
grid_cell_size = 2

svg_file_contents = svg_generate(read_image_path, svg_file_name, max, grid_cell_size)

f = open(svg_file_name, 'w')
f.write(svg_file_contents)
print('file written')