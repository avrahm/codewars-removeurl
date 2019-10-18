function removeUrlAnchor(url){
  // TODO: complete
  var anchorIndex = url.indexOf('#');
  if(url.includes("#")){
    var finalUrl = url.slice(0,anchorIndex);
  }
 return finalUrl;
}