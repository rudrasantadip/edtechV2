import { Component, OnInit } from '@angular/core';
import AgoraRTC, { IAgoraRTCClient, LiveStreamingTranscodingConfig, ICameraVideoTrack, IMicrophoneAudioTrack, ScreenVideoTrackInitConfig, VideoEncoderConfiguration, AREAS, IRemoteAudioTrack, ClientRole } from "agora-rtc-sdk-ng"
import { CallingService } from 'src/app/services/calling.service';

 

@Component({
  selector: 'app-live-doubt',
  templateUrl: './live-doubt.component.html',
  styleUrls: ['./live-doubt.component.css']
})
export class LiveDoubtComponent 
{
 callingService:CallingService;

 constructor(callingService:CallingService)
 {
  this.callingService=callingService;
 }

 setCallId(callId:string)
 {
  this.callingService.setCallId(callId);
 }
  

}
  

