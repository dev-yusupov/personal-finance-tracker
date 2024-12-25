import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs'; // Change this line

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;

    createdAt: Date;

    comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

UserSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = async function (userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
