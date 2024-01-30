# Laser Image

The objective of this code base is to develop strategies for translating electronic images into SVG files.
Currently, the target of these SVG files is the cutting of plastic with laser cutters.

## Install

The requirements.txt file contains the required libraries and can be run with Pip.

## Run

<code>python3 run_svg_generate.py</code>

## The Steps

The run script sets up the arguments to be sent to a single function

<code> svg_generate </code>

The function generates the SVG content that the run script then writes to disk.

Within the svg_generate function, the steps for processing the image are the following:

* Process an image so that each pixel can be translated into an SVG circle
* Process an image as a gray scale and adjust gray if nedded
* Import an image as an array
* Iterate through the array
* Establish a grid for the SVG in millimeters to map the pixels to.
* For each pixel calculate an SVG circle size to place in it corresponding grid cell.

The current usage of this strategy has been to adjust the circle size to accommodate different types of plastic.
