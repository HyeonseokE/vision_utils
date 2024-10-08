// Auto-generated. Do not edit!

// (in-package cob_object_detection_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let DetectObjectsActionGoal = require('./DetectObjectsActionGoal.js');
let DetectObjectsActionResult = require('./DetectObjectsActionResult.js');
let DetectObjectsActionFeedback = require('./DetectObjectsActionFeedback.js');

//-----------------------------------------------------------

class DetectObjectsAction {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.action_goal = null;
      this.action_result = null;
      this.action_feedback = null;
    }
    else {
      if (initObj.hasOwnProperty('action_goal')) {
        this.action_goal = initObj.action_goal
      }
      else {
        this.action_goal = new DetectObjectsActionGoal();
      }
      if (initObj.hasOwnProperty('action_result')) {
        this.action_result = initObj.action_result
      }
      else {
        this.action_result = new DetectObjectsActionResult();
      }
      if (initObj.hasOwnProperty('action_feedback')) {
        this.action_feedback = initObj.action_feedback
      }
      else {
        this.action_feedback = new DetectObjectsActionFeedback();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type DetectObjectsAction
    // Serialize message field [action_goal]
    bufferOffset = DetectObjectsActionGoal.serialize(obj.action_goal, buffer, bufferOffset);
    // Serialize message field [action_result]
    bufferOffset = DetectObjectsActionResult.serialize(obj.action_result, buffer, bufferOffset);
    // Serialize message field [action_feedback]
    bufferOffset = DetectObjectsActionFeedback.serialize(obj.action_feedback, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type DetectObjectsAction
    let len;
    let data = new DetectObjectsAction(null);
    // Deserialize message field [action_goal]
    data.action_goal = DetectObjectsActionGoal.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_result]
    data.action_result = DetectObjectsActionResult.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_feedback]
    data.action_feedback = DetectObjectsActionFeedback.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += DetectObjectsActionGoal.getMessageSize(object.action_goal);
    length += DetectObjectsActionResult.getMessageSize(object.action_result);
    length += DetectObjectsActionFeedback.getMessageSize(object.action_feedback);
    return length;
  }

  static datatype() {
    // Returns string type for a message object
    return 'cob_object_detection_msgs/DetectObjectsAction';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1766583862dce82eb4c1f2fa51d6f3c5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    DetectObjectsActionGoal action_goal
    DetectObjectsActionResult action_result
    DetectObjectsActionFeedback action_feedback
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsActionGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalID goal_id
    DetectObjectsGoal goal
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: actionlib_msgs/GoalID
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # The goal
    std_msgs/String object_name
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsActionResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    DetectObjectsResult result
    
    ================================================================================
    MSG: actionlib_msgs/GoalStatus
    GoalID goal_id
    uint8 status
    uint8 PENDING         = 0   # The goal has yet to be processed by the action server
    uint8 ACTIVE          = 1   # The goal is currently being processed by the action server
    uint8 PREEMPTED       = 2   # The goal received a cancel request after it started executing
                                #   and has since completed its execution (Terminal State)
    uint8 SUCCEEDED       = 3   # The goal was achieved successfully by the action server (Terminal State)
    uint8 ABORTED         = 4   # The goal was aborted during execution by the action server due
                                #    to some failure (Terminal State)
    uint8 REJECTED        = 5   # The goal was rejected by the action server without being processed,
                                #    because the goal was unattainable or invalid (Terminal State)
    uint8 PREEMPTING      = 6   # The goal received a cancel request after it started executing
                                #    and has not yet completed execution
    uint8 RECALLING       = 7   # The goal received a cancel request before it started executing,
                                #    but the action server has not yet confirmed that the goal is canceled
    uint8 RECALLED        = 8   # The goal received a cancel request before it started executing
                                #    and was successfully cancelled (Terminal State)
    uint8 LOST            = 9   # An action client can determine that a goal is LOST. This should not be
                                #    sent over the wire by an action server
    
    #Allow for the user to associate a string with GoalStatus for debugging
    string text
    
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # The result
    cob_object_detection_msgs/DetectionArray object_list
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectionArray
    Header header
    Detection[] detections
    
    ================================================================================
    MSG: cob_object_detection_msgs/Detection
    Header header
    string label
    int32 id
    string detector
    float32 score
    Mask mask
    geometry_msgs/PoseStamped pose
    geometry_msgs/Point bounding_box_lwh
    
    ================================================================================
    MSG: cob_object_detection_msgs/Mask
    # this message is used to mark where an object is present in an image
    # this can be done either by a roi region on the image (less precise) or a mask (more precise)
    
    Rect roi
    
    # in the case when mask is used, 'roi' specifies the image region and 'mask'
    # (which should be of the same size) a binary mask in that region
    sensor_msgs/Image mask
    
    # in the case there is 3D data available, 'indices' are used to index the 
    # part of the point cloud representing the object
    #pcl/PointIndices indices
    
    ================================================================================
    MSG: cob_object_detection_msgs/Rect
    int32 x
    int32 y
    int32 width
    int32 height
    
    ================================================================================
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of camera
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsActionFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    DetectObjectsFeedback feedback
    
    ================================================================================
    MSG: cob_object_detection_msgs/DetectObjectsFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # The feedback
    float32 percent_complete
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new DetectObjectsAction(null);
    if (msg.action_goal !== undefined) {
      resolved.action_goal = DetectObjectsActionGoal.Resolve(msg.action_goal)
    }
    else {
      resolved.action_goal = new DetectObjectsActionGoal()
    }

    if (msg.action_result !== undefined) {
      resolved.action_result = DetectObjectsActionResult.Resolve(msg.action_result)
    }
    else {
      resolved.action_result = new DetectObjectsActionResult()
    }

    if (msg.action_feedback !== undefined) {
      resolved.action_feedback = DetectObjectsActionFeedback.Resolve(msg.action_feedback)
    }
    else {
      resolved.action_feedback = new DetectObjectsActionFeedback()
    }

    return resolved;
    }
};

module.exports = DetectObjectsAction;
