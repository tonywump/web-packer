// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var oldURL = null;

this.setInterval(
  function update() {
    var qrcode = document.getElementById('qrcode');
    var urls = localStorage.getItem("WEB-PACKER-URL");
    if (urls == oldURL) return;
    oldURL = urls;
    var imgSrc = QRCode(urls, 300, 300);
    qrcode.innerHTML = '<img src="' + imgSrc + '" alt="" width="300" height="300" />';
  }, 3000
);

window.onload = function () {
  var qrcode = document.getElementById('qrcode');
  var urls = localStorage.getItem("WEB-PACKER-URL");
  if (urls == oldURL) return;
  oldURL = urls;
  var imgSrc = QRCode(urls, 300, 300);
  qrcode.innerHTML = '<img src="' + imgSrc + '" alt="" />';
};

function QRCode(content, width, height) {
  width = !!width ? width : 300;
  height = !!height ? height : 300;
  content = encodeURIComponent(content);
  return "https://api.qrserver.com/v1/create-qr-code/?size=" + width + "x" + height + "&data=" + content;
}