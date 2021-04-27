window.onhashchange = function(e){
    const oldurl = e.oldurl.split('#')[1]
    const newUrl = e.newUrl.split('#')[1]
    console.log(oldurl, newUrl)
}