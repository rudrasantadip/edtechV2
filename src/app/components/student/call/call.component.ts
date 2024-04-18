import { Component, Input, Signal } from '@angular/core';
import { Call, StreamVideoParticipant } from '@stream-io/video-client';
import { CallingService } from 'src/app/services/calling.service';
import {toSignal} from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent {
  @Input({ required: true }) call!: Call;
  participants: Signal<StreamVideoParticipant[]>;

  constructor(private callingService: CallingService) {
    
    this.participants = toSignal(
      this.callingService.call()!.state.participants$,
      // All @stream-io/video-client state Observables have an initial value, so it's safe to set the `requireSync` option: https://angular.io/guide/rxjs-interop#the-requiresync-option
      { requireSync: true }
    );
  }

  toggleMicrophone() {
    this.call.microphone.toggle();
  }

  toggleCamera() {
    this.call.camera.toggle();
  }

  trackBySessionId(_: number, participant: StreamVideoParticipant) {
    return participant.sessionId;
  }

  leaveCall() {
    this.callingService.setCallId(undefined);
  }
}
