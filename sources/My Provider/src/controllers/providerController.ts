import { RequestHandler } from "express";
import Provider, { ProviderDocument } from "../model/provider";

interface InComingBody {
  name: string;
  level: string;
  isInUse: boolean;
  noOfSuccessfulMessages: number;
  period: number;
}

/* create new provider*/
export const createNewProvider: RequestHandler = async (req, res) => {
  const provider = await Provider.create<ProviderDocument>({
    name: (req.body as InComingBody).name,
    level: (req.body as InComingBody).level,
    isInUse: (req.body as InComingBody).isInUse,
    noOfSuccessfulMessages: (req.body as InComingBody).noOfSuccessfulMessages,
    period: (req.body as InComingBody).period,
  });

  res.json({ provider });
};

/* update provider */
export const updateProvider: RequestHandler = async (req, res) => {
  const { providerId } = req.params;
  // const provider = await Provider.findById(providerId);

  const { name, level, isInUse, noOfSuccessfulMessages, period } =
    req.body as InComingBody;

  const provider = await Provider.findByIdAndUpdate(
    providerId,
    {
      name,
      level,
      isInUse,
      noOfSuccessfulMessages,
      period,
    },
    { new: true }
  );

  if (!provider) {
    return res.json({ error: "Provider is not found!" });
  }

  await provider.save();
  res.json({ provider });
};

/* delete provider */
export const deleteProvider: RequestHandler = async (req, res) => {
  const { providerId } = req.params;

  const provider = await Provider.findByIdAndDelete(providerId);

  if (!provider) {
    return res.json({ error: "Provider is not found!" });
  }

  res.json({ message: "Provider is deleted successfully" });
};

/* view all providers */
export const viewAllProviders: RequestHandler = async (req, res) => {
  const providers = await Provider.find();
  res.json({ providers });
};

/* view provider by id */
export const viewProviderById: RequestHandler = async (req, res) => {
  const { providerId } = req.params;
  const provider = await Provider.findById(providerId);

  if (!provider) {
    return res.json({ error: "Provider is not found!" });
  }

  res.json({ provider });
};

/* view all providers with paging */
export const viewAllProvidersWithPaging: RequestHandler = async (req, res) => {
  try {
    // Adding Pagination
    const { page, pageSize } = req.params;

    const pageNumber = parseInt(page, 10);
    const pageSizeNumber = parseInt(pageSize, 10);

    const skip = (pageNumber - 1) * pageSizeNumber;

    // Truy vấn với phân trang
    const providers = await Provider.find().skip(skip).limit(pageSizeNumber);

    // Lấy tổng số lượng tài liệu
    const totalProviders = await Provider.countDocuments();
    const totalPages = Math.ceil(totalProviders / pageSizeNumber);

    // Trả về kết quả
    res.json({
      providers,
      totalProviders,
      totalPages,
      currentPage: pageNumber,
      pageSize: pageSizeNumber,
    });
  } catch (e) {
    res.status(500).send({ message: e });
  }
};


export const viewProvidersByName:RequestHandler = async(req,res) => {
  try {
    const {name} = req.body
    const provider = await Provider.find({
      name: { $regex: new RegExp(name, 'i') }
    });
    res.json({data:provider})
  } catch (e) {
    res.status(500).send({ message: e });
  }
}