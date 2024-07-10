import { model, Schema } from "mongoose";

export interface ProviderDocument {
  name: string;
  level: string;
  isInUse: boolean;
  noOfSuccessfulMessages: number;
  period: number;
}

const providerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["Primary", "Secondary"],
    },
    isInUse: {
      type: Boolean,
      required: true,
    },
    noOfSuccessfulMessages: {
      type: Number,
      required: true,
    },
    period: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Provider", providerSchema);
