import Instrument from '../instruments/Instrument'

/**
 * @class Piano
 * @classdesc Represents a Piano.
 * @extends Instrument
 */
export default class Piano extends Instrument {
  constructor(base = 'A0', range = 87) {
    super()
    this.init(base, range)
  }

  /**
   * @inheritDoc
   */
  static name = 'Piano'

  /** @inheritDoc */
  generatePath(note) {
    const set  = Instrument.normalizeSet(note.pitchClass, note.classSet)
    const file = `${set}${note.octave}`

    return `${Instrument.server}${Piano.instrumentPath}/${file}.mp3`
  }


  /**
   * @inheritDoc
   */
  toString() {
    return 'Piano'
  }
}
