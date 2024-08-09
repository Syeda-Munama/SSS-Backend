// import mongoose from "mongoose";

// const AdminSchema = new mongoose.Schema({
//     dataAdmin: {
//         type: Array,
//         required: true,
//         validate: {
//             validator: function (v) {
//                 return Array.isArray(v);
//             },
//             message: props => `${props.value} is not a valid array!`
//         }
//     },
//     remainigStock : {
//         required : true,
//         type : Number
//     }
// });

// export const Admin = mongoose.model("Admin", AdminSchema);

// import mongoose from "mongoose";

// const AdminSchema = new mongoose.Schema({
//   dataAdmin: {
//     type: Array,
//     required: true,
//     validate: {
//       validator: function (v) {
//         return Array.isArray(v);
//       },
//       message: props => `${props.value} is not a valid array!`
//     }
//   },
//   remainingStock: {
//     required: true,
//     type: Number
//   }
// });

// export const Admin = mongoose.model("Admin", AdminSchema);
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  dataAdmin: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return Array.isArray(v);
      },
      message: props => `${props.value} is not a valid array!`
    }
  },
  remainingStock: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return Array.isArray(v);
      },
      message: props => `${props.value} is not a valid array!`
    }
  }
});

export const Admin = mongoose.model("Admin", AdminSchema);
