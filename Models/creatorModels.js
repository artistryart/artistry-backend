const mongoose = require("mongoose")

const creatorSchema = new mongoose.Schema(
    {
        Name: { 
            type: String, 
            required: true 
          },
          Phone_number: { 
            type: String, 
            required: true 
          },
          Creator_TaxCode: { 
            type: Number, 
            required: true },
          Citizen_ID: { 
            type: String, 
            minlength: 12,
            required: true },
          Creator_Bio: {
            type: String,
          },
          User_ID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,}
    },

    {
        timestamps: true
    }
);

const creatorModel  = mongoose.model("Creator", creatorSchema)

module.exports = creatorModel
