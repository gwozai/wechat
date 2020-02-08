// 用户朋友圈的数据模型
const DB = require('./../utils/connectDB')
const Schema = DB.Schema

const pyqNewsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  createDate: {
    type: String
  },
  content: {
    type: String,
    required: true,
    required: true
  },
  pictures: {
    type: Array,
     default: []
  },
  readCount: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  }
})

pyqNewsSchema.statics.findUserPyq = function (userId, ids) {
  return this
        .find({
          userId: {$in: ids}
        }).populate({path: 'userId', select: 'nickname photo signature'}).sort({_id: -1})
}

const pyqNews = DB.model('pyqNews', pyqNewsSchema)

module.exports = pyqNews
