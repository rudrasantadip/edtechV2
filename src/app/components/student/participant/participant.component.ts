import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StreamVideoParticipant } from '@stream-io/video-client';
import { CallingService } from 'src/app/services/calling.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;

  @Input() participant!: StreamVideoParticipant;
  unbindVideoElement: (() => void) | undefined;
  unbindAudioElement: (() => void) | undefined;

  constructor(private callingService: CallingService) {}

  ngAfterViewInit(): void {
    this.unbindVideoElement = this.callingService
      .call()
      ?.bindVideoElement(
        this.videoElement.nativeElement,
        this.participant.sessionId,
        'videoTrack'
      );

    this.unbindAudioElement = this.callingService
      .call()
      ?.bindAudioElement(
        this.audioElement.nativeElement,
        this.participant.sessionId
      );
  }

  ngOnDestroy(): void {
    this.unbindVideoElement?.();
    this.unbindAudioElement?.();
  }
}
