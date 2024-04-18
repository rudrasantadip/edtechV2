import { Injectable, computed, signal } from '@angular/core';
import { Call,StreamVideoClient,User } from '@stream-io/video-client';



@Injectable({
  providedIn: 'root',
})
export class CallingService {
  //creating a call id
  callId = signal<string | undefined>(undefined);

  call= computed<Call | undefined>(()=>{
    const currentCallid = this.callId();
    if(currentCallid!==undefined)
      {
        const call = this.client.call('default',currentCallid);
        call.join({create:true}).then(async ()=>{
          call.camera.enable();
          call.microphone.enable();
        });
        return call;
      }
      else
      {
        return undefined;
      }
  });



  //getting the video streaming client
  client: StreamVideoClient;
  constructor() {
    const apiKey = 'mmhfdzb5evj2';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSm9ydXVzX0NfQmFvdGgiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0pvcnV1c19DX0Jhb3RoIiwiaWF0IjoxNzEzNDUzNzc2LCJleHAiOjE3MTQwNTg1ODF9.DBgfbfjXMfYD4UKFmm1mGGueK8n7VL4jCKPOTY5aNW0';
    const user: User = { id: 'Joruus_C_Baoth' };

    this.client = new StreamVideoClient({ apiKey, token, user });
    // const call = this.client.call('default', 'call-id');
  }


  //setting the callid
  setCallId(callId: string | undefined) {
    if (callId === undefined) {
      this.call()?.leave();
    }
    this.callId.set(callId);
  }
}
