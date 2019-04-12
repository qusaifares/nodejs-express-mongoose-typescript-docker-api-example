import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    bio: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    website: {
        type: String,
        maxlength: 100,
    }
});

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;
