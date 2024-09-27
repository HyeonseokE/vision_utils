# Install script for directory: /home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/hscho/vision_ws/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

# Set path to fallback-tool for dependency-resolution.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/usr/bin/objdump")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/cob_perception_msgs/msg" TYPE FILE FILES
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/ColorDepthImage.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/ColorDepthImageArray.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Detection.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/DetectionArray.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Float64ArrayStamped.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Mask.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/People.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Person.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/PersonStamped.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/PointCloud2Array.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/PositionMeasurement.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/PositionMeasurementArray.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Rect.msg"
    "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/msg/Skeleton.msg"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/cob_perception_msgs/cmake" TYPE FILE FILES "/home/hscho/vision_ws/build/cob_perception_common/cob_perception_msgs/catkin_generated/installspace/cob_perception_msgs-msg-paths.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/hscho/vision_ws/devel/include/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/hscho/vision_ws/devel/share/roseus/ros/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/hscho/vision_ws/devel/share/common-lisp/ros/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/hscho/vision_ws/devel/share/gennodejs/ros/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  execute_process(COMMAND "/home/hscho/anaconda3/envs/yolov10/bin/python3" -m compileall "/home/hscho/vision_ws/devel/lib/python3/dist-packages/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python3/dist-packages" TYPE DIRECTORY FILES "/home/hscho/vision_ws/devel/lib/python3/dist-packages/cob_perception_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/hscho/vision_ws/build/cob_perception_common/cob_perception_msgs/catkin_generated/installspace/cob_perception_msgs.pc")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/cob_perception_msgs/cmake" TYPE FILE FILES "/home/hscho/vision_ws/build/cob_perception_common/cob_perception_msgs/catkin_generated/installspace/cob_perception_msgs-msg-extras.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/cob_perception_msgs/cmake" TYPE FILE FILES
    "/home/hscho/vision_ws/build/cob_perception_common/cob_perception_msgs/catkin_generated/installspace/cob_perception_msgsConfig.cmake"
    "/home/hscho/vision_ws/build/cob_perception_common/cob_perception_msgs/catkin_generated/installspace/cob_perception_msgsConfig-version.cmake"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/cob_perception_msgs" TYPE FILE FILES "/home/hscho/vision_ws/src/cob_perception_common/cob_perception_msgs/package.xml")
endif()

