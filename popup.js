// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

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
	// default size 120x120
	width = !!width ? width : 120 ;
	height = !!height ? height : 120;
	// Google API
	content = encodeURIComponent(content);
    return 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
}