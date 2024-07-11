import { Router } from "express";
import {
  createNewProvider,
  updateProvider,
  deleteProvider,
  viewAllProviders,
  viewAllProvidersWithPaging,
  viewProviderById,
  viewProvidersByName
} from "../controllers/providerController";

const providerRouter = Router();

/* create new provider */
providerRouter.post("/create-provider", createNewProvider);

/* update provider */
providerRouter.patch("/update-provider/:providerId", updateProvider);

/* delete provider */
providerRouter.delete("/delete-provider/:providerId", deleteProvider);

/* view all providers */
providerRouter.get("/view-all-providers", viewAllProviders);

/* get provider by id*/
providerRouter.get("/view-provider-by-id/:providerId", viewProviderById);

/* view all providers with paging */
providerRouter.get("/view-all-providers/:page/:pageSize", viewAllProvidersWithPaging);

providerRouter.post("/view-providers-by-name",viewProvidersByName)

export default providerRouter;
