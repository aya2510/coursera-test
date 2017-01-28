(function(window) {
 names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
for (var i = 0; i < names.length; i++) {
 if (names[i].charAt(0)==="J" || names[i].charAt(0).toLowerCase()==="j" ){
    // byeSpeaker.xxxx
    byeSpeaker.saygoodbye(names[i]);
  } else {
    // helloSpeaker.xxxx
    helloSpeaker.sayhello(names[i]);
  }
}
}
)(window);
