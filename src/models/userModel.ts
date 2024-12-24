import mongoose, { Schema, Document } from "mongoose";

// User interface

interface IUser extends Document {
    name: string;
    email: string;
    password: string;

    createdAt?: Date;
    updatedAt?: Date;

    version?: number;
}

const userSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    },
);

userSchema.pre<IUser>("save", function(next) {
    if (this.isNew) {
        this.createdAt = new Date();
        this.version = 1;
    } else {
        this.updatedAt = new Date();
        this.increment();
    }

    next();
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;