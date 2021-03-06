services = require 'mongoose'
Schema   = services.Schema
ObjectId = Schema.ObjectId

obj = 
  id       : ObjectId
  uid      : Number
  title    : String
  url      : String
  pic      : String
  content  : String
  catename : String
  catealias : String
  username : String
  cdate : 
    type    : Date
    default : Date.now 
  mdate : 
    type    : Date
    default : Date.now 

exports.ContentsSchema = new Schema obj

#export obj2json
exports.obj2json = ( obj ) ->
  json = 
    id    : obj.id
    uid   : obj.uid
    title : obj.title
    url   : obj.url
    pic   : obj.pic
    content   : obj.content
    catename  : obj.catename
    catealias : obj.catealias
    username  : obj.username
    cdate : obj.cdate
    mdate : obj.mdate