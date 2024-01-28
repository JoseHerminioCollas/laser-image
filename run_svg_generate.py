from svg_generate import svg_generate

read_image_path = 'source_images/mona-small-gray-scale.png'
svg_file_name = 'generated_files/mona-small-2024-1-28.svg'
max_diaphragm_size = 1.5
grid_cell_size = 2
width = 200
height = 300
svg_file_contents = svg_generate(
    read_image_path, max_diaphragm_size, grid_cell_size, width, height
)

f = open(svg_file_name, 'w')
f.write(svg_file_contents)
print('file written')
