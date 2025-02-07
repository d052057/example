import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { VoiceRecognitionService } from './voice-recognition.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ FormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Keep active api calls subscription.
  searchTerm: string = '';
  private voiceRecognition = inject(VoiceRecognitionService);
  public isUserSpeaking: boolean = false;
  constructor(
  ) {
  }

  ngOnInit(): void {
    this.initVoiceInput();
  }

  /**
   * @description Function to stop recording.
   */
  stopRecording() {
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

  /**
   * @description Function for initializing voice input so user can chat with machine.
   */
  initVoiceInput() {
    // Subscription for initializing and this will call when user stopped speaking.
    this.voiceRecognition.init().subscribe(() => {
      // User has stopped recording
      // Do whatever when mic finished listening
    });

    // Subscription to detect user input from voice to text.
    this.voiceRecognition.speechInput().subscribe((input) => {
      // Set voice text output to
      this.searchTerm = input;
    });
  }

  /**
   * @description Function to enable voice input.
   */
  startRecording() {
    this.isUserSpeaking = true;
    this.voiceRecognition.start(this.searchTerm);
    /*this.searchTerm = '';*/
  }
  ngOnDestroy(): void {

  }
}
