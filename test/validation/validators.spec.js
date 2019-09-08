import {Note, PitchClass, validateInstance, validateRawNote} from '../../src'
import {InvalidInput}                                        from '../../src/Exceptions'

describe('#Validators', () => {

describe('#validateInstance', () => {
  it('should Return true when obj is instance of class', () => {
    expect(validateInstance(new PitchClass('c'), PitchClass)).to.be.true
  })

  it('should Return false when obj is not instance of class', () => {
    expect(() => validateInstance('b', PitchClass)).to.throw(InvalidInput)
  })
})
  describe('#validateRawNote', () => {
    it('should return true when a note is valid', () => {
      expect(validateRawNote('c3')).to.be.true
      expect(validateRawNote('c#3')).to.be.true
      expect(validateRawNote('db3')).to.be.true
      expect(validateRawNote('r')).to.be.true
      expect(validateRawNote('R')).to.be.true
    })

    it('should throw an error when a note is not valid', () => {
      expect(() => {
        validateRawNote('c')
      }).to.throw(InvalidInput)
      expect(() => {
        validateRawNote(new Note('c3'))
      }).to.throw(InvalidInput)
      expect(() => {
        validateRawNote(123)
      }).to.throw(InvalidInput)
    })
  })
})