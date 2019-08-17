module.exports.home=function(req,res){
    return res.end('<h1>Express is up for codeial</h1>');
}
module.exports.action=function(req,res){
    return res.end('hii I am very good in cricket****');
}
module.exports.score=function(req,res){
    return res.end('<h1>200 vs wi,140 vs aus,130 vs nz');
}