
"use strict";

let SaveRecordedObject = require('./SaveRecordedObject.js')
let AcquireObjectImage = require('./AcquireObjectImage.js')
let DetectObjects = require('./DetectObjects.js')
let StartObjectRecording = require('./StartObjectRecording.js')
let BagTrainObject = require('./BagTrainObject.js')
let StopObjectRecording = require('./StopObjectRecording.js')
let BaTestEnvironment = require('./BaTestEnvironment.js')
let TrainObject = require('./TrainObject.js')

module.exports = {
  SaveRecordedObject: SaveRecordedObject,
  AcquireObjectImage: AcquireObjectImage,
  DetectObjects: DetectObjects,
  StartObjectRecording: StartObjectRecording,
  BagTrainObject: BagTrainObject,
  StopObjectRecording: StopObjectRecording,
  BaTestEnvironment: BaTestEnvironment,
  TrainObject: TrainObject,
};
