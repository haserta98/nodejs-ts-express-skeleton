import mongoose from 'mongoose';

export interface ITest extends mongoose.Document {
  username: string,
}

export const TestSchema = new mongoose.Schema({
  username: {type: String, required: true},

});

const TestDomain = mongoose.model<ITest>("Test", TestSchema);

export default TestDomain;
