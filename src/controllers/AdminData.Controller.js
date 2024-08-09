// import { Admin } from "../models/AdminData.model.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { asyncHandler } from "../utils/AsyncHandler.js";

// const dataForAdmin = asyncHandler(async (req, res) => {
//     const { dataAdmin ,remainigStock} = req.body;

//     if (!dataAdmin) {
//         throw new ApiError(400, "Data not found!");
//     }

//     try {
//         const Data = await Admin.create({ dataAdmin , remainigStock});
//         return res.status(201).json(new ApiResponse(200, Data, "Data created successfully."));
//     } catch (error) {
//         console.error("Error creating data for admin:", error);
//         throw new ApiError(500, "Internal Server Error");
//     }
// });

// const getDataForAdmin = asyncHandler(async (req, res) => {
//     try {
//         const Dataget = await Admin.find({});
//         return res.status(200).json(new ApiResponse(200, Dataget, "Data found successfully."));
//     } catch (error) {
//         console.error("Error getting data for admin:", error);
//         throw new ApiError(500, "Internal Server Error");
//     }
// });

// const deleteDataForAdmin = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     try {
//         const dataDel = await Admin.findByIdAndDelete(id);
//         if (!dataDel) {
//             throw new ApiError(404, "Data not found");
//         }
//         return res.status(200).json(new ApiResponse(200, dataDel, "Data deleted successfully."));
//     } catch (error) {
//         console.error("Error deleting data for admin:", error);
//         throw new ApiError(500, "Internal Server Error");
//     }
// });

// export {
//     dataForAdmin,
//     getDataForAdmin,
//     deleteDataForAdmin
// };
import { Admin } from "../models/AdminData.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

// Create data for admin
const dataForAdmin = asyncHandler(async (req, res) => {
  const { dataAdmin, remainingStock } = req.body;

  if (!dataAdmin || remainingStock === undefined) {
    throw new ApiError(400, "Data not found or remaining stock is undefined!");
  }

  try {
    const Data = await Admin.create({ dataAdmin, remainingStock });
    return res.status(201).json(new ApiResponse(200, Data, "Data created successfully."));
  } catch (error) {
    console.error("Error creating data for admin:", error);
    throw new ApiError(500, "Internal Server Error");
  }
});

// Get all data for admin
const getDataForAdmin = asyncHandler(async (req, res) => {
  try {
    const dataGet = await Admin.find({});
    return res.status(200).json(new ApiResponse(200, dataGet, "Data found successfully."));
  } catch (error) {
    console.error("Error getting data for admin:", error);
    throw new ApiError(500, "Internal Server Error");
  }
});

// Delete data for admin by ID
const deleteDataForAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const dataDel = await Admin.findByIdAndDelete(id);
    if (!dataDel) {
      throw new ApiError(404, "Data not found");
    }
    return res.status(200).json(new ApiResponse(200, dataDel, "Data deleted successfully."));
  } catch (error) {
    console.error("Error deleting data for admin:", error);
    throw new ApiError(500, "Internal Server Error");
  }
});

export {
  dataForAdmin,
  getDataForAdmin,
  deleteDataForAdmin
};
