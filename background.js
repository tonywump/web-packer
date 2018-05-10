// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


// function updateQRCode(){
//   var urls = [];
//     window.tabs.forEach(function(tab){
//       //collect all of the urls here, I will just log them instead
//       console.log(tab.url);
//       urls.push(tab.url);
//     });
//     var json = JSON.stringify(urls);
//     console.log(json);
//     localStorage.setItem("URLS",json);
// }



chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    var urls = [];
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.url);
      urls.push(tab.url);
    });
    var json = JSON.stringify(urls);
    localStorage.setItem("WEB-PACKER-URLS",json);
  });
});

this.setInterval(
  function update(){
    chrome.windows.getAll({populate:true},function(windows){
      windows.forEach(function(window){
        var urls = [];
        window.tabs.forEach(function(tab){
          //collect all of the urls here, I will just log them instead
          console.log(tab.url);
          urls.push(tab.url);
        });
        var json = JSON.stringify(urls);
        localStorage.setItem("WEB-PACKER-URLS",json);
      });
    });
  },3000
);