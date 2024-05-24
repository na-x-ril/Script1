const audioContext = new AudioContext();

    const videoElement = document.querySelector('video');
    const audioStream = audioContext.createMediaElementSource(videoElement);

    const inGain = audioContext.createGain();
    const biquadFilter = audioContext.createBiquadFilter();
    const outGain = audioContext.createGain();

    const equalizer = {
      31: { frequency: 31, Q: 1, gain: 15 },
      62: { frequency: 62, Q: 1, gain: 10 },
      125: { frequency: 125, Q: 1, gain: 6 },
      250: { frequency: 250, Q: 1, gain: 4 },
      500: { frequency: 500, Q: 1, gain: -2 },
      1000: { frequency: 1000, Q: 1, gain: -7 },
      2000: { frequency: 2000, Q: 1, gain: -2 },
      4000: { frequency: 4000, Q: 1, gain: 4 },
      8000: { frequency: 8000, Q: 1, gain: 6 },
      16000: { frequency: 16000, Q: 1, gain: 1 }
    };

    for (const frequency in equalizer) {
      const filterSettings = equalizer[frequency];
      biquadFilter.frequency.value = filterSettings.frequency;
      biquadFilter.Q.value = filterSettings.Q;
      biquadFilter.gain.value = filterSettings.gain;
    }

    // Mengatur inGain dan outGain
    inGain.gain.value = 0.7; // Gain awal 1.0 (tidak ada perubahan volume)
    outGain.gain.value = 1.9; // Gain akhir 1.5 (meningkatkan volume 50%)

    // Menghubungkan Node Audio
    audioStream.connect(inGain);
    inGain.connect(biquadFilter);
    biquadFilter.connect(outGain);
    outGain.connect(audioContext.destination);
    console.log('Bass Boosted!');