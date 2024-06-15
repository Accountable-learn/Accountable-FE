// audio-processor
class AudioProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0]
    if (input.length > 0) {
      const channelData = input[0] // Assuming mono channel
      this.port.postMessage(channelData)
    }
    return true
  }
}
registerProcessor('audio-processor', AudioProcessor)
