import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
    image: {type: String},
    title: {type: String}
}, {
    collection: 'mk7-post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('mk7-post', postSchema);

async function query() {
    
    const result = await PostModel.find({});
    {
        if (result) {
            console.log("postDAO: " + JSON.stringify(result));
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    console.log("postDAO Create new or update: " + data);
    return Promise.resolve().then(() => {
        //if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        //} else {
        //    return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        //}
    });
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: PostModel
};