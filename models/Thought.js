const { Schema, model } = require('mongooose');

const thought = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {

        }
    }
)