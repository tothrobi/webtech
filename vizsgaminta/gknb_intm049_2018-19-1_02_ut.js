function jegyTeszt() {
  'use strict';
  
  function testOsztalyzat() {
    jsUnity.assertions.assertEqual(2, osztalyzat(26), "2-es alsó ponthatár 26 pont!");
    jsUnity.assertions.assertEqual(2, osztalyzat(30), "2-es felső ponthatár 30 pont!");
    jsUnity.assertions.assertEqual(3, osztalyzat(31), "3-es alsó ponthatár 31 pont!");
    jsUnity.assertions.assertEqual(3, osztalyzat(37), "3-es felső ponthatár 37 pont!");
    jsUnity.assertions.assertEqual(4, osztalyzat(38), "4-es alsó ponthatár 38 pont!");
    jsUnity.assertions.assertEqual(4, osztalyzat(44), "4-es felső ponthatár 44 pont!");
    jsUnity.assertions.assertEqual(5, osztalyzat(45), "5-es alsó ponthatár 45 pont!");
    jsUnity.assertions.assertEqual(5, osztalyzat(50), "5-es felső ponthatár 50 pont!");
    jsUnity.assertions.assertEqual(1, osztalyzat(25), "elégtelennek kellene lennie!");
  }
  
};

jsUnity.log = function(uzenet) {
  console.log(uzenet);
}

jsUnity.run(jegyTeszt);
