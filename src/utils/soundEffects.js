/**
 * Pure Web Audio API Synthesizer for PARI.OS
 * Zero external audio files, lightweight, instant, and polite.
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.04) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  // Sound: Command Palette Open (Sci-Fi upward chirplet)
  commandOpen() {
    this.playTone(520, 'sine', 0.06, 0.04);
    setTimeout(() => this.playTone(780, 'sine', 0.08, 0.04), 50);
  }

  // Sound: Command Palette Select / Execute
  commandSelect() {
    this.playTone(880, 'sine', 0.05, 0.05);
    setTimeout(() => this.playTone(1100, 'sine', 0.08, 0.04), 40);
  }

  // Sound: Key Navigation blip
  keyNav() {
    this.playTone(440, 'triangle', 0.03, 0.02);
  }

  // Sound: Boot Online Chime
  bootComplete() {
    this.playTone(392, 'sine', 0.12, 0.05); // G4
    setTimeout(() => this.playTone(523.25, 'sine', 0.15, 0.05), 100); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.22, 0.06), 200); // E5
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

export const sound = new SoundEffects();
export default sound;
