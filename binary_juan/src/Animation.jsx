import {Pt, Group, Line, Create, Sound, Triangle, Const, Geom} from 'pts';
import {PtsCanvas} from 'react-pts-canvas';
import {Synth} from 'tone';

export class AnimationExample extends PtsCanvas {

    constructor() {
      super();
      this.noiseGrid = [];
    }
  
    _create() {
      // Create a line and a grid, and convert them to `Noise` points
      let gd = Create.gridPts( this.space.innerBound, 20, 20 );
      this.noiseGrid = Create.noisePts( gd, 0.5, 0.05, 20, 20 );
    }
  
    componentDidUpdate() {
      if (this.props.pause) {
        this.space.pause();
      } else {
        this.space.resume();
      }
    }
  
    // Override PtsCanvas' start function
    start(space, bound) {
      this._create();
    }
  
    // Override PtsCanvas' resize function
    resize() {
      this._create();
    }
  
    // Override PtsCanvas' animate function
    animate(time, ftime) {
  
      if (!this.noiseGrid) return;
  
      // Use pointer position to change speed
      let speed = this.space.pointer.$subtract( this.space.center ).divide( this.space.center ).abs();
  
      // Generate noise in a grid
      this.noiseGrid.forEach( (p) => {
        p.step( 0.01*(1-speed.x), 0.01*(1-speed.y) );
        this.form.fillOnly("#123").point( p, Math.abs( p.noise2D() * this.space.size.x/18 ), "square" );
      });
  
    }
  
  }

export class PointerExample extends PtsCanvas {
  constructor() {
    super();
    this.ptsRandom = [];
  }

  _create(){
    this.ptsRandom = Create.distributeRandom(this.space.innerBound, 100);
  }

  start(space, bound) {
    this._create();
  }

  animate(){
    let t = this.space.pointer;

    this.ptsRandom.sort( (a,b) =>
      a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
    );

    
    this.form.fillOnly("#123", 1);
    this.ptsRandom.forEach( (p, i) => this.form.point( p, 20 - 20*i/this.ptsRandom.length, "circle" ) );
    
    this.form.fillOnly("#fff").points( this.ptsRandom, 2, "circle" );

    let three = this.ptsRandom.slice(0, 8);
    let threeLines = three.map( (p) => [p, this.space.pointer] );
    this.form.strokeOnly("f05", 2).lines( threeLines );
    this.form.fill("#f05").points( three, 3, "circle");
  }
}

export class ToneExample extends PtsCanvas{

  start(space, bound) {
    this._create();
  }

  _create(){
    
    this.index = new Pt(-1,-1);
    this.synth = new Synth();
    this.sound = Sound.from( this.synth, this.synth.context ).analyze(128);
    this.synth.toMaster();
  }

  animate(){
    if (this.synth.context.state === 'suspended') { // mostly for safari
      this.form.fillOnly("#fff").text( [20, 30], "Click anywhere to start" );
    } 

    let area = this.space.size.$divide( 3 );
    let idx = this.space.pointer.$divide( area ).floor();
    let rect = [idx.$multiply(area), idx.$multiply(area).add(area)];

    let t1 = this.sound.timeDomainTo( area, rect[0].$subtract(0, area.y/2) );
    let t2 = t1.map( t => t.$add(0, area.y) ).reverse();
    let freqs = this.sound.freqDomainTo( [area.x, area.y/2], [rect[0].x, 0] ).map( f => [[f.x, rect[0].y+area.y/2-f.y], [f.x, rect[0].y+area.y/2+f.y]] );

    this.form.fillOnly("#fe3").polygon( t1.concat(t2) );
    this.form.strokeOnly("#62e", Math.ceil(area.x/128) ).lines( freqs );

    let key = ["C3", "E3", "G3", "C4", "E4", "G4", "C5", "E5", "G5"][ idx.y*3+idx.x ];
    this.form.font(120, 'bold').fillOnly("#fff").text( rect[0].$add( 10, 110 ), key );

    if (!this.index.equals(idx)) { // play if on different area
      this.synth.triggerAttackRelease( key, '4n');
      this.index = idx;
    }

    this.space.bindMouse().bindTouch().play();
  }

  action(type, x, y){
    if (this.synth.context.state === 'suspended') {
      this.synth.context.resume();
    }
  }


}