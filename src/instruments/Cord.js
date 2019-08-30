import Instrument from './Instrument'

/**
 * @class Cord
 * @extends Instrument
 * @classdesc A cord which represents a cord as part of a stringed instrument.
 * @param base
 * @param range
 * @param stringNumber
 */
export default class Cord extends Instrument {
  constructor(base, range, stringNumber) {
    super()
    this.stringNumber = stringNumber
    this.init(base, range)
  }

  /**
   * @inheritDoc
   */
  static name = 'Cord'

  generatePath(note) {
    const set  = Instrument.normalizeSet(note.pitchClass, note.classSet)
    const file = `${set}${note.octave}`

    return `${Instrument.server}${Cord.instrumentPath}/${this.stringNumber}/${file}.mp3`
  }

  fret(fret) {
    return Array.from(this.notes.keys())[fret]
  }


  toString() {
    return 'Cord'
  }
}
