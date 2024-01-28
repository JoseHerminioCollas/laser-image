import cv2


def svg_generate(
        source_image_path,  max_diaphragm_size, grid_cell_size, width, height
):
    source_image = cv2.imread(source_image_path, 0)
    image_rows, image_columns = source_image.shape
    svg_circles = ''
    for i in range(image_rows):
        for j in range(image_columns):
            gray_scale = source_image[i, j]
            # gray scale value in terms of a percentage
            gray_scale_percent = gray_scale / 255
            circle_x = grid_cell_size * j
            circle_y = grid_cell_size * i
            diaphragm_radius = round((gray_scale_percent * max_diaphragm_size) / 2, 1)
            svg_circles += '<circle r="{}mm" cx="{}mm" cy="{}mm" />'.format(diaphragm_radius, circle_x, circle_y)

    svg_file_contents = '<svg width="{}mm" height="{}mm">'.format(width, height)
    svg_file_contents += svg_circles
    svg_file_contents += '</svg>'

    return svg_file_contents
