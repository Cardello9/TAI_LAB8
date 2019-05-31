import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import mongoConverter from '../service/mongoConverter';

const postSchema = new mongoose.Schema({
  name: {type: String},
  url: {type: String},
  title: {type: String},
  text: {type: String}
}, {
  collection: 'mk-post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('mk-post', postSchema);

async function query() {
  const result = await PostModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

export default {
  query: query,

  model: PostModel
};
