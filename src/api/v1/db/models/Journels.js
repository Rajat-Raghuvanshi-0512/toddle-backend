const { Schema, model, Types } = require('mongoose')

const JournelSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    students: [{ type: Types.ObjectId, ref: 'user' }],
    published_at: {
      type: String,
      required: true,
    },
    published_by: {
      type: String,
      required: true,
    },
    attachment: {
      url: String,
    },
  },
  { versionKey: false, timestamps: true }
)

module.exports = model('journels', JournelSchema)
