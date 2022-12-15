let tank = {
  r: 0,
  L: 0,
  h: 0,
  terfogat: function() {
    return this.r*this.r*this.L*(Math.acos((this.r-this.h)/this.r) - (this.r-this.h)*Math.sqrt(2*this.r*this.h-this.h*this.h)/(this.r*this.r));
  }
}

let gui = {
  robj: document.getElementById("r"),
  Lobj: document.getElementById("L"),
  hobj: document.getElementById("h"),
  hvalueobj: document.getElementById("hvalue"),
  Vobj: document.getElementById("V"),
  
  refresh: function() {
    tank.r = this.robj.value;
    tank.L = this.Lobj.value;
    gui.hobj.max = tank.r*2;
    tank.h = this.hobj.value;
    this.hvalueobj.value = tank.h + " cm";
    this.Vobj.value = tank.terfogat().toFixed(3) + " cm3";
  }
}

window.addEventListener("load", function() {
  gui.robj.addEventListener("change", function() { gui.refresh(); });
  gui.hobj.addEventListener("change", function() { gui.refresh(); });
  gui.Lobj.addEventListener("change", function() { gui.refresh(); });
  gui.refresh();
});
