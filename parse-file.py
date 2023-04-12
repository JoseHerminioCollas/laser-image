# s = 'Hello, world.'
# # print(s)
# tf = 'textfile.txt'
a = '/home/goat/projects/laser-image/mona-small.png'
# tf2 = a
f = open(a, 'r' )
print(f)

# a = f.readline()

# f2 = open(tf2, 'r' )
# print(f2.readline())



# Imports PIL module
# from PIL import Image
# # open method used to open different extension image file
# im = Image.open(a)

# # This method will show image in any image viewer
# im.show()
import cv2
# Load an color image in grayscale
img = cv2.imread('Top-bike-wallpaper.jpg',0)

#Display the image
cv2.imshow('image',img)
#key binding function
cv2.waitKey(0)
#Destroyed all window we created earlier.
cv2.destroyAllWindows()