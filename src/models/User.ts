import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    // User data
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    // Timestamps
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IUser>("User", UserSchema);
