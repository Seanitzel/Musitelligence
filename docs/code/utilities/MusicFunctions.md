---
title: MusicFunctions
---

# MusicFunctions

## Functions

<dl>
<dt><a href="#pitchClassesToNotes">pitchClassesToNotes({pitchClasses}, octave)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of notes with a specific octave.</p>
</dd>
<dt><a href="#toPianoChordNotes">toPianoChordNotes({pitchClasses}, octave, inversion)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of notes that represent chord played on a piano in a certain octave.</p>
</dd>
<dt><a href="#calculateInterval">calculateInterval(pitchClass1, pitchClass2)</a> ⇒ <code>Number</code></dt>
<dd><p>Calculate the pure interval between 2 pitch classes.</p>
</dd>
<dt><a href="#noteToObject">noteToObject(pitch)</a> ⇒ <code>Object</code></dt>
<dd><p>Turns a note into an object with pitch class and octave.</p>
</dd>
<dt><a href="#isRest">isRest(note)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if a note is a rest, else false.</p>
</dd>
<dt><a href="#transposeRawNote">transposeRawNote(note, interval)</a> ⇒ <code>string</code> | <code>*</code></dt>
<dd><p>Transpose a raw note by interval.</p>
</dd>
<dt><a href="#notesInRange">notesInRange(base, range)</a></dt>
<dd><p>Returns an object where the keys are raw notes and their value is an instance of that note.</p>
</dd>
</dl>

<a name="pitchClassesToNotes"></a>

## pitchClassesToNotes({pitchClasses}, octave) ⇒ <code>Array</code>
Returns an array of notes with a specific octave.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| {pitchClasses} | <code>Array</code> | Array of pitch classes. |
| octave | <code>number</code> | Octave to assign to notes.. |

<a name="toPianoChordNotes"></a>

## toPianoChordNotes({pitchClasses}, octave, inversion) ⇒ <code>Array</code>
Returns an array of notes that represent chord played on a piano in a certain octave.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| {pitchClasses} | <code>Array</code> | Array of pitch classes. |
| octave | <code>number</code> | Octave for the chord root. |
| inversion | <code>number</code> | Whhether to invert the chord. 0 - root position, 1 - 1st inversion, 2 - 2nd inversion,     etc... |

<a name="calculateInterval"></a>

## calculateInterval(pitchClass1, pitchClass2) ⇒ <code>Number</code>
Calculate the pure interval between 2 pitch classes.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pitchClass1 | <code>PitchClass</code> | first note |
| pitchClass2 | <code>PitchClass</code> | second note |

<a name="noteToObject"></a>

## noteToObject(pitch) ⇒ <code>Object</code>
Turns a note into an object with pitch class and octave.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>String</code> | Pitch as a string, e.g Ab3 |

<a name="isRest"></a>

## isRest(note) ⇒ <code>boolean</code>
Returns true if a note is a rest, else false.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| note | <code>string</code> | Raw note. |

<a name="transposeRawNote"></a>

## transposeRawNote(note, interval) ⇒ <code>string</code> \| <code>\*</code>
Transpose a raw note by interval.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| note | <code>string</code> | Raw note. |
| interval | <code>number</code> | Interval to transpose by. |

<a name="notesInRange"></a>

## notesInRange(base, range)
Returns an object where the keys are raw notes and their value is an instance of that note.

**Kind**: global function  

| Param |
| --- |
| base | 
| range | 
