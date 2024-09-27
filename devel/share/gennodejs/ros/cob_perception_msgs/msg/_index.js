
"use strict";

let Person = require('./Person.js');
let ColorDepthImageArray = require('./ColorDepthImageArray.js');
let PointCloud2Array = require('./PointCloud2Array.js');
let Float64ArrayStamped = require('./Float64ArrayStamped.js');
let Mask = require('./Mask.js');
let ColorDepthImage = require('./ColorDepthImage.js');
let People = require('./People.js');
let DetectionArray = require('./DetectionArray.js');
let PositionMeasurementArray = require('./PositionMeasurementArray.js');
let Rect = require('./Rect.js');
let PositionMeasurement = require('./PositionMeasurement.js');
let Detection = require('./Detection.js');
let PersonStamped = require('./PersonStamped.js');
let Skeleton = require('./Skeleton.js');

module.exports = {
  Person: Person,
  ColorDepthImageArray: ColorDepthImageArray,
  PointCloud2Array: PointCloud2Array,
  Float64ArrayStamped: Float64ArrayStamped,
  Mask: Mask,
  ColorDepthImage: ColorDepthImage,
  People: People,
  DetectionArray: DetectionArray,
  PositionMeasurementArray: PositionMeasurementArray,
  Rect: Rect,
  PositionMeasurement: PositionMeasurement,
  Detection: Detection,
  PersonStamped: PersonStamped,
  Skeleton: Skeleton,
};
