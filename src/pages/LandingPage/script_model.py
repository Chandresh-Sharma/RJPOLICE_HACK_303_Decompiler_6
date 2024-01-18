import cv2
import numpy as np

# Video file path or URL
video_path = "http://192.168.137.158:8080/video"  # Replace with the path or URL of your video

# Open the video file or stream
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("Error opening video file or stream.")
    exit()

# Variables for motion detection
motion_threshold = 1000  # Adjust this threshold based on your needs
history_buffer = []
buffer_size = 2  # Number of frames to store in the history buffer

while True:
    # Read two consecutive frames
    ret, frame1 = cap.read()
    ret, frame2 = cap.read()

    if not ret:
        print("End of video.")
        break

    # Calculate the absolute difference between frames
    difference = cv2.absdiff(frame1, frame2)
    gray_difference = cv2.cvtColor(difference, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(gray_difference, 30, 255, cv2.THRESH_BINARY)

    # Find contours in the thresholded image
    contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours based on area to ignore small movements
    large_contours = [cnt for cnt in contours if cv2.contourArea(cnt) > motion_threshold]

    # Display motion region
    motion_region = cv2.drawContours(np.zeros_like(frame2), large_contours, -1, (255, 255, 255), thickness=cv2.FILLED)
    cv2.imshow('Motion Region', motion_region)

    # Print or perform actions based on motion detection
    if large_contours:
        print("Motion detected!")

    # Break the loop when 'q' key is pressed
    if cv2.waitKey(25) & 0xFF == ord('q'):
        break

# Release the video capture object and close the window
cap.release()
cv2.destroyAllWindows()
