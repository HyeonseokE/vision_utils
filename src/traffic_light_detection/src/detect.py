#!/usr/bin/env python3

import cv2
import rospy
from cob_perception_msgs.msg import Detection, DetectionArray
from cv_bridge import CvBridge
from sensor_msgs.msg import Image, CompressedImage
from ultralytics import YOLO
import os
import numpy as np

class Detector:
    def __init__(self):
        model_path = "./src/traffic_light_detection/src/train11/weights/best.pt"
        self.model = YOLO(model_path)

        ######### info #########
        rospy.loginfo(f"[initalized path] :{os.getcwd()}")
        rospy.loginfo(f"[initalized model path] : {model_path}")
        rospy.loginfo("yolov10 traffic light detection node initiated.\n\n")
        ########################

        self.image_sub = rospy.Subscriber(
            "/image_jpeg_traffic/compressed", CompressedImage, self.callback, queue_size=1
        )

        self.cob_detection_pub = rospy.Publisher(
            "/yolov10/detection_results", DetectionArray, queue_size=10
        )

        self.bridge = CvBridge()

    def callback(self, data):

        np_arr = np.frombuffer(data.data, np.uint8)
        im = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)


        # im = cv2.flip(im, 1)
        res = self.model(im, verbose=False)[0]
        im0 = res.plot()

        detection_array = DetectionArray()
        detection_array.header = data.header

        if len(res.boxes):
            log = f'{len(res.boxes)} object detected.'
            rospy.loginfo(log)
            for box in res.boxes:
                detection = Detection()

                # cob_perception_msgs/Detection Message
                detection.header = data.header
                detection.label = str(box.cls.item())
                # detection.id = int(box.id)
                detection.detector = "yolov10_detection_result"
                detection.score = box.conf.item()

                # xywh
                detection.mask.roi.x = int(box.xyxy[0][0].item())
                detection.mask.roi.y = int(box.xyxy[0][1].item())
                detection.mask.roi.width = int(box.xywh[0][2].item())
                detection.mask.roi.height = int(box.xywh[0][3].item())

                # # xy
                detection.bounding_box_lwh.x = box.xywh[0][0].item()
                detection.bounding_box_lwh.y = box.xywh[0][1].item()

                detection_array.detections.append(detection)

        self.cob_detection_pub.publish(detection_array)

        cv2.imshow("sample", im0)
        cv2.waitKey(1)


if __name__ == "__main__":

    rospy.init_node("yolov10_detection", anonymous=True)
    detector = Detector()

    rospy.spin()