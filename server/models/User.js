import mongodb from 'mongoose';

const userSchema = mongodb.Schema({
    _id: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true},
    role: { type: String, enum: ["user", "hotelOwner"], default: "user"},
    recentSearchedCities: [{type: String, required: true}],
}, {timestamps: true}
);

const User = mongodb.model('User', userSchema);

export default User;