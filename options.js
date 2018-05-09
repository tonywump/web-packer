// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);
this.setInterval(
  function update(){
    var msg = document.getElementById('qrcode');
    var urls = localStorage.getItem('URLS');
    var imgSrc = QRCode(urls, 300, 300);
    msg.innerHTML = '<img src="' + imgSrc + '" alt="" />';
  },3000
);

window.onload = function(){
    var msg = document.getElementById('qrcode');
    var urls = localStorage.getItem('URLS');
    var imgSrc = QRCode(urls, 300, 300);
    msg.innerHTML = '<img src="' + imgSrc + '" alt="" />';
};


function QRCode(content, width, height){
	// 預設寬高為 120x120
	width = !!width ? width : 120 ;
	height = !!height ? height : 120;
	// 編碼
	content = encodeURIComponent(content);
    return 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
}